import { Router } from "express";
import { quizzesRouter } from "./rest/quizzes";
export const restRouter: Router = Router();
restRouter.use("/quizzes", quizzesRouter);
