import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`);
    return result;
}

async function addProductToCart(token, productId) {
    settings.body.method = 'POST';
    settings.body.headers['Authorization'] = `Bearer ${token}`;
    let result = await fetch(`${settings.baseUrl}/cart/${productId}`, settings.body);
    return result;
}

export default {
    getProducts,
    addProductToCart
}