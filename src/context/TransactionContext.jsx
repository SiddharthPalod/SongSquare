import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// import { contractABI, contractAddress } from "../../backend/build/contracts/SongSquare.json"

const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionsContract;  
};

export const TransactionProvider = ({children}) =>{
  const transactionCount = 0;
  const checkWallet = async () => {
    if(!ethereum) return;
    const accounts = await ethereum.request({method:'eth_accounts'});
    console.log(accounts);
  }
  useEffect(()=>{
    checkWallet();
  },[])

  return(
    <TransactionContext.Provider value={transactionCount}>
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContext