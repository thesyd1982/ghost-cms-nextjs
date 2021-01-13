import styles from '../styles/components/footer.module.scss'
import ActiveLink from './activeLink'
import Widget from '../components/widget'
import ContactWidget from './contact.widget';
import NewsLetter from './newsletter'

const Footer = ({footer}) => {
  // const {col1,col2,col3} =footer
  let col1 =footer;

  let col2 =
  [{title:'Marriage', slug:''},
  {title:'Funérailles', slug:''},
  {title:'Shahada', slug:''},
  {title:'Communauté', slug:''},
  {title:'Donation', slug:''}]

 

    let col4 =[{title:'Facebook', slug:''},
    {title:'Pinterest', slug:''},
    {title:'Instagram', slug:''},
    {title:'Twitter', slug:''} ]

const contact = {
    title:'contact', 
    email:'contact@masjidalkawthar.fr', 
    tel:'04 76 23 09 31', 
    address: `15 Rue des Trembles, 
                38100 Grenoble`

}



return (
<footer className={styles.footer}>

    <div className={styles.top}>
    <NewsLetter/>
    </div>
    <div className={styles.cols}>
    
        <Widget title={'Menu'} classname={styles.col}>
       {col1.map(({title,slug},index) => <ActiveLink href={`/${slug}`} key ={index}><a>{title}</a></ActiveLink>)}
        </Widget>
        <Widget title={'Services'} classname={styles.col}>
       {col2.map(({title,slug},index) => <ActiveLink href={`/${slug}`} key ={index}><a>{title}</a></ActiveLink>)}
        </Widget>
        <ContactWidget title={contact.title}  classname={styles.col} tel={contact.tel} email={contact.email} address ={contact.address}/>
        <Widget title={'Social'} classname={styles.col}>
       {col4.map(({title,slug},index) => <ActiveLink href={`/${slug}`} key ={index}><a>{title}</a></ActiveLink>)}
        </Widget>
        
    </div>

    <div className={styles.bottom}>
       <div className={styles.copy}> Copyright © {new Date().getFullYear()} by systdev.com All rights reserved.</div>
    </div>
</footer>
    )
}

export default Footer
