import styles from './Nav.module.css'
import {RiRemixLine , RiShoppingBagLine } from "react-icons/ri"
const Nav = () => {
  return (
    <div className={styles.navbar}>
       
        <RiRemixLine />
        <div className= {styles.tab}>
            <h4>Furniture</h4>
            <h4>Shop</h4>
            <h4>Contact</h4>
            <h4>About us</h4>
        </div>
        <RiShoppingBagLine />
    </div>
  )
}

export default Nav