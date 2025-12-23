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
            const response = await fetch('http://127.0.0.1:4000/api/products');
            const data = await response.json();
            setProducts(data.product)
            console.log(data.product)
            } catch(error){
                console.error(error)
                return (<div>Error: {error}</div>)
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
                            case "Computing":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faLaptop} />
                                    </div>
                            case "Wearable":
                                return <div className={styles.cardTop}/>
                            case "Tablet":
                                return <div className={styles.cardTop}/>
                            case "Photography":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faCamera}/>
                                    </div>
                            case "Audio":
                                return <div className={styles.cardTop}>
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </div>
                        
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