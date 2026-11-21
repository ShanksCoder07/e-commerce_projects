import styles from './Nav.module.css'
import { RiRemixLine, RiShoppingBagLine, RiMenu2Line } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {

  const navigate = useNavigate();
  const [menu, setmenu] = useState(false)
  return (
    <nav className={styles.navbar}>

      <RiRemixLine />
      <div className={styles.tab}>
        <h4>Furniture</h4>
        <h4>Shop</h4>
        <h4>Contact</h4>
        <h4 >About us</h4>
      </div>
      <span onClick={() => navigate('/cart')} className={styles.cart_icon}><RiShoppingBagLine /></span>

      <RiMenu2Line onClick={() => {
        setmenu(true)
      }} className={styles.hamburger} />



      <div className={`${styles.mobilemenu} ${menu ? styles.active : ""}`}> {/*this here i am declaring and using two classes mobilemenu and active but active class only activates when the usestate menu is true ,
        and it is true when the hamburger icon is clicked*/}
        <ul>

          <li onClick={() => { setmenu(false) }} >X</li>
          <li>Furniture</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav