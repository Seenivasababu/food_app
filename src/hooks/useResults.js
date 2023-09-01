import React, { useEffect, useState } from 'react'
import yelp from '../api/yalp'

export default () => {
  const [results,setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=> {
    searchApi('Pasta')
  },[])

  const searchApi = async (searchTerm) => {
    try {
        const response = await yelp.get('/search',{
            params : {
                limit : 50,
                term : searchTerm,
                location: 'san jose'
            }
         })
         setResults(response.data.businesses)
    } catch (error) {
        setErrorMessage('Something went wrong')
    }
  }

  return [results,errorMessage,searchApi]
}