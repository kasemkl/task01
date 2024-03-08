import React, { useEffect, useState } from 'react';
import { getLastBlockNumber, getUSDTBalance } from './components/ethereum';
import Card from './components/Card';
import './App.css'

function App() {
  const [lastBlockNumber, setLastBlockNumber] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState();
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchBlockNumber = async () => {
      try {
        const blockNumber = await getLastBlockNumber();
        setLastBlockNumber(blockNumber);
      } catch (error) {
        console.error('Error fetching last block number:', error.message);
      }
    };

    fetchBlockNumber();
  }, []);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const fetchBalance = async () => {
    try {
      if (address) {
        const balance = await getUSDTBalance(address);
        setUsdtBalance(balance);
      }
    } catch (error) {
      console.error('Error fetching USDT balance:', error.message);
    }
  };

  return (
    <div className="App">
      <div className='ether-info'>
        <h1>Ethereum Information</h1>

        <Card title="Last Block Number" value={lastBlockNumber} />
        <Card 
          title="USDT Balance"
          value={usdtBalance}
          address={address}
          button="Get the USDT Balance"
          onClick={fetchBalance}
          onChange={handleAddressChange}
        />
      </div>
    </div>
  );
}

export default App;
