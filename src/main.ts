import { AppModule } from "./infra/modules/AppModule"

const app = new AppModule()
app.boot(3000)