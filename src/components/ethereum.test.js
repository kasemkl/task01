const { ethers } = require('ethers');
import { getLastBlockNumber,getUSDTBalance } from './ethereum';

describe('Ethereum Functions Test', () => {
  test('getLastBlockNumber returns the last block number', async () => {
    const blockNumber = await getLastBlockNumber();
    expect(typeof blockNumber).toBe('number');
    expect(blockNumber).toBeGreaterThanOrEqual(0);
  });

  test('getUSDTBalance returns the USDT balance for a valid address', async () => {
    const validAddress = '0x1234567890123456789012345678901234567890';

    const balance = await getUSDTBalance(validAddress);
    expect(typeof balance).toBe('string');
  });

  test('getUSDTBalance returns an error for an invalid address', async () => {
    const invalidAddress = '123123123123123';
    await expect(getUSDTBalance(invalidAddress)).rejects.toThrowError();
  });
});