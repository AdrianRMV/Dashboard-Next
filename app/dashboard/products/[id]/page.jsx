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
                    <input type="hidden" name="id" />
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Product Title"
                    />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="Price" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="Stock" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Color" />
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="Size" />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10"></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;
