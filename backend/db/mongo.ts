import { Database, MongoDBConnector } from 'https://deno.land/x/denodb/mod.ts';
import {Users} from "./users.ts";

const connector = new MongoDBConnector({
    uri: 'mongodb://127.0.0.1:27017',
    database: 'bibaland',
});

const db = new Database(connector);

db.link([Users]);

await db.sync();

console.log('db ping',  await db.ping())

await Users.create({
    id: '1',
    name: 'Bibazavr',
    email: 'example@mail.ru',
    password: 'qwerty'
});

export default db