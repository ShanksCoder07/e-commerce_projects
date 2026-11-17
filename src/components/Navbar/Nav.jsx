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
      <span onClick={() => navigate('/cart')}><RiShoppingBagLine /></span>

      <RiMenu2Line onClick={() => {
        setmenu(true)
      }} className={styles.hamburger} />

      {menu && (// Only visible when usestate menu is true

        <div className={styles.mobilemenu}>
          <ul>

            <li onClick={() => { setmenu(false) }} >X</li>
            <li>Furniture</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav