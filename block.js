const Miner = require('./miner');

module.exports = class Block {

    constructor() {
        this.index
        this.timeStamp = new Date()
        this.nonce = 5
        this.data
        this.hash
        this.previousHash
    }

    generateHash(i){
        this.nonce = i
        let miner = new Miner()
        let stringGigante = "" + this.index + this.timeStamp + this.nonce + this.data + this.hash + this.previousHash
        
        return miner.generateNewHash(stringGigante)
    } 

    //Setters
    setIndex(index) {
        this.index = index++
    }

    setData(data) {
        this.data = data
    }

    setTimeStamp(timeStamp) {
        this.timeStamp = timeStamp
    }

    setNonce(nonce) {
        this.nonce = nonce
    }

    setHash(hash) {
        this.hash = hash
    }

    //Getters
    getIndex() {
        return this.index
    }

    getData() {
        return this.data
    }

    getTimeStamp() {
        return this.timeStamp
    }

    getNonce() {
        return this.nonce
    }

    getHash() {
        return this.hash
    }

}