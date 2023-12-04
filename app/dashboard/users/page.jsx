import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search User" />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Adrian Rmv
                            </div>
                        </td>
                        <td>adrianthelawx@Gmail.com</td>
                        <td>30.11.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/test">
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
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Miguelito Liru
                            </div>
                        </td>
                        <td>miguelitoliru@Gmail.com</td>
                        <td>30.11.2023</td>
                        <td>User</td>
                        <td>Active</td>
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

export default UsersPage;
