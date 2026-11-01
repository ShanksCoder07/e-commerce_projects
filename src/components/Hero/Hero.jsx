import styles from './hero.module.css'
import Nav from '../Navbar/Nav'

const Hero = () => {
  return (
    <div className={styles.hero}>

      <Nav />

      <div className={styles.written}>


        <h1>Make Your Interior More Minimalistic & Modern</h1>

        <p>Turn your room with panto into a lot more minimalist  and modern with ease and speed</p>
        <input type="text" placeholder='Search Furniture' />

      </div>
    </div>
  )
}

export default Hero