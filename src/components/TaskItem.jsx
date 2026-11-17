import { formatDate } from "../utils/dateFormatter";

function TaskItem({title, completed, duDate, priority}){
  return(
    <div className={`${completed ? "bg-green-500" : "bg-white"} py-10 px-6 border border`}> 
      <h3>{title}</h3>
      <div className="">
        <span>{formatDate(duDate)}
        </span>

        <span>
          {priority}
        </span>
      </div>
    </div>
  )
}

export default TaskItem;


