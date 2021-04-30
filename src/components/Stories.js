import React from 'react'
import { connect } from 'react-redux'

import { fetchSearchedWord, fetchStoriesByTitle, fetchStoriesByAuthor } from '../actions'
import './Stories.css'

const StoriesByTitle = (props) => {

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
    <div className="Stories">
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
        {/* Stories by Title */}
        { props.storiesByTitle && props.storiesByTitle.map(story => {
          return (
            <div key={ story.title } >
                  <h6> 
                  { story.id } 
                    { story.title }
                    ( <a href={`${story.url}`}> 
                      <span> {story.url} </span>
                    </a> ) - By: { story.author }
                  </h6>
            </div>
            )
          })
        }

        {/* Stories by Author */}
        { props.storiesByAuthor && props.storiesByAuthor.map(story => {
          return (
            <div key={ story.title } >
                  <h6> 
                    { story.title }
                    ( <a href={`${story.url}`}> 
                      <span> {story.url} </span>
                    </a> ) - By: { story.author }
                  </h6>
            </div>
            )
          })
        }
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
})(StoriesByTitle)
