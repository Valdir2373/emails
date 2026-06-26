import { DependencyInjection } from "../pattern/DependencyInjection";
import { ServerPort } from "../server/ServerPort";

export class UserModule{
    private server: ServerPort;
    constructor(
        private di:DependencyInjection
    ){
        this.server = this.di.getDependency<ServerPort>(ServerPort)
        this.server.addRouter("get","/users",(req,res)=>{
            res.send("Hello, Users!")
        })
    }

}