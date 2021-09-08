require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.6.7",
  networks: {
    kovan: {
      url: "",
      accounts: [""]
    }
  },
  etherscan: {
    apiKey: ""
  }
};
