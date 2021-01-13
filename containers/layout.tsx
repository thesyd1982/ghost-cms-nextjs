import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.scss'

const Layout = ({menu, header,footer,children}) => {
    return (<div className={styles.page}>
     <Header header={header}/>
     <Navbar menu={menu}/>
     <main className={styles.main}>
     {children}
     </main>
     <Footer footer={footer}/>
     </div>
    )
} 

export default Layout
