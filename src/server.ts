import express, { Request, Response, Router } from "express";
import BlockChain from "./service/BlockChain";

const app = express();
app.use(express.json());
const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server stared in port ${PORT}`);
});

app.post("/", (request: Request, response: Response) => {
  const obj = request.body as object;

  const blockChain = new BlockChain(1);

  blockChain.addBlock(obj);

  return response.json(blockChain.getLastBlock());
});
