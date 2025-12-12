import styles from './Hero.module.css';
import herobg from '../assets/herobg2.webp';

function Hero(){
    return(
        <>
            <section id="home" className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>Premium Tech <br/>Made Simple</h1>
                    <span>Discover cutting-edge gadgets that enhance your lifestyle. Quality products, competitive prices, and exceptional service.
                    </span>
                    <div className={styles.buttons}>
                        <button className={styles.shop}>
                            <a href='#contact'>Shop Now</a>
                        </button>
                        <button className={styles.category}>
                            <a href='#services'>Browse Categories</a>
                        </button>
                    </div>
                </div>
                <div className={styles.heroRight}>
                    
                </div>
            </section>
        </>
    )
}

export default Hero