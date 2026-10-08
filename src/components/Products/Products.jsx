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
  },{
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
    <div className={styles.productsection}>
        <h1>Best Selling Product</h1>
        <div className={styles.productcategory}>
            
              <button onClick={()=> setcategory("All") } className={category === "All" ? styles.btn_pressed : styles.btn_default}>All</button>
              <button onClick={()=> setcategory("Chair")} className={category === "Chair" ? styles.btn_pressed : styles.btn_default}>Chair</button>
              <button onClick={()=> setcategory("Bed")} className={category === "Bed" ? styles.btn_pressed : styles.btn_default}>Bed</button>
              <button onClick={()=> setcategory("Lamp")} className={category === "Lamp" ? styles.btn_pressed : styles.btn_default}>Lamp</button>
              <button onClick={()=> setcategory("Tables")} className={category === "Tables" ? styles.btn_pressed : styles.btn_default}>Table</button>
          
        </div>

        <div className={styles.productcontainer}>
          
        <div className={styles.productcardgrid}>
        {filterproduct.map((item,idx)=>(

          <div key = {idx}  className={styles.productcard}>
          <img src="https://imgs.search.brave.com/6NJTvc0JsEezEpFILoszkmaWJd-qxaeKdpL5yBwLM-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vZ3JleS1jb21m/b3J0YWJsZS1hcm1j/aGFpci1pc29sYXRl/ZC13aGl0ZS1iYWNr/Z3JvdW5kXzkyNjE5/OS0xOTU4OTE2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA" alt="" />
          <div className={styles.cardcontent}>
          <h5>{item.type}</h5>
          <h3>{item.name}</h3>
          <h3>${item.price} <span>+</span></h3>
          </div>
          </div>
        

         ))}
         </div>
         
         </div>
         <h4>View All ---&gt;</h4>
    </div>
  )
}

export default Section3