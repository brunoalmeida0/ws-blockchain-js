const Block = require('../block');
const Miner = require('../Miner')

class App {

    constructor() {
        console.info('App has been initialized');
       this.main()
    }

    main() {
        let block = new Block()
        let miner = new Miner()
        let i = 2
        block.setIndex(123)
        block.setTimeStamp(new Date)
        block.setNonce(12)
        block.setData("Dado de teste")
        
        
        let hash = block.generateHash()
    
        // console.log(typeof(hash))

        while(hash[0] !== 0) {
            hash = block.generateHash(i++)
            console.log(`Hash: ${hash}`)
        }
        console.log(`Hash: ${hash}`)
        
    }

    
}

const initialize = new App();