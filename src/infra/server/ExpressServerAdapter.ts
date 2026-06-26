import { methodHttp, middleWare, ServerPort } from "./ServerPort";
import express, { Express } from "express"

export class ExpressServerAdapter extends ServerPort {
    private app:Express
    constructor(){
        super()
        this.app = express()
        this.app.use(express.json({limit:"100mb"}))
    }

    addRouter(method: methodHttp, path: string, callback: middleWare): void {
        console.log(`Rota ${method.toUpperCase()}: ${path}`);
        this.app[method](path,callback)
    }

    listen(port: number): void {
        this.app.listen(port, ()=> console.log(port))
    }
}