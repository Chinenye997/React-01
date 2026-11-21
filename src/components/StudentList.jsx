import SudentCard from "./StudentCard";

function StudentList(){
  return(
    <div className="gap-8 m-8 w-full">
      <SudentCard
      studentsName="Chinenyenwa"
      studentsEmail="Chi@gmail.com"
      courseEnrolled="React.code"
      isActive ="Active"
      />
    </div>
  )
}

export default StudentList;