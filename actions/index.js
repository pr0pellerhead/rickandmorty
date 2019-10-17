// export const fetchCharacters = (data) => {
//     return {
//         type: 'FETCH_CHARACTERS',
//         data: data
//     }
// };

export const fetchCharacters = (data) => {
    return (dispatch) => {
        fetch(
            'https://rickandmortyapi.com/api/character/',
            {method: 'get'}
        )
        .then(res => res.json())
        .then(data => {
            this.setState({characters: data.results});
        });
    }
};


