import styles from './hero.module.css'
import Nav from '../Navbar/Nav'


const Hero = () => {
  return (
    <div className={styles.section1}>
        
        <Nav />
     
        <div className={styles.written}>
       

        <h1>Make Your Interior More Minimalistic & Modern</h1>
          
        <span>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</span>
        <input type="text" placeholder='Search Furniture'/>

        </div>
    </div>
  )
}

export default Hero