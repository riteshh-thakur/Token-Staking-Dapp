import {ethers,Contract} from "ethers";
import stakingAbi from "../ABI/stakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";


export const connectWallet = async()=> {
    try{
        let [signer,provider,stakingContract,stakeTokenContract,chainId]=[null]
        if(window.ethereum === null){
            throw new Error("Metamask is not installed");
        }
        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        let chainIdHex= await window.ethereum.request({
            method: 'eth_chainId'
        })
        chainId= parseInt(chainIdHex, 16)
        let selectedAccount = accounts[0];
        if(!selectedAccount){
            throw new Error("No ehtereum accounts available")
        }
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const stakingContractAddress = "0xB57ee0797C3fc0205714a577c02F7205bB89dF30"
        const stakeTokenContractAddress= "0xEc29164D68c4992cEdd1D386118A47143fdcF142"

        stakingContract = new Contract(stakingContractAddress, stakingAbi, signer);
        stakeTokenContract = new Contract(stakeTokenContractAddress,stakeTokenAbi, signer);
        
        return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}
    }catch(error){
        console.error(error);
        throw error
    }
}