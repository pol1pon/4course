export default interface Card {
    id: number
    image: string
    title: string
    description: string
    price: number
}

export const products: Card[] = [
    {
        id: 1,
        image: "",
        title: 'тарелка глубокая',
        description: '30 см с высокими бортиками',
        price: 2500
    },
    {
        id: 2,
        image: '',
        title: 'кружка',
        description: '350 мл для самого вкусного кофе',
        price: 2000
    },
    {
        id: 3,
        image: '',
        title: 'ваза',
        description: '2 литра для ваших ярких букетов',
        price: 4000
    },
    {
        id: 4,
        image: '',
        title: 'тарелка объемная',
        description: 'блюдце 20 см под разные вкусности',
        price: 3500
    }
]