import { IDataAcess } from "../../domain/database/IDataAcess";
import { IRepository } from "../../domain/database/IRepository";
import { User } from "../../domain/entity/User";

export class UserRepository implements IRepository<User>{
    constructor(private dataAcess:IDataAcess){}
    async create(entity: User): Promise<any> {
        return await this.dataAcess.saveEntity(User,entity)
    }

    async getById(id:string): Promise<User> {
       return await this.dataAcess.getEntity(User,id)
    }
    async delete(id: string): Promise<any> {
        await this.dataAcess.deleteEntity(User,id)
    }
}
