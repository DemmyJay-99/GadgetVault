import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {

    function showLinks(){
        const links = document.getElementById('mobileLinks');
        const hamburger = document.getElementById('hamburger');
        hamburger.classList.toggle(styles.active);
        links.classList.toggle(styles.show);
    }
    window.addEventListener('scroll', () => {
        const navBar = document.getElementById('navbar');
            if (window.scrollY > 500) {
                navBar.classList.add(styles.scrolled);
            } else {
                navBar.classList.remove(styles.scrolled);
            }
});

    return(
        <>
        <header>
            <nav id='navbar'>
                <div className={styles['navLeft']}>
                    <FontAwesomeIcon icon={faBolt} />
                    <p className={styles.logoText}>GadgetVault</p>
                </div>
                <div className={styles.navLinks}>
                    <a href='#home'>Home</a>
                    <a href='#products'>Products</a>
                    <a href='#categories'>Categories</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div className={styles.navRight}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.mobileMenu}>
                    <div className={styles.hamburger} onClick={showLinks} id='hamburger'>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>
            </nav>
            <div className={styles.mobileLinks} id='mobileLinks'>
                <a href='#home'>Home</a>
                <a href='#products'>Products</a>
                <a href='#categories'>Categories</a>
                <a href='#contact'>Contact</a>
            </div>
        </header>
        </>
    )
}

export default Header