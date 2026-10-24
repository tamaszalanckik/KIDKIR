import { app } from "./app";

const PORT: number = 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
