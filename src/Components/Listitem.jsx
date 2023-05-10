import React, { useEffect } from "react";

export default function Listitem({ products }) {
    
    
{/* let [data,setProducts]=useState(data);

function handleSort() {
    let sortProducts=[...data.sort((a,b)=>a.price-b.price)]
    setProducts(sortProducts)
} */}    
 

    return (
        <>
{/* const [products,setProducts]=useState([])
useEffect(()=>{
    getAllProducts().then((data)=>{
        setProducts(data);
    })
  },[products]); */}

            <form>
                <input type="search" className="inputSearch"/>
                <button type="search" className="searchBtn">Search</button>
            </form>
<button type="submit">Sort</button>


            <div className="list-container">
                <ul className='list' >
                    {products && products.map((products) => (
                        <li key={products.id} > Product: {products.name} , Price: {products.unitPrice}     
                         <button 
                    //      onClick={()=>
                    //     deleteProductByID(product.id);
                    // let filteredProducts=products.filtered((item)=>item.id!==product.id);
                    // setProducts(filteredProducts)}
                    >Delete</button></li>

                    ))}
                </ul>
            </div>

            <input type="text" placeholder="add new product"/>
            <button type="submit">Add</button>

        </>
    )
}
