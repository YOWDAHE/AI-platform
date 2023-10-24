const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { error } = require("console");
const { GoogleAuth } = require("google-auth-library");
const configFile = require('dotenv').config({path: '../../../.env'});

if (configFile.error) {
    throw configFile.error;
}

// import { auth } from "@clerk/nextjs";
// import { TextServiceClient } from "@google-ai/generativelanguage";
// import { GoogleAuth } from 'google-auth-library';
// import { NextResponse } from "next/server";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;
console.log("the key: ", process.env.API_KEY );

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const prompt = "Repeat after me: one, two,";

client
    .generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    })
    .then((result) => {
        console.log(JSON.stringify(result, null, 2));
    });

// export async function POST(req: Request) {
//     try {
//         const { userId } = auth();
//         const body = await req.json();
//         const { message } = body;

//         if (!userId) {
//             return new NextResponse('Unautherized access', { status: 401 });
//         }
//         if (!client) {
//             return new NextResponse('paLM ai configeration error ', {status: 500})
//         }
//         if (!message) {
//             new NextResponse('No messages found...', {status: 400})
//         }
//     } catch (error) {
//         console.log("error in api/routes file: ", error);
//         return new NextResponse("Internal Server Error", {status: 500})
//     }
// }