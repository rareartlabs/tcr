const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

let secrets;
let mnemonic = '';

if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  ({ mnemonic } = secrets);
} else {
  mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';
}

module.exports = {
  networks: {
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000,
    },
    development: {
      provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 20000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000,
    },
  },
};
