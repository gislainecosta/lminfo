import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import adminRouter from "./Router/AdminRouter";
import employeeRouter from "./Router/EmployeeRouter";
import officeRouter from "./Router/OfficeRouter";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.use(express.json());

app.use("", adminRouter);
app.use("/employee", employeeRouter);
app.use("/office", officeRouter);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});