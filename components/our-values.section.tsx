import styles from '../styles/sections/section.module.scss'
import Button from '../components/button'
import btn from '../styles/components/button.module.scss'
const OurValuesSection = () => {
    return (
        
        <div className={styles['our-values-section']}>
            <h2 className={styles['title']}>Nos Valeurs</h2>
            <section className={styles.cols}>
            
            <section className={styles.col}>
            <article className={styles['col-knowledge']}>
            <h3 className={styles["col-title"]}>connaissances</h3>
            <p className={styles["col-description"]}>A critshahal component of every Muslims journey is knowledge.</p>
            </article>
            </section>


            <section className={styles.col}>
            <article className={styles['col-spirituality']}>
            <h3 className={styles["col-title"]}>spiritualité</h3>
            <p className={styles["col-description"]}>Ihsan was the way of our Messenger</p>
            </article>
            </section>

            <section className={styles.col}>
            <article className={styles['col-community']}>
            <h3 className={styles["col-title"]}>communauté</h3>
            <p className={styles["col-description"]}>We pray together, we break our fast together, Islam is community</p>
            </article>
            </section>

            <section className={styles.col}>
            <article className={styles['col-service']}>
            <h3 className={styles["col-title"]}>service</h3>
            <p className={styles["col-description"]}>Being in service to others is the duty of every Muslim</p>
            </article>
            </section>
            </section>
            <Button classname={btn.revo} text='En savoir +'/>  
        </div>
        
    )
}

export default OurValuesSection
