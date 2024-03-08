const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/41e91658b1f84bdbba25be808884e3fd');
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

export async function getLastBlockNumber() {
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

export async function getUSDTBalance(address) {
  const usdtContract = new ethers.Contract(usdtContractAddress, ['function balanceOf(address) view returns (uint)'], provider);
  const balance = await usdtContract.balanceOf(address);
  return balance.toString();
}
