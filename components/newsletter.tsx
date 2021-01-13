import styles from '../styles/components/newsletter.module.scss'

const NewsLetter = () => {
    return (
        <form className={styles.newsletter}>
        <h3 className={styles.title}>NewsLetter</h3>
        <div className={styles.subtitle}>S'inscrire à notre mailing list.</div>
        <div className={styles.inputs}>
            {/* <input className={styles.name} type="text" placeholder="Votre Nom"/> */}
            <input className={styles.email} type="email" placeholder="Votre Email"/>
             <button type="submit" value="Subscribe" className={styles.button} >S'inscrire</button>
        </div>
        </form>
    
    )
}

export default NewsLetter
