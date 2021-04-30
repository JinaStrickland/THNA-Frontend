import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { fetchSearchedWord, fetchStoriesByTitle, fetchStoriesByAuthor } from '../actions'

import './Stories.css'

const Stories = (props) => {

  console.log(props)

  const dispatch = useDispatch()
  
  const getInputValue = (word) => {
    dispatch(props.fetchSearchedWord(word))
  }

  const handleSubmit = () => {
    props.fetchStoriesByTitle(props.searchedWord)
  }
  
  return (
    <div className="Stories">
      <form className="Content" >
        <input type="text" placeholder="Search Stories By Title..." 
                onChange={(e) => getInputValue(e.target.value)}
                style={{ width: "30%"}}>
        </input>
        <button onClick={handleSubmit} >
          Search
        </button>
      </form>
      <form className="Content" >
        <input type="text" placeholder="Search Stories By Author..." style={{ width: "30%"}}
                onChange={(e) => getInputValue(e.target.value)} >
        </input>
        <button onClick={fetchStoriesByAuthor} >
          Search
        </button>
      </form>
        {console.log(`Inside component: ${props.storiesByTitle}`)}
      
        
      {/* { storiesByTitle && storiesByTitle["hits"].map(hit => {
        return (
          <div >
            <article >
              <div>
                <h6> 
                  { hit.title }
                  ( <a href={`${hit.url}`}> 
                    <span> {hit.url} </span>
                  </a> ) - By: {hit.author}
                </h6>
              </div>
            </article>
          </div>
          )
        })
      } */}
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
