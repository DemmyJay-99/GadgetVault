import { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <div className={styles.cardTop}></div>
                        <div className={styles.cardBottom}>
                            <span className={styles.category}>{product.category}</span>
                            <span className={styles.name}>{product.name}</span>
                            <span className={styles.description}>{product.description}</span>
                            <div className={styles.cardDetails}>
                                <span className={styles.price}>${product.price}</span>
                                <span>🛒</span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Card