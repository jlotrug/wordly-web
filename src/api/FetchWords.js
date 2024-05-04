import axios from "axios"

export const FetchWords = async(dispatchFunction, wordLength) => {
    let url = getUrl(wordLength)

    dispatchFunction({type: 'FETCH_WORDS_INIT'})

    try{
        const result = await axios.get(url)
        dispatchFunction({
            type: 'FETCH_WORDS_SUCCESS',
            payload: upperCaseArray(result.data)
        })
    }catch(e){
        console.log(e);
        dispatchFunction({type: 'FETCH_WORDS_FAIL'})
    }


}

const upperCaseArray = (words) => {
    let adjustedWords = []

    for(let i=0; i<words.length; i++){
        // words[i].word = words[i].word.toUpperCase()
        adjustedWords[i] = words[i].word.toUpperCase()
    }

    return adjustedWords
}

const getUrl = (num) => {

    switch(num){
        case 5:
            return process.env.REACT_APP_FIVELETTERWORDS_URL
    }
}