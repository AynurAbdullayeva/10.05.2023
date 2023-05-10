import { useEffect, useState } from 'react'
import Listitem from './Components/Listitem'


function App() {
  
const [products,setProducts]=useState([])
// const [inputSearch, setSearch]=useState([])
  
 useEffect(()=>{
  fetch("https://northwind.vercel.app/api/products")
  .then(res=>res.json())
  .then(data=>{
    setProducts(data)

  })
 },[])

//  const load=()=>{
//   setIsloading(true)
//   fetch("https://northwind.vercel.app/api/products")
//   .then(res=>res.json())
//   .then(data=>{
//     setProducts(data)
//     setIsloading(false)
//   })
//  }
//  const searchingData=()=>{
//   setSearch(inputSearch)
//   console.log(inputSearch)
//  }

  return (
    <>
     <Listitem products={products}/>
    </>
  )
}

export default App
