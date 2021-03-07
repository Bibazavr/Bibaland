import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

export class Users extends Model {
    static table = "users";

    static timestamps = true;

    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            length: 25,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    };
}