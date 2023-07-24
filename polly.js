import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
    fromCognitoIdentityPool,
} from "@aws-sdk/credential-provider-cognito-identity";
import { Polly } from "@aws-sdk/client-polly";

// Create the Polly service client, assigning your credentials
const client = new Polly({
    region: "ap-northeast-2",
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: "ap-northeast-2" }),
        identityPoolId: "IDap-northeast-2:f35b46f2-6d94-4798-b40d-3338d6136467" // IDENTITY_POOL_ID
    }),
});
