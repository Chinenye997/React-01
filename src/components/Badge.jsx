function Badge({priority, children}) {
  let styles;
  switch(priority) {
    case "high":
      styles = "bg-red-400 text-white";
      break;
    case "medium":
      styles = "bg-purple-200";
      break;
    case "low":
      styles = "bg-gray-100";
      break;  
  }
  return(
     <span className={`${styles} py-8.6 px-2 rounded-xl text-xs`}>
          {children}
        </span>
  )
}

export default Badge;