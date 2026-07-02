import { IRepository } from "./IRepository";

export interface IDataAcess {
    start():Promise<void>
    offline():Promise<void>
    saveEntity<T>(entity: { new (...args: any[]): T },entityR:any):Promise<any>
    getEntity<T>(entity: { new (...args: any[]): T }, entityR:any):Promise<T>
    deleteEntity<T>(entity: { new (...args: any[]): T }, id:string):Promise<void>
}