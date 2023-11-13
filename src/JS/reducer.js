export const actions = {
  showMenu: 'show-menu',
  closeMenu: 'close-menu',
  showPopular: 'show-popular',
  closePopular: 'close-popular',
  showAlph: 'show-alph',
  closeAlph: 'close-alph',
  showSearch: 'show-search',
  closeSearch: 'close-search',
  showList: 'show-list',
  closeList: 'close-list',
}


export const controls = {
  show: false,
  showPopular: false,
  showAlph: false,
  showSearch: false,
  showList: false,
}


export const reducer = (state, action) => {
  switch (action.type){
    case actions.showMenu : {
      return {...state, show: true , showList: false}
    }
    case actions.closeMenu : {
      return {...state, show: false, showList: false}
    }
    case actions.showPopular: {
      return { show: true, showPopular: true, showAlph: false, showSearch: false, showList: false}
    }
    case actions.closePopular: {
      return { show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case actions.showAlph : {
      return {show: true, showPopular: false, showAlph: true, showSearch: false, showList: false}
    }
    case actions.closeAlph : {
      return {show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case actions.showSearch : {
      return {show: true, showPopular: false, showAlph: false, showSearch: true, showList: false}
    }
    case actions.closeSearch : {
      return {show: true, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    case actions.showList : {
      return {show: false, showPopular: false, showAlph: false, showSearch: false, showList: true}
    }
    case actions.closeList : {
      return {show: false, showPopular: false, showAlph: false, showSearch: false, showList: false}
    }
    default:{
      return state;
    }
  }
}
