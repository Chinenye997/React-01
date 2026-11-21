// Where we trying to understand what children is by using container as an eg

function Container({children}){
  return(
    <div className="w-9/10 max-w-5xl mx-auto">
      {children}
    </div>
  )
}

export default Container;