export interface BetsToAddCartProps {
  id: string
  game_type: string
  price: number
  gameNumbers: any[]
  color: string
  betDate: Date
}

export interface CartProps {
  bets: BetsToAddCartProps[]
  totalPrice?: number
  length: number
}
