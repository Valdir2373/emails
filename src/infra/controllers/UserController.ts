import { ServerPort } from "../server/ServerPort";

export class UserController{
    constructor(private server:ServerPort){
              this.server.addRouter("get","/users",(req,res)=>{
            res.send("Hello, Users!")
        })
    }
}