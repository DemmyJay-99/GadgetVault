import styles from './Hero.module.css';
import herobg from '../assets/herobg2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Hero(){
    return(
        <>
            <section id="home" className={styles.hero}>
               <div className={styles.heroLeft}>
                    <h1>Premium Tech</h1>
                    <h1>Made Simple</h1>
                    <p>Get cutting-edge performance at the guaranteed best prices. Explore our exclusive deals and limited-time offers today.</p>
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