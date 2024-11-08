import React, { useEffect, useState } from 'react'
//useLoaderData->This is a React component that displays GitHub user information.
import { useLoaderData } from 'react-router-dom'

// Github component that uses useLoaderData to fetch and display Github user data
function Github() {
    const data = useLoaderData()//Basic useEffect hook to fetch data when the component mounts
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/XCL1BR')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
// Define a custom loader for fetching Github user data
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/XCL1BR')
    return response.json()
}