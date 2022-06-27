import React from 'react'

function Courses() {
  return (
    <div>
      <div className='courses-intro' style={{backgroundImage:`url('./assets/courses-bg.svg')`}}>
      <div className='courses-intro-content'>
        <h1>My Courses And Learnings</h1>
        <div>
        <p>Seeing is the best way to continue to improve yourself.</p>
        </div>
        <button className='primary-button'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Courses