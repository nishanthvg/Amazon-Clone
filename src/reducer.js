export const intialState = {
    basket: [],user:null,
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


function reducer (state,action) {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            }
            break;
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
             };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if(index >= 0) {
                //exist then remove the item
                newBasket.splice(index,1);
            }else {
                console.warn(
                    'cant remove product (id: ${action.id}) as its not available'
                );
            }

            return { ...state, basket: newBasket };
            break;
        default:
            return state;
    }
}

export default reducer;