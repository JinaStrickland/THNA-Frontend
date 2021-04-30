// frontPage = "http://hn.algolia.com/api/v1/search?tags=front_page"

export const fetchStoriesByTitle = (word) => async dispatch => {
    const apiResponse = await fetch(`http://hn.algolia.com/api/v1/search?query=${word}&tags=story`)
    const storiesData = await apiResponse.json()
    dispatch(
        {
            type: 'FETCH_STORIES_BY_TITLE',
            payload: storiesData.hits 
        }
    )
}

export const fetchStoriesByAuthor = (word) => async dispatch => {
    const apiResponse = await fetch(`https://hn.algolia.com/api/v1/search?tags=story,author_${word}`)
    const storiesData = await apiResponse.json()
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
