import {Router} from "https://deno.land/x/oak/mod.ts";
import {Users} from "../db/users.ts";

const RAuth = new Router({prefix: '/api/v1'});
RAuth
    .get("/users", async (context) => {
        context.response.body = await Users.all();
    })
    .get("/users/:id", (context) => {
    })

export default RAuth