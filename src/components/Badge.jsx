function Badge({priority}) {
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
    <span className={`${styles} px-2 rounded-xl tex-xs $`}>

    </span>
  )
}