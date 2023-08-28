import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/Firebase";
import { Link } from "react-router-dom"

    const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalQuantity, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
        const objOrder = {
            buyer: {
            name,
            phone,
            email
            },
            items: cart,
            total: totalQuantity,
            date: Timestamp.fromDate(new Date())
        };

        const batch = writeBatch(db);

        const outOfStock = [];

        const ids = cart.map(prod => prod.id);

        const productsRef = collection(db, "products");

        const productsAddedFromFirestore = await getDocs(query(productsRef, where("id", "in", ids)));

        const { docs } = productsAddedFromFirestore;
        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productsAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productsAddedToCart?.quantity;

            if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
            } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
            }
        });

        if (outOfStock.length === 0) {
            await batch.commit();

            const orderRef = collection(db, "orders"); // Usar "orders" en lugar de "products"
            const orderAdded = await addDoc(orderRef, objOrder);
            setOrderId(orderAdded.id);
            clearCart();
        } else {
            console.error("Hay productos que están fuera del stock");
        }
        } catch (error) {
        console.log(error);
        } finally {
        setLoading(false);
        }
    };

    if (loading) {
        return <h1 className="CheckoutTitle">Estamos generando su orden...</h1>;
    }

    if (orderId) {
        return(
            <div>
                <h2 className="CheckoutTitle">El id de su orden es: {orderId}</h2>
                <Link to='/productos'>
                    <button className="btnCat"> volver </button>
                </Link>
            </div>
        ) 
    }

    return (
        <div>
        <h3 className="CheckoutTitle">Formulario de Compra</h3>
        <CheckoutForm onConfirm={createOrder} />
        </div>
    );
    };

export default Checkout;
