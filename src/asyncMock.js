

const products = [

    {
        id: '1',
        name: 'Pastel de Cumpleaños',
        price:'4500',
        category: 'tortas',
        img: 'https://asset1.zankyou.com/images/mag-post/db1/4572/685//-/co/wp-content/uploads/2017/03/Credits_-Rachel-Lynn-Photography.jpg',
        stock: 5,
        description:'pastel de cumpleaños relleno a elección'
    
    },

    {
        id: '2',
        name: 'Tarta de Coco',
        price:'1500',
        category: 'tartas',
        img: 'https://shop.encasacookingspace.com/cdn/shop/products/Cocounut_DulcedeLecheTart-1_720x.jpg?v=1633337502',
        stock: 15,
        description: 'tartas a eleccion en tamaño y sabor'
    },

    {
        id: '3',
        name: 'Cupcackes',
        price:'2700',
        category: 'cupcackes',
        img: 'https://i0.wp.com/bethcakes.com/wp-content/uploads/2013/12/champagnecupcakes17.png?w=570&ssl=1',
        stock: 60,
        description:'cupcackes variedad de sabores'
    }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
};

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(product => product.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};