import express from "express";
import cors from "cors";

const PORT = 8080;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, () => {
    console.log(`Server running on => http://localhost:${PORT}`);
});
