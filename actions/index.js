export const fetchCharactersSuccess = (data) => {
    return {
        type: 'FETCH_CHARACTERS_SUCCESS',
        data: data
    }
};

export const fetchCharactersLoading = () => {
    return {
        type: 'FETCH_CHARACTERS_LOADING'
    }
};

export const fetchCharactersFail = () => {
    return {
        type: 'FETCH_CHARACTERS_FAIL'
    }
};

export const fetchCharacters = (data) => {
    return (dispatch) => {
        dispatch(fetchCharactersLoading());
        fetch(
            'https://rickandmortyapi.com/api/character/',
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            dispatch(fetchCharactersSuccess(data.results));
        })
        .catch(() => {
            dispatch(fetchCharactersFail());
        });
    }
};


