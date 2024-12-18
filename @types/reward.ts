export interface Reward {
    type: string
    date: string
    eventName: string
    amount: number
    currency: string
  }
  
  export interface TokenRewardsProps {
    rewards: Reward[]
    title?: string
    className?: string
  }
  
  