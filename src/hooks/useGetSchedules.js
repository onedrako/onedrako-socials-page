import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = (API) => {
  const [data, setData] = useState([])
  useEffect(async () => {
    const response = await axios(API)
    setData(response.data)
  }, [])
  return data
}

export { useGetData }
