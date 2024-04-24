import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
    mychain: {
      url: "",
      chainId: 0,
      accounts: [process.env.PRIVATE_KEY || '']
    }
  },
  etherscan: {
    apiKey: {
      mychain: ':D'
    },
    customChains: [
      {
        network: "",
        chainId: 0,
        urls: {
          apiURL: "",
          browserURL: "",
        }
      }
    ]
  }
};

export default config;
