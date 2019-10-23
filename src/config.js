export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "therealneotamoe-notes-uploads"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://5j823n5z1f.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Y2N15DSOe",
        APP_CLIENT_ID: "2jl3ul757rdnbsid13rdm87bub",
        IDENTITY_POOL_ID: "us-east-2:fbb35ba5-8e88-4c11-bd70-e451bbb51922"
    }
};
