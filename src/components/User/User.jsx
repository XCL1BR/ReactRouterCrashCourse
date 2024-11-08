import React from 'react'
//useParams is a hook that allows you to access URL parameters (dynamic parts of the URL) in your React components.
import { useParams } from 'react-router-dom'

// User component that uses useParams to get the userid from the URL parameters
function User() {
    const {userid} = useParams() // Extract the userid from the URL parameters
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User