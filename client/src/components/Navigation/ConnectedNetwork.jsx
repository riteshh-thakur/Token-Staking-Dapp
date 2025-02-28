import { useContext } from "react"
import Web3Context from "../../context/Web3Context"

const ConnectedNetwork = () => {
    const {chainId}= useContext(Web3Context);
    if(chainId===11155111){
        return <p>Connected Account: Sepolia</p>
    }else{
        return <p>Connected Network: Unsupported</p>
    }

}
export default ConnectedNetwork