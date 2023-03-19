import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`);
    return result;
}

async function getCart(token) {
    let result = await fetch(`${settings.baseUrl}/cart`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return result;
}

async function addProductToCart(token, productId) {
    settings.body.method = 'POST';
    settings.body.headers['Authorization'] = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart/${productId}`, settings.body);
    return result;
}

async function deleteProductFromCart(token, productIdArray) {
    let promises = [];
    for(let id of productIdArray) {
        let promise = new Promise((resolve, reject) => {
           fetch(`${settings.baseUrl}/cart/${id}`, {
               method: 'DELETE',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${token}`
               }
           }).then(response => {
              if(response.ok) resolve(response.text());
              else reject(response.text());
           });
        });
        promises.push(promise);
    }

    let result = await Promise.all(promises);
    return result;
}

async function toOrder(token) {
    settings.body.method = 'POST';
    settings.body.headers['Authorization'] = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/order`, settings.body);
    return result;
}

async function getOrders(token) {
    let result = await fetch(`${settings.baseUrl}/order`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return result;
}



export default {
    getProducts,
    addProductToCart,
    getCart,
    deleteProductFromCart,
    toOrder,
    getOrders
}