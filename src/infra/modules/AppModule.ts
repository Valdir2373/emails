import { IDataAcess } from "../../domain/database/IDataAcess";
import { DataAcessPostgreeTypeOrm } from "../database/DataAcessPostgreeTypeOrm";
import { DependencyInjection } from "../pattern/DependencyInjection";
import { UserRepository } from "../repository/UserRepository";
import { ExpressServerAdapter } from "../server/ExpressServerAdapter";
import { ServerPort } from "../server/ServerPort";
import { UserModule } from "./UserModule";
import "reflect-metadata"

export class AppModule{
    private di:DependencyInjection = new DependencyInjection()
    private dataAcess: IDataAcess;
    constructor(){
        this.dataAcess = new DataAcessPostgreeTypeOrm()
        this.di.registryDependency<ServerPort>(ServerPort,new ExpressServerAdapter())
    }
    private modules(){
        new UserModule(this.di)
    }

    public async boot(port:number){
        this.modules()
        try {
            await this.dataAcess.start()


            const userRepo = new UserRepository(this.dataAcess)
           const userData = {
             email: "gmzin23212@gmail.com",
             password: "teste123",
             age: 12
            };

const createdUser = await userRepo.create(userData as any);
console.log("Usuário salvo com ID:", createdUser.id);

const foundUser = await userRepo.getById(createdUser.id);
console.log("Usuário recuperado:", foundUser);

            

        } catch (error) {
            console.log("error in database")
            console.log(error)
        }
        this.di.getDependency<ServerPort>(ServerPort).listen(port)
    }
}