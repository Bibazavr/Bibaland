import {
    Application, send, isHttpError, REDIRECT_BACK,
    Status
} from "https://deno.land/x/oak/mod.ts";

import router from "./routers/books.ts";


const app = new Application();

// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Error Handler
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (isHttpError(err)) {
            switch (err.status) {
                case Status.NotFound:
                    // handle NotFound
                    ctx.response.redirect('/')
                    break;
                default:
                    console.error(ctx, err)
                // handle other statuses
            }
        } else {
            console.error(ctx, err)
            // rethrow if you can't handle the error
            throw err;
        }
    }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/frontend/web-build`,
        index: "index.html",
    });
});

await app.listen({port: 8000});
