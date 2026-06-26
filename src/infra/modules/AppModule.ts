import { DependencyInjection } from "../pattern/DependencyInjection";
import { ExpressServerAdapter } from "../server/ExpressServerAdapter";
import { ServerPort } from "../server/ServerPort";
import { UserModule } from "./UserModule";

export class AppModule{
    private di:DependencyInjection = new DependencyInjection()
    constructor(){
        this.di.registryDependency<ServerPort>(ServerPort,new ExpressServerAdapter())
    }
    private modules(){
        new UserModule(this.di)
    }

    public boot(port:number){
        this.modules()
        this.di.getDependency<ServerPort>(ServerPort).listen(port)
    }
}