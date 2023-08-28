// firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);


async function getProducts() {

    const productsRef = collection (db, "products");
    const documentsSnapshot = await getDocs (productsRef);
    // console.log(documentsSnapshot.docs[0].data())
    const documents = documentsSnapshot.docs
    const docsData = documents.map(
        (item) => {
        return {...item.data(), id: item.id }
        })
    console.log(docsData)
    return docsData;
}


async function getProductsById (id) {
    const docRef = doc ( db, "products", id);
    const docSnapshot = await getDoc (docRef);

    if (docSnapshot.exists()) {
        return {...docSnapshot.data(), id: docSnapshot.id}
        } else{
        throw new Error("No encontramos el producto.")
    }
}


async function getProductsByCategory (category){
    const productsRef = collection (db, "products");
    const q = query ( productsRef, where ( "category", "==", category));
    const documentsSnapshot = await getDocs (q);
    const documents = documentsSnapshot.docs
    const docsData = documents.map(
        (item) => {
        return {...item.data(), id: item.id }
        })
    console.log(docsData)
    return docsData;

}


export { db, getProducts, getProductsById, getProductsByCategory};
