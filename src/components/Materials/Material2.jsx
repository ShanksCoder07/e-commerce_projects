import styles from './page2.module.css'

const Section5 = () => {
    return (
        <div className={styles.section5}>
            <div className={styles.right}>

                <h3>MATERIALS</h3>
                <h1>
                    Very Serious <br />  Materials For Making <br /> Furniture
                </h1>
                <p>
                    Because panto was very serious about designing furniture for our <br /> environment, using a very expensive and famous capital but at a <br /> relatively low price
                </p>

                <h4>More Info</h4>
            </div>
            <div className={styles.left}>
                <div className={styles.ls1}>

                <img src="src/assets/img.png" alt="" width={223} height={250}/>
                <img src="src/assets/img.png" alt="" width={223} height={338}/>

                </div>
                <div className={styles.ls2}>
                <img src="src/assets/img.png" alt="" width={629} height={445}/>
                </div>
            </div>
        </div>
    )
}

export default Section5