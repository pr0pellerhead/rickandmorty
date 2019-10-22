const initData = {
    characters: [],
    loading: false,
    fail: false
};

export const rootReducer = (state = initData, action) => {
    switch(action.type){
        case 'FETCH_CHARACTERS_SUCCESS':
            return {
                ...state, 
                characters: action.data,
                loading: false,
                fail: false
            };
        case 'FETCH_CHARACTERS_LOADING':
            return {
                ...state,
                loading: true,
                fail: false
            }
        case 'FETCH_CHARACTERS_FAIL':
            return {
                ...state,
                loading: false,
                fail: true
            }
    }
    return state;
}