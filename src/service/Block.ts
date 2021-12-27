import { SHA256 } from "crypto-js";

export default class Block {
  timestamp;
  data: object;
  prevHash: string;
  hash: string;
  index: number;
  difficulty: number;
  nonce: number;
  constructor(index = 0, previousHash = "", data = {}, difficulty = 1) {
    this.index = index;
    this.prevHash = previousHash;
    this.data = data;
    this.timestamp = new Date();
    this.hash = this.computeHash();
    this.nonce = 0;
    this.difficulty = difficulty;

    this.mine();
  }

  computeHash() {
    return SHA256(
      this.index +
        this.prevHash +
        JSON.stringify(this.data) +
        this.timestamp +
        this.nonce
    ).toString();
  }

  mine() {
    this.hash = this.computeHash();

    while (!/^0*$/.test(this.hash.substring(0, this.difficulty))) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}
