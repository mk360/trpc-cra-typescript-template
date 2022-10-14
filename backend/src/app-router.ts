import { initTRPC } from "@trpc/server";

const client = initTRPC.create();

export const appRouter = client.router({
  helloWorld: client.procedure.query(() => ({ quote: 'Hello world!' }))
});

export type AppRouter = typeof appRouter;
