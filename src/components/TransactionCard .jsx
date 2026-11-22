import { formatDate } from "../utils/dateFormatter";

function TransactionCard ({description, amount, type, date, category}){
  return(
    <div className="">
      <h2>{description}</h2>

      <div className="flex justify-between">
        <span>{amount}</span>
        <span>{type}</span>
        <span>{formatDate(date)}</span>
        <span>{category}</span>

      </div>
    </div>
  )
}

export default TransactionCard;