import { User, Product } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
    // Ragex for case sensitive
    const regex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 3;

    try {
        connectToDB();

        const count = await User.find({ username: { $regex: regex } }).count();

        // limit, regresa el un numero limitado de resultados segun nosotros le pasemos, en este caso solo pasaremos 2
        // skip y su funcion regresa el numero de usuarios segun el valor de el numero de pagina

        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch Users!!');
    }
};

export const fetchUser = async (id) => {
    try {
        connectToDB();

        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch User!!');
    }
};

export const fetchProducts = async (q, page) => {
    // Ragex for case sensitive
    const regex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();

        const count = await Product.find({ title: { $regex: regex } }).count();

        // limit, regresa el un numero limitado de resultados segun nosotros le pasemos, en este caso solo pasaremos 2
        // skip y su funcion regresa el numero de usuarios segun el valor de el numero de pagina

        const products = await Product.find({ title: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch Products!!');
    }
};

export const fetchProduct = async (id) => {
    try {
        connectToDB();

        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch product!!');
    }
};
