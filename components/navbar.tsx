import ActiveLink from './activeLink';
import styles from '../styles/components/navbar.module.scss'



const Navbar = ({menu}) => {





const {navigation , setNavigation} = menu
    return (    
        <nav className={styles.navbar}>
           {
        navigation.map(({label,url},index)=>(
         <li className={styles.menuitem} key={index}>
           <ActiveLink href={`${url}`} activeClassName={styles.active} ><a className={styles.link}>{label}</a></ActiveLink> 
         </li>) )
       }
        </nav>
    )
}

export default Navbar
