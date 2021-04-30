import React from 'react'
import { connect } from 'react-redux'

import { fetchSearchedWord, fetchStoriesByTitle, fetchStoriesByAuthor } from '../actions'

import './Stories.css'

const Stories = (props) => {

  const getInputValue = (word) => {
    fetchSearchedWord(word)
  }
  
  return (
    <div className="Stories">
      <form className="Content" >
        <input type="text" placeholder="Search Stories By Title..." 
                onChange={(e) => getInputValue(e.target.value)}
                style={{ width: "30%"}}>
        </input>
        <button onClick={fetchStoriesByTitle(props.searchedWord)} >
          Search
        </button>
      </form>
      <form className="Content" >
        <input type="text" placeholder="Search Stories By Author..." style={{ width: "30%"}}
                onChange={(e) => getInputValue(e)} >
        </input>
        <button onClick={fetchStoriesByAuthor(props.searchedWord)} >
          Search
        </button>
      </form>
        {console.log(props.storiesByTitle)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    storiesByTitle: state.storiesByTitle,
    storiesByAuthor: state.storiesByAuthor,
    searchedWord: state.searchedWord
  }
}

export default connect(mapStateToProps, {
  fetchSearchedWord: fetchSearchedWord,
  fetchStoriesByTitle: fetchStoriesByTitle,
  fetchStoriesByAuthor: fetchStoriesByAuthor
})(Stories)
