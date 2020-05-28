const PrivateKeyProvider = require("@truffle/hdwallet-provider");

// insert the private key of the account used in metamask eg: Account 1 (Miner Coinbase Account)
const privateKey = "<KEY_HERE>";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>

  networks: {
    freight_trust: {
      host: "3.57.207.168",
      port: 3435,
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
      network_id: "*" // chainID is 211
    },
    besuWallet: {
      provider: () => new PrivateKeyProvider(privateKey, "http://localhost:8545"),
      network_id: "*"
    }
  }
};