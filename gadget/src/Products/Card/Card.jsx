import { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faShoppingCart, faLaptop, faCamera, faHeadphones } from '@fortawesome/free-solid-svg-icons';

function Card(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function fetchProducts(){
            try{
            const response = await fetch('http://127.0.0.1:3000/api/products');
            const data = await response.json();
            setProducts(data.product)
            console.log(data.product)
            } catch(error){
                console.error(error)
            } finally{
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])
    if(loading) {
        return(<div>Loadinggggggg</div>)
    }
    return(
        <>
                    {products.map(product => (
                    <div key={product.id} className={styles.card}>
                        {(()=>{switch (product.category) {
                            case "Smartphone":
                                return <div className={styles.cardTop}>
                                        <FontAwesomeIcon icon={faMobile} />
                                        </div>
                                break;
                            case "Computing":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faLaptop} />
                                    </div>
                                break;
                            case "Wearable":
                                return <div className={styles.cardTop}/>
                                break;
                            case "Tablet":
                                return <div className={styles.cardTop}/>
                                break;
                            case "Photography":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faCamera}/>
                                    </div>
                                break;
                            case "Audio":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </div>
                                break;
                        
                            default:
                                break;
                            }
                        })()}
                        <div className={styles.cardBottom}>
                            <span className={styles.category}>{product.category}</span>
                            <span className={styles.name}>{product.name}</span>
                            <span className={styles.description}>{product.description}</span>
                            <div className={styles.cardDetails}>
                                <span className={styles.price}>${product.price}</span>
                                <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Card