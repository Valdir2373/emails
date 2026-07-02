import { UserController } from "../controllers/UserController";
import { DependencyInjection } from "../pattern/DependencyInjection";
import { ServerPort } from "../server/ServerPort";

export class UserModule{
    private server: ServerPort;
    constructor(
        private di:DependencyInjection
    ){
        this.server = this.di.getDependency<ServerPort>(ServerPort)
        new UserController(this.server)
    }

}