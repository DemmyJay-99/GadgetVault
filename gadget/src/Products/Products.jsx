import styles from './Products.module.css';
import Card from './Card/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced, faUsers, faFileAlt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Services(){
    const scroll = document.querySelectorAll('#scroll')

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
            });
        }, {threshold: 0.1 }
        );

        scroll.forEach(scroll => {
            observer.observe(scroll);
        });
    return(
        <>
            <section id="services" className={styles.services}>
                <div className={styles.head}>
                    <h1 className={styles.headTitle}>Featured Products</h1>
                    <p className={styles.headSubtitle}>
                        Handpicked selection of our best-selling gadgets
                    </p>
                </div>
                <div className={styles.wrapper}>
                    <Card/>
                </div>
            </section>
        </>
    )
}

export default Services