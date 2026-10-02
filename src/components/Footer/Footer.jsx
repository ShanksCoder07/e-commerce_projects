
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerlabel}>
            <h1>Panto</h1>
            <p>Lorem ipsum dolor sit, amet consecte <br /> adipisicing elit. Rerum dolores dolorum <br /> vel nihil ad!</p>
        </div>

        <ul className={style.footerlist}>
            <li >Services</li>
            <li>Email Marketing</li>
            <li>Campaign</li>
            <li>Branding</li>
        </ul>

        <ul className={style.footerlist}>
            <li >Furniture</li>
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
        </ul>

        <ul className={style.footerlist}>
            <li >Follow us</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>

       
    </div>
  )
}

export default Footer