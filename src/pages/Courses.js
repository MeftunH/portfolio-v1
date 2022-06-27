import React from 'react'
import Header from '../components/Header'

function Courses() {
  return (
    <div>
      <Header/>
      <div className='courses-intro' style={{backgroundImage:`url('./assets/courses-bg.svg')`}}>
      <div className='courses-intro-content'>
        <h1>My Courses And Learnings</h1>
        <div>
        <p>Seeing is the best way to continue to improve yourself.</p>
        </div>
        <button className='primary-button'>Get Started</button>
      </div>
      </div>
      <div className='motivation-parent'>
        <div className='motivation  n-box flex-with-center'>
        <h1>My Learning Motivation</h1>
        <div className="motivation-content">
          <p>
            Simple..
            <br></br>
            <p>I know how to kiss..</p>
            <br></br>
            <p>No No No.... No that kiss</p>
            <br></br>
            <h3>I know how to</h3>
            <br></br>
            <h3>I know how to</h3>
            <br></br>
            <h2>Keep It Straight,Simple</h2>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Courses