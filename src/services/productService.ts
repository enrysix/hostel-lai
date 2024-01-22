export const productService = {
    getProductsData() {
        return [
            {
                id: '1',
                icon: 'pi pi-money-bill',
                name: '15% de descuento en la web'
            },
            {
                id: '2',
                icon: 'pi pi-tags',
                name: 'Acceso a ofertas exclusivas'
            },
            {
                id: '3',
                icon: 'pi pi-euro',
                name: 'Mejor precio garantizado'
            }
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};