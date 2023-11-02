const AlphButtons = ({onClick, letter}) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return (  
    <div className='h-9 m-auto flex align-center justify-center'>
      {alphabet.map((alph) => {
        return (
          <button key={alph} value={alph} onClick={onClick}
            className={ letter === alph ? 'px-2 mx-2 text-orange-500 text-2xl' : 'px-2 mx-2'}
          >
            {alph.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default AlphButtons;