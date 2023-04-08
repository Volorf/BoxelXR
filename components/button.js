import styles from './button.module.css';


const Button = ({ name, link }) => {
    const handleClick = () => {
        window.location.href = link;
    }
    
    return (
    <button className={styles.ctaButton} onClick={handleClick}>
      {name}
    </button>
  )
}

export default Button;