import transactions from "../data/transactions";
import TransactionCard from "./TransactionCard ";

function TransactionList(){
  return(
    <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {
        transactions.map(transactions => {
          return(
            <TransactionCard
            key={transactions.id}
            description={transactions.description}
            amount={transactions.amount}
            type={transactions.type}
            date={transactions.date}
            category={transactions.category}
            />
          )
        })
      }

    </div>
  )
}

export default TransactionList;