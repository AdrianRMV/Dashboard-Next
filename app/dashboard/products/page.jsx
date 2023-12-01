import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/products/products.module.css';
import Image from 'next/image';
import Link from 'next/link';
const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search For a product" />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src="/noproduct.jpg"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.productImage}
                                />
                                Iphone 15
                            </div>
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </td>
                        <td>$1000</td>
                        <td>Dic 30 2023</td>
                        <td>22</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button
                                        className={`${styles.button} ${styles.view}`}
                                    >
                                        View
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button
                                        className={`${styles.button} ${styles.delete}`}
                                    >
                                        Delete
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default ProductsPage;
