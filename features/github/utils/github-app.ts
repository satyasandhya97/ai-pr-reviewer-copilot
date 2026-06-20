import { App } from "octokit";

let githubAPP: App | null = null;


export function getGithubApp() {
    if (!githubAPP) {
        githubAPP = new App({
            appId: process.env.GITHUB_APP_ID!,
            privateKey: process.env.GITHUB_APP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
            webhooks: {
                secret: process.env.GITHUB_WEBHOOK_SECRET!
            }
        })
    }
    return githubAPP;
}

export function getGithubInstallUrl(userId: string) {
    const appName = process.env.GitHub_APP_NAME;
    const url = new URL(`https://github.com/apps/pr-review-copilot/installations/new`);
    url.searchParams.set("state", userId);
    return url.toString();
}
