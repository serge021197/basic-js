const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) value = '';
    if (value == 'function () {}') {
      value = 'function() {}'
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if (position >= 0 && position < this.chain.length) {
      this.chain.splice(position, 1);
      return this;
    }
    this.chain = [];
    throw new Error();
  },
  finishChain() {
    let finish = this.chain.join('~~');
    this.chain = [];
    return finish
  }
}
module.exports = chainMaker;