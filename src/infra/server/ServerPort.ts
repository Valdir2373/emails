export type methodHttp = "get"|"post"|"put"|"delete"

export interface IReq {
    body:any,
}


export interface IRes {
    send(message:string):void,
    json(body:any):void,
    status(sts:number):IRes,
}

export type middleWare = (req:IReq,res:IRes) => void

export abstract class ServerPort {
    addRouter(method:methodHttp, path:string, callback:middleWare):void{}
    listen(port:number){}
}