import axios from 'axios'

const MarketplaceContractAddress = '0x5d2E08d030eFb1EB7b200b317eb4d8a2cd37A554'
const CHAINID = '0xa86a'

const APIclient = axios.create({
  baseURL: `http://192.168.104.251:27017`,
  responseType: "json"
});

export {
  MarketplaceContractAddress,
  CHAINID,
  APIclient
}
