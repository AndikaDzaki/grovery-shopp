import { useState } from 'react'
import './Product.css'
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Product = () => {
    const [category, setCategory] = useState("All")

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Product
