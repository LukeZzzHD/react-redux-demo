const initState = () => ({
    number: 2,
    name: 'Noah',
    myList: [2, 4, 6, 8],
});

const rootReducer = (state = initState(), action) => {
    switch (action.type) {
        case 'INCREASE_NUMBER':
            console.log('Dispatched an action with the type ' + action.type);

            return {
                ...state,
                number: state.number + 1,
            };

        case 'DECREASE_NUMBER':
            console.log('Dispatched an action with the type ' + action.type);

            return {
                ...state,
                number: state.number - 1,
            };

        case 'ADD_TO_LIST':
            let newItem = action.payload.item;

            return {
                ...state,
                myList: [...state.myList, newItem],
            };

        default:
            return state;
    }
};

export default rootReducer;
