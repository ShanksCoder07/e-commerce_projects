import styles from './cartdet.module.css'
import { useLocation } from 'react-router-dom'
import Nav from '../Navbar/Nav'
const Cartdetail = () => {
    const location = useLocation()
  return (
    <div className={styles.cartsection}>
      <Nav location = {location.pathname}/>
    </div>
  )
}

export default Cartdetail