import { app } from "./controller/app";
import { clientRouter } from "./routes/clientRouter";
import { userRouter } from "./routes/userRouter";

app.use('/user', userRouter)
app.use('/client', clientRouter)