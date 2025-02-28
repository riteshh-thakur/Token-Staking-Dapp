import StakedAmount from "./StakedAmount"
import RewardRate from "./RewardRate"
import EarnedReward from "./EarnedReward"

const DisplayPannel = () =>{
    return(<div>
        <StakedAmount/>
        <EarnedReward/>
        <RewardRate/>
    </div>)
}
export default DisplayPannel;