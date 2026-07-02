import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../domain/entity/User"
import { IDataAcess } from "../../domain/database/IDataAcess"
import { IRepository } from "../../domain/database/IRepository"

export class DataAcessPostgreeTypeOrm implements IDataAcess{
    private dataSource:DataSource
    constructor(){
        this.dataSource = new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "segurancagm2373",
            database: "postgres",
            entities: [User],
            synchronize: true,
            logging: false,
        })

    }
    async saveEntity<T>(entity: { new(...args: any[]): T },entityR:any): Promise<any> {
        return  await this.dataSource.getRepository(entity).save(entityR)
    }
    async getEntity<T>(entity: { new(...args: any[]): T }, id:string): Promise<T> {
        return await this.dataSource.getRepository(entity).findOneBy({id}) as any
    }
    async deleteEntity<T>(entity: { new(...args: any[]): T }, id:string): Promise<void> {
        await this.dataSource.getRepository(entity).delete(id)
    }
    async start(): Promise<void> {
        await this.dataSource.initialize()
    }
    async offline(): Promise<void> {
        await this.dataSource.destroy()
    }

    
}


