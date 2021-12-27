import Block from "./Block";

export default class BlockChain {
  blocks: Block[];
  index: number = 0;
  difficult: number = 1;

  constructor(difficult = 1) {
    this.blocks = [new Block()];
    this.index + 1;
    this.difficult = difficult;
  }

  getLastBlock() {
    return this.blocks[this.blocks.length - 1];
  }

  addBlock(data: object) {
    const index = this.index;
    const previousHash = this.getLastBlock().hash;
    const difficult = this.difficult;

    const block = new Block(index, previousHash, data, difficult);

    this.index++;
    this.blocks.push(block);
  }

  isValid() {
    for (let i = 1; i < this.blocks.length; i++) {
      const currentBlock = this.blocks[i];
      const previousBlock = this.blocks[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }

      if (currentBlock.index !== previousBlock.index + 1) {
        return false;
      }

      if (currentBlock.prevHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
