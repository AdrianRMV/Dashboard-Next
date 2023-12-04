import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';
const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" fill alt="" />
                </div>
                Deodorant
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Product Name" />
                    <label>Description</label>
                    <input
                        type="text"
                        name="desc"
                        placeholder="Product Description"
                    />
                    <label>Price</label>
                    <input type="text" name="price" placeholder="Price: $..." />
                    <label>Stock</label>
                    <input type="text" name="stock" placeholder="Stock" />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;
