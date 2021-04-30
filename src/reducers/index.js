import { combineReducers } from 'redux'


export const storiesByTitleReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_STORIES_BY_TITLE':
            return action.payload
        default:
            return state 
    }
}

export const storiesByAuthorReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_STORIES_BY_AUTHOR':
            return action.payload
        default:
            return state 
    }
}

export const searchedWordReducer = (word="", action) => {
    console.log("Inside Reducers:")
    console.log(word)
    switch(action.type) {
        case 'SEARCH_VALUE':
            return action.payload
        default:
            return word 
    }
}

export default combineReducers({
    storiesByTitle: storiesByTitleReducer,
    storiesByAuthor: storiesByAuthorReducer,
    searchedWord: searchedWordReducer
})
