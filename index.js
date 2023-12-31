import { error } from 'console';
import cloud from './sample'
import sharp from "sharp"
import configViewEngine from './view_engine';
import initWebRoute from './web';
import multer from 'multer'

const cookieParser=require('cookie-parser');
const ejs = require('ejs')
const express = require('express');


const paypal = require('paypal-rest-sdk');

const app = express();
const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io')
// const io =new Server(server)
// io.on('connection',(socket) =>{
//   console.log('useconnect')
// })
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const storage = multer.memoryStorage()
const upload= multer({storage: storage})

app.post('/updateimg', upload.single('img'), async (req, res) =>{
  
  const file=req.file
  console.log(req.file.originalname)
  const imgName=file.originalname
  const fileBuffer =await sharp(file.buffer).resize({height: 96, width: 96}).toBuffer()
  await cloud.UploadImageToS3(fileBuffer, imgName, file.mimetype)
  await cloud.UpdateHoSoNguoiDung()
})
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ARk2l4AWLC7Inhr9_Bz9Bf1N3Knkk58dENlciE9z52_IQP7fZ4q4U-V4RelWnNX8DAnMBXvBi1Mlf_TR',
  'client_secret': 'EEYloqRHu1GIxhIQO6qIxc9snb0xud7ZTpmK41KJobuUKXd9QIeqxlbWx1tZ5sh3RXar15_uWVXWfkRN'
});


app.use(express.static('assets'));

app.post('/pay', (req, res) => {
  const sl = req.body.sl
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "20 Anna",
                "sku": "001",
                "price": "20.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "20.00"
        },
        "description": "Anna"
    }]
};

paypal.payment.create(create_payment_json, function(error, payment){
  if(error){
    throw error;
  }else {
    for(let i = 0;i < payment.links.length;i++){
      if(payment.links[i].rel === 'approval_url'){
        res.redirect(payment.links[i].href);
      }
    }
  }
});

});
app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "20.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        // console.log(JSON.stringify(payment));
        // res.redirect('/');
        console.log(payment)
    }
});
res.redirect('/')
});

app.get('/cancel', (req, res) => res.send('Cancelled'));
app.post('/set', (req,res)=>{
  res.cookie('fog','bar')
  res.send("hleoo")
} )

server.listen(3000, () => {
  console.log('listening on port 3000')
});

configViewEngine(app);
initWebRoute(app);
