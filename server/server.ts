import { app } from "./app";

import dotenv from "dotenv";
dotenv.config({ quiet: true });

import db from "./src/db";

const PORT: number = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
