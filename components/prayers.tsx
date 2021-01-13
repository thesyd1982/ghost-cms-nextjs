import prayTimes from '../utils/PrayTimes'
import Link from 'next/link'
import styles from '../styles/components/prayers.module.scss'
import moment from 'moment'

const Prayers = () => {
 
    let  m = moment().locale('fr').format("ddd D MMM ").toString().replace('.','').replace('.','');
    
    return (
        <div className={styles['pray-times']}>
         <h3 className={styles['pray-times-title']}>horaire de prières </h3>
         <Link href='/'><a  className={styles['prayer-times-link']}>{'les horaires de la prière à grenoble'}</a></Link> 
         <div className={styles['pray-times-day']}>{m}</div>
         <div className={styles['prayer']}>
         <div className={styles['prayer-name']}>{'Fajr'}</div> 
         <div className={styles['prayer-time']}>{prayTimes.fajr}</div>
         </div>

         <div className={styles['prayer']}>
         <div className={styles['prayer-name']}>{'Dhohr'}</div>
         <div className={styles['prayer-time']}>{prayTimes.dhuhr}</div>
         </div>
         
         <div className={styles['prayer']}>
         <div className={styles['prayer-name']}>{'Asr'}</div>  
         <div className={styles['prayer-time']}>{prayTimes.asr}</div>
         </div>
         
         <div className={styles['prayer']}>
         <div className={styles['prayer-name']}>{'Maghreb'}</div>
         <div className={styles['prayer-time']}>{prayTimes.maghrib}</div>
         </div>

         <div className={styles['prayer']}>
         <div className={styles['prayer-name']}>{'Isha'}</div>
         <div className={styles['prayer-time']}>{prayTimes.isha}</div>
         </div>
         
         </div>
    )
}

export default Prayers

