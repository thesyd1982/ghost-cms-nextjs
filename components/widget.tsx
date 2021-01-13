import styles from '../styles/components/widget.module.scss'
const Widget = ({ title,classname, children }) => {
  console.log('classname', classname)
  return (
    <div className={classname}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  )
}

export default Widget
