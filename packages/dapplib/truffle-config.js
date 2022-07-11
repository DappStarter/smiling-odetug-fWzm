require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note rural million inner private slot gate'; 
let testAccounts = [
"0xda3e32de9bb6bc71372c4e0d3d3f7883bfbc040f71ddca12971a4934c8324a84",
"0x022f1fe0c75e8571369c769c35bd26e758195a0d542052fd7b4d8d9e2ad2c3de",
"0xbf0565629165e03cc40d5b76f82b76a2f2c04e9c3e74088d9410ae09c45375ab",
"0x099e887bf7bbb432bb0f224c213aab6f8cdea961ae582d0e6c3e45ca68148bb3",
"0x1f6c2c73a5d8aa5fb39eb0a9db54fda0132f949ba30c9df6ea2dba07680f98f2",
"0x9a85f6bfbde08b954e76932ea2fa0046bbd7b0b08aa54dbd8882cb5df60ddd6e",
"0x808e4f505b452c646f6fa0bbe75b3b7313eda2f0f6a23ab1b9eb4227c74898ea",
"0x98dc5b17b6b9c03dde7bcba27db0391fb29313e0dd8e881f6c51f93d1068c88f",
"0x0466459060da2bb58db315f6e4b478e75e63d83f9c547c161e7b7e397cf1e30e",
"0x6799c8135acfbdefcdf19cf69a5141156783ae735ef4059f6ad2265e8a2d23a8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

