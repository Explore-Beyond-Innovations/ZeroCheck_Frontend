import { EVENTS } from "@/constants/constants"
import Events from "../components/nft_events_rewards/EventBadges"
import { REWARD_DATA } from "@/constants/constants"
import TokenRewards from "../components/nft_events_rewards/TokenRewards"
import { CERTIFICATIONS } from "@/constants/constants"
import NFTCertifications from "../components/nft_events_rewards/NftCertifications"

export default function Page() {


    return (
        <>

            <div className="max-w-5xl mx-auto p-4">
                <TokenRewards rewards={REWARD_DATA} />
            </div>
            <div className="max-w-5xl mx-auto p-4">
                <Events certifications={EVENTS} />
            </div>
            <div className="max-w-5xl mx-auto p-4">
                <NFTCertifications certifications={CERTIFICATIONS} />
            </div>
        </>
    )
}

