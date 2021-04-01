require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strategy radar pumpkin unaware harvest canoe army gas'; 
let testAccounts = [
"0xaf6868aeba43365d451a465be83e889fc986224bd665a7eb888cf06b0b6ff542",
"0x4910284621ef072b457043b4aed18c6278015a03f0fb733e30670cd1204a1886",
"0x8e670670de5b3e7c0a548d86efcaaa2183457d0f654a8f5177ea2c3d2676aa68",
"0x9c65abeace0ca3366fae6c665264a3a9955666ebdfaf42f949f6018e3a22f2c6",
"0x61be6bba390baaf9ad5caea4eb3a9ea5dd1295c78132c286773047b19cee450c",
"0x45daabd659ce801b9d41643e40aa14dd953f88652e2c9845c497255d1dba2655",
"0xee965f07017b32b58a55217c041f3e49b0833a078581a44cc223a42b3ac2f477",
"0x596802261133f4b7ebde43611873774b888895d76728bcc694fb7f37336a3c13",
"0x3efcd9e791c5fed6d2d023b818243052ceb4d8ba28e9dab50c79f33d6ff594bf",
"0x85f2886e96eab1dfdfd76d8cdaacefa0769e46c3c68af6504dc66170d1938c4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
