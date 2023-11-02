export const controls = {
  show: false,
  showPopular: false,
  showAlph: false,
  showSearch: false,
  showList: false,
}


export const reducer = (state, action) => {
  switch (action.type){
    case 'show-menu' : {
      return {...state, show: true, showList: false}
    }
    case 'close-menu' : {
      return {show: false, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case 'show-popular': {
      return { show: true, showPopular: true, showAlph: false, showSearch: false, showList: false}
    }
    case 'close-popular': {
      return { show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case 'show-alph' : {
      return {show: true, showPopular: false, showAlph: true, showSearch: false, showList: false}
    }
    case 'close-alph' : {
      return {show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case 'show-search' : {
      return {show: true, showPopular: false, showAlph: false, showSearch: true, showList: false}
    }
    case 'close-search' : {
      return {show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case 'show-list' : {
      return {show: false, showPopular: false, showAlph: false, showSearch: false, showList: true}
    }
    case 'close-list' : {
      return {show: false, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    default:{
      return state;
    }
  }
}
