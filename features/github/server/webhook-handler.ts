import { getGithubApp } from "../utils/github-app";

async function isSignatureValid(payload: string, signature: string | null) {
    if (!signature) {
        return false;
    }

    const app = getGithubApp();
    return app.webhooks.verify(payload, signature)
}


export async function handleGithubWebhook(request: Request) {
    const payload = await request.text();
    const signature = request.headers.get("x-hub-signature-256");
    const eventName = request.headers.get("x-github-event");

    const isValid = await isSignatureValid(payload, signature)
}