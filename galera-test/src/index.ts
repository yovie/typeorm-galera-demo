import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    for (let i = 0; i < 100; i++) {
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        await connection.manager.save(user);

        const check = await connection.manager.findByIds(User, [user.id]);
        console.log(user.id===check[0].id);
    }

}).catch(error => console.log(error));
