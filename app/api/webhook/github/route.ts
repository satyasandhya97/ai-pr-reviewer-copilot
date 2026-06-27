import { handleGithubWebhook } from "@/features/github/server/webhook-handler";

/** Next.js App Router POST handler — delegates to shared webhook logic. */
export const POST = handleGithubWebhook;