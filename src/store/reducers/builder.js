import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../action/type";
const initialState = {
    ingredients: {},
    price: 0,
};
const prices = {
    logoAnt: 5,
    logoAnt2: 5,
    // brown: 53,
    // black: 32,
    // pink: 25,
    // violet: 47
};

const builder = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case ADD_INGREDIENT:
            newState.ingredients[action.ingredient]++;
            newState.price += prices[action.ingredient];
            break;
        case REMOVE_INGREDIENT:
            newState.ingredients[action.ingredient]--;
            newState.price -= prices[action.ingredient];
            break;
        case SET_INGREDIENTS:
            return { ...action.data };

        default:
            break;
    }

    return newState;
}

export default builder;