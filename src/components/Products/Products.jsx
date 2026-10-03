import styles from './product.module.css'
import {useState} from 'react'
const Section3 = () => {

  const product = [{
    type:"Chair",
    name:"Sakarias chair",
    rating:4,
    price:124
  },
{
    type:"Tables",
    name:"Sakarias chair",
    rating:4,
    price:124
  },
{
    type:"Chair",
    name:"Sakarias chair",
    rating:4,
    price:124
  },
{
    type:"Bed",
    name:"Sakarias chair",
    rating:4,
    price:124
  }, {
    type:"Lamp",
    name:"Sakarias chair",
    rating:4,
    price:124
  }]

  const [category,setcategory] = useState("All");

  const filterproduct = category === "All" ? 
                        product : product.filter((item) => item.type === category);
 
  return (
    <div className={styles.product}>
        <h2>Best Selling Product</h2>
        <div className={styles.productcategory}>
            
              <button onClick={()=> setcategory("All")}>All</button>
              <button onClick={()=> setcategory("Chair")}>Chair</button>
              <button onClick={()=> setcategory("Bed")}>Bed</button>
              <button onClick={()=> setcategory("Lamp")}>Lamp</button>
              <button onClick={()=> setcategory("Tables")}>Table</button>
          
        </div>

        <div className={styles.productcontainer}>
          
        <div className={styles.productcardgrid}>
        {filterproduct.map((item,idx)=>(

          <div key = {idx}  className={styles.productcard}>
          <img src="https://imgs.search.brave.com/PM3Mb1EuEoNU2dSbt_xo8ByhWexRy50EBSm7Qe7PmrU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MDI2ODI2L3Bob3Rv/L2NoYWlyLW9uLXN0/YWdlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sLUNvSGU3/TlFYZkhYb3dvbFlu/VDllWWE2UUZwcUtx/VXFxekE1RVdBY0FV/PQ" alt="" />
          <h5>{item.type}</h5>
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          </div>
        

         ))}
         </div>
         </div>
    </div>
  )
}

export default Section3