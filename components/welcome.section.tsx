
import styles from '../styles/sections/section.module.scss'
import btn from '../styles/components/button.module.scss'

import Button from './button'
const WelcomeSection = () => {
    return ( <section className={styles["section"]}>
        <article className={styles["welcome-section"]}>
            <h3 className={styles.title}>Bienvenue dans la maison d' Allah</h3>
            <p>Le Shaha n'est pas seulement une mosquée pour la prière, c'est plutôt un centre communautaire pour tous. Le Centre s'engage
à la préservation d'une identité islamique, à la construction et au soutien d'une communauté musulmane viable, à la promotion d'une
mode de vie islamique complet basé sur le Saint Coran et le
Sunnah du Prophète Muhammad.</p>

          <Button classname={btn.revo} text='En savoir +'/>  
        </article>
        </section>
    )
}

export default WelcomeSection
