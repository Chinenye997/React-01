function SudentCard({studentsName, studentsEmail, courseEnrolled, isActive}){
  return(
    <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-yellow-200">

      <h3>{studentsName}</h3>
      <span>{studentsEmail}</span>
      <span>{courseEnrolled}</span>
      <button>{isActive}</button>
    </div>
  )
}

export default SudentCard;