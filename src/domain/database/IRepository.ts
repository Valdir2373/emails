export interface IRepository<T> {
    create(entity:T):Promise<any>
    getById(id:string):Promise<any>
    delete(id:string):Promise<any>
}
