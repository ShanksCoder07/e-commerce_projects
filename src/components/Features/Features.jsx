import styles from './feature.module.css'

const Section2 = () => {

  const product = [
    {name : "Luxury Facilities" ,
    content : "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities"},
    
    {name : "Affordable Price" ,
    content : "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."},

    {name : "Many Choices" ,
    content : "We provide many unique work space choices so that you can choose the workspace to your liking."}
  ]
  return (
    <div className={styles.sec2}>
       
        <h1>
            Why <br />Choosing us
        </h1>
    

    {product.map((items,idx)=>(

    <div key={idx} className={styles.featureLabel}>
        <h3>{items.name}</h3>
        <p>{items.content}</p>
        <a href="#">More info </a>
    </div>

    ))}
    </div>
  )
}

export default Section2;