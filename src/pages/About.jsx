import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React App to search Github profiles and see profile details. This project is a part of the
        <a href='https://www.udemy.com/course/react-front-to-back-2022/'>
        {' '}
        React Front To Back
        </a>{' '}
        Udemy Course by  
        <strong>
          <a href='https://www.traversymedia.com/'> Brad Traversy</a>
        </strong>
        . 
      </p>
      <p className='text-lg text-gray-400'>
      This would be the 5th project to my <a href = 'https://github.com/PareshHK'>Portfolio</a> in the process of learning React. 
      </p>
    </div>
  )
}

export default About
