
import styles from '../styles/components/header.module.scss'
const Header = ({header}) => {
    const title = header.title;
    return (   
        <header className={styles.header}> 
        <img src='/images/top_img.webp' alt='mandala'/>
        <h1>{title}</h1>
        
        </header>
    )
}

export default Header
