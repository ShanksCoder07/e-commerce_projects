import styles from './Nav.module.css'
import { RiRemixLine, RiShoppingBagLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>

      <RiRemixLine />
      <div className={styles.tab}>
        <h4>Furniture</h4>
        <h4>Shop</h4>
        <h4>Contact</h4>
        <h4>About us</h4>
      </div>
      <span onClick={() => navigate('/cart')}><RiShoppingBagLine width={100} /></span>
      <div className={styles.mobilemenu}>
        <ul>

        <li className={styles.menu_close}>X</li>
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