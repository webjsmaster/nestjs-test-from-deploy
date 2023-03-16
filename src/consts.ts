export interface ICards {
  id: number,
  name: string,
  description: string,
  rate: number,
}

export const cards: ICards[] = [
  {
    id: 1,
    name: 'Thirst card',
    description: 'This is thirst card, and this any one',
    rate: 5
  },
  {
    id: 2,
    name: 'Second card',
    description: 'This is Second card, and this any one',
    rate: 4
  },
  {
    id: 1,
    name: 'Third card',
    description: 'This is third card, and this any one',
    rate: 3
  },
]