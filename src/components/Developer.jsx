export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER'
}

export const developer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.ADD_DEVELOPER:
            return [...state, {
                fullName: action.payload.fullName,
                language: action.payload.language,
                tech: action.payload.tech,
                favFood: action.payload.favFood,
                favDrink: action.payload.favDrink,
                id: state.length + 1
            }]

        case actionType.DELETE_DEVELOPER:
            return state.filter(dev => dev.id !== action.payload.id);
        default:
            return state;
    }
}