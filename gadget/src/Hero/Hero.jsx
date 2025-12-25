import styles from './Hero.module.css';
import herobg from '../assets/herobg2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Hero(){
    return(
        <>
            <section id="home" className={styles.hero}>
               <div className={styles.heroLeft}>
                <div className={styles.leftTop}>
                    <h1>Premium Tech</h1>
                    <h1>Made Simple</h1>
                    <p>Get cutting-edge performance at the guaranteed best prices.
                    Explore our exclusive deals and limited-time offers today.</p>
                </div>
                <div className={styles.leftBottom}>
                    <button className={styles.button1}>
                        Get started 
                        <div></div>
                        <span>20% OFF!</span>
                    </button>
                    <button className={styles.button2}>Contact us</button>
                </div>
               </div>
               <div className={styles.heroRight}>
                <div className={styles.rightTop}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search}/>
                    <input type="text" placeholder='Search products'/>
                    <button>Search</button>
                </div>
               </div>
            </section>
        </>
    )
}

export default Hero