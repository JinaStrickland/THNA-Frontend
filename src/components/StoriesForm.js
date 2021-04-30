import React from 'react'
import { connect } from 'react-redux'

import { fetchSearchedWord, fetchStoriesByTitle, fetchStoriesByAuthor } from '../actions'
import Stories from './Stories'

const StoriesForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].name === "title") {
      props.fetchStoriesByTitle(props.searchedWord)
    } 
    else if (e.target[0].name === "author") {
      props.fetchStoriesByAuthor(props.searchedWord)
    }
    e.target.reset()
  }

  return (
    <div>
    <div>
      <form className="Content" onSubmit={ handleSubmit } >
        <input  type="text" placeholder="Search Stories By Title..." 
                name="title"
                onChange={ (e) => props.fetchSearchedWord(e.target.value) }
                style={{ width: "30%"}}>
        </input>
        <button > Search </button>
      </form>

      <form className="Content" onSubmit={ handleSubmit } >
        <input  type="text" placeholder="Search Stories By Author..." 
                name="author"
                onChange={ (e) => props.fetchSearchedWord(e.target.value) }
                style={{ width: "30%"}}>
        </input>
        <button > Search </button>
      </form>
    </div>
    <Stories />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("Inside maptStateToProp")
  console.log(state)
  return {
    storiesByTitle: state.storiesByTitle,
    storiesByAuthor: state.storiesByAuthor,
    searchedWord: state.searchedWord
  }
}

export default connect(mapStateToProps, {
  fetchStoriesByTitle: fetchStoriesByTitle,
  fetchStoriesByAuthor: fetchStoriesByAuthor,
  fetchSearchedWord: fetchSearchedWord
})(StoriesForm)
