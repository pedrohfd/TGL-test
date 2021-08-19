export interface GameToAddCartProps {
  id: string
  game_type: string
  price: number
  gameNumbers: any[]
  color: string
  betDate: Date
}

export interface CartProps {
  games: GameToAddCartProps[]
  totalPrice?: number
  length: number
}
