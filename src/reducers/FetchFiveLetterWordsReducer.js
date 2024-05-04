export const FetchFiveLetterWordsReducer = (state, action) => {
    switch(action.type){
        case 'FETCH_WORDS_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'FETCH_WORDS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                words: action.payload
            }
        case 'FETCH_WORDS_FAIL':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
    }
}