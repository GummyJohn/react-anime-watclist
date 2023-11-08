import {useEffect, useReducer} from "react";

function apiReducer(state, action){
  switch (action.type){
    case 'loading' : {
      return {...state, loading: true}
    }
    case 'fetch-success' : {
      return {
        loading: false,
        data: action.payload,
        error: false,
        errorMsg: ''
      }
    }
    case 'fetch-failed' : {
      return {
        loading: false,
        data: [],
        error: true,
        errorMsg: action.payload
      }
    }
  }
}

function fetchData(url){
  const [state, dispatch] = useReducer(apiReducer, {
    loading: false,
    data: [],
    error: false,
    errorMsg: ''
  })


  useEffect(() => {
    async function getData(){
      try{
        dispatch({type: 'loading'})
        const response = await fetch(url);
        const data = await response.json();
        dispatch({type: 'fetch-success', payload: data})
      }catch(err){
        dispatch({type: 'fetch-failed', payload: err.message})
      }
    }

    getData();
  }, [url])

  return state;
}

export default fetchData;