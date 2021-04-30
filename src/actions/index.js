// const frontPage = "http://hn.algolia.com/api/v1/search?tags=front_page"

const TITLE = "https://hn.algolia.com/api/v1/search?query="
const AUTHOR = "https://hn.algolia.com/api/v1/search?tags=story,author_"

export const fetchStoriesByTitle = (word) => async dispatch => {
    const apiResponse = await fetch(TITLE + word)
    const storiesData = await apiResponse.json()
    console.log(`Inside fetchStoriesByTitle: ${word}` )
    dispatch(
        {
            type: 'FETCH_STORIES_BY_TITLE',
            payload: storiesData.hits 
        }
    )
}

export const fetchStoriesByAuthor = (word) => async dispatch => {
    const apiResponse = await fetch(AUTHOR + word)
    const storiesData = await apiResponse.json()
    console.log(`Inside fetchStoriesByAuthor: ${word}` )
    dispatch(
        {
            type: 'FETCH_STORIES_BY_AUTHOR',
            payload: storiesData.hits 
        }
    )
}

export const fetchSearchedWord = (word) => {
    return {
        type: 'SEARCH_VALUE',
        payload: word
    }
}
