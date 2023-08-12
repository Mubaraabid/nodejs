import {Router} from "express";
import studentController from "../controller/student.js";

const studentRouter=new Router();
studentRouter.get("/allstd",studentController.getAll);
export default studentRouter;