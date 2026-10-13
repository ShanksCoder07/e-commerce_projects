import {useNavigate,useParams} from 'react'
import styles from './productdetail.module.css'

const Productdetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
  return (
    <div className={styles.carddetail}>
        <h3 onClick={()=> navigate("/")}>back to product</h3>
        <h1>THis is detail</h1>
        
    </div>
  )
}

export default Productdetails