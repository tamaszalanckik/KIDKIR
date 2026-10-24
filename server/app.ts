import express, {
    type Request,
    type Response,
    type NextFunction,
} from "express";

export const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "Működik." });
});
