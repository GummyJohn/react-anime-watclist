import { useState, useEffect } from "react";

export function fetchData(url){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')


  useEffect(() => {
    async function getData(){
      try{
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setData(data);
      }catch(err){
        setError(true)
        setErrorMsg(err.message)
      }
    }

    getData()
  }, [url])

  return {data, loading, error, errorMsg}
}

export default fetchData;