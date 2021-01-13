import styles from '../styles/components/footer.module.scss'
import ActiveLink from './activeLink'
import Widget from '../components/widget'

const ContactWidget =({title,tel,email,address, classname}) => {



    return (
        <Widget title={title} classname={classname}>
            <ActiveLink href={`/${'contact'}`} key ={'email'}><a>{email}</a></ActiveLink>
            <ActiveLink href={`/${'contact'}`} key ={'tel'}><a>{tel}</a></ActiveLink>
            <ActiveLink href={`/${'contact'}`} key ={'adress'}><a>{address}</a></ActiveLink>
        </Widget>
    )
}
export default ContactWidget
