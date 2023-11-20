import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from '@ethersproject/providers';

import { contractABI, contractAddress } from "../utils/contractDetail"

const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.enable(); // Request user permission to connect if not already connected
  }
  const provider = new Web3Provider(ethereum);
  
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;  
};

async function addSong(name, link) {
  const tx = await contract.addSong(name, link);
  await tx.wait();
  console.log('Song added successfully!');
}

async function tipArtist(id, value) {
  const tx = await contract.tipArtist(id, { value });
  await tx.wait();
  console.log('Tip sent successfully!');
}


export const TransactionProvider = ({children}) =>{
  const [Account,setAccount] = useState('')
  const [transactionCount,setTransactionCount] = useState(0);
  const checkWallet = async () => {
    if(!ethereum) return;
    const accounts = await ethereum.request({method:'eth_accounts'});
    setAccount(accounts[0]);
    console.log(accounts);
  }

  
  async function getSongCount() {
    const count = await contract.songCount();
    console.log('Current song count:', count.toString());
  }

  const disconnectWallet = async()=>{
    try{
      if(!ethereum) return;
      // Reset current account
      setAccount(null);
      window.location.reload();
    }
    catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return;

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      setAccount(accounts[0]);
      console.log(accounts);
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const TipTransaction = async (receiver,amount) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: Account,
            to: receiver,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(receiver, parsedAmount);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);

      throw new Error("Ethereum object not found");
    }
  };

  const contract  = createEthereumContract();

  useEffect(()=>{
    checkWallet();
  },[])

  return(
    <TransactionContext.Provider value={{transactionCount,connectWallet,disconnectWallet,Account,getSongCount}}>
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContext