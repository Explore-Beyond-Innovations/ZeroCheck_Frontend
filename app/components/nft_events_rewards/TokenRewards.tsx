import { formatDate } from "@/utils/format-date"
import type { TokenRewardsProps } from "@/@types/reward"

export default function TokenRewards({
    rewards,
    title = "Rewards",
    className = ""
}: TokenRewardsProps) {
    return (
        <div className={`rounded-lg bg-white p-6 shadow-sm ${className}`}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
            <div className="space-y-4">
                {rewards.map((reward, index) => (
                    <div
                        key={`${reward.type}-${index}`}
                        className="grid grid-cols-3 gap-4 items-center hover:bg-gray-100"
                    >
                        <div className="space-y-1">
                            <p className="font-medium text-gray-900">{reward.type}</p>
                            <p className="text-sm text-gray-500">
                                {formatDate(reward.date)}
                            </p>
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-gray-900">{reward.eventName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm  font-bold text-black">
                                +{reward.amount} {reward.currency}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

