const SHA256 = require("crypto-js/sha256");

module.exports = class Miner {
 
    constructor() {
        this.hash
    }

    generateNewHash(stringGigante){
        this.hash = SHA256(stringGigante)
        let teste = this.hash.toArr
        return teste
    }

  

}