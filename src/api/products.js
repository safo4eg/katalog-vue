import settings from '@/api/settings';

async function getProducts() {
    let result = await fetch(`${settings.baseUrl}/products`);
    return result;
}

export default {
    getProducts
}