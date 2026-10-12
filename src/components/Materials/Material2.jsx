import { useState } from 'react'
import styles from './page2.module.css'

const Material2 = () => {

    const [specific, setspecific] = useState(false);
    return (
        <div className={styles.material2}>
            <div className={styles.materialcontent}>

                <h3>MATERIALS</h3>
                <h1>
                    Very Serious   Materials For Making  Furniture
                </h1>
                <p>
                    Because panto was very serious about designing furniture for our  environment, using a very expensive and famous capital but at a  relatively low price
                </p>

                <h4 onClick={() => {
                    
                }}>More Info ---&gt;</h4>
            </div>
            <div className={styles.materialimages}>


                <img className={styles.img1} src="src/assets/img.png" alt="" />
                <img className={styles.img2} src="src/assets/img.png" alt="" />
                <img className={styles.img3} src="src/assets/img.png" alt="" />

            </div>
        </div>
    )
}

export default Material2