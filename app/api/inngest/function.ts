import { inngest } from "@/features/inngest/client";

export const processTask = inngest.createFunction(
    { id: "process-task", triggers: { event: "app/task.created" } },
    async ({ event, step }) => {
        // step.run gives this block a stable name in the Inngest dashboard
        const result = await step.run("handle-task", async () => {
            return { processed: true, id: event.data.id };
        });

        // step.sleep is also durable — the wait survives process restarts
        await step.sleep("pause", "1s");

        return { message: `Task ${event.data.id} complete`, result };
    }
);