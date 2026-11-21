// function ProductItem(Props){
//   return(
//     <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-yellow-100">
//       <h2 className="font-bold">{Props.productName}</h2>

import { ShoppingCartPlus } from "lucide-react";

//       <div className="flex justify-between">
//         <span>{Props.price}</span>
//         <button></button>
//       </div>
//     </div>
//   )
// }


function ProductItem({productName, price}){
  return(
    <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-yellow-100">
      <h2 className="font-bold">{productName}</h2>

      <div className="flex justify-between">
        <span>{price}</span>
        <button><ShoppingCartPlus size={16}/></button>
      </div>
    </div>
  )
}

export default ProductItem;