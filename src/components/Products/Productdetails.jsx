import { useNavigate, useParams } from 'react-router-dom'
import styles from './productdetail.module.css'
import product from '../../data/product';

const Productdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = product.find((item) => item.id === Number(id));


  if (!products) {
    return <h2>page not found</h2>
  }

  return (
    
    <div className={styles.carddetail}>
      <h3 onClick={() => navigate("/")}>back to product</h3>
      <h1>THis is detail</h1>
    </div>
  )
}

export default Productdetails