import styles from './button.module.css';


const Button = ({ name, link }) => {
    const handleClick = () => {
        window.location.href = link;
    }
    
    return (
    <div className={styles.ctaButton} onClick={handleClick}>
      {name}
    </div>
  )
}

export default Button;