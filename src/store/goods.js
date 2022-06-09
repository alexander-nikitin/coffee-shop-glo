import {v4 as uuidv4} from "uuid";

const goods = {
    state: {
        goods: [
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: '10.73'
            },
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'Presto Coffee Beans 1kg',
                country: 'Brazil',
                price: '15.99'
            },
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'AROMISTICO Coffee 1kg',
                country: 'Brazil',
                price: '6.99'
            },
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: '10.73'
            },
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: '10.73'
            },
            {
                id: uuidv4(),
                image: 'good-1.jpg',
                name: 'Solimo Coffee Beans 2kg',
                country: 'Brazil',
                price: '10.73'
            }
        ]
    },
    getters: {
        getGoods(state) {
            return {
                goods: state.goods,
            }
        }
    }
}

export default goods