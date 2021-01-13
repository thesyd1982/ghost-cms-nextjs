

const Button = ({text,type="button",value='',classname}) => {
    return (
            <button type={type} value={value} className={classname} >{text}</button>
    )
}

export default Button
