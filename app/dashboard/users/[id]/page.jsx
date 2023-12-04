import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';
const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" fill alt="" />
                </div>
                Adrian Ramirez
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Adrian Ramirez"
                        id=""
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="adrianthelawx@gmail.com"
                        id=""
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="Password"
                        placeholder="*****"
                        id=""
                    />
                    <label>Phone</label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="6123482563"
                        id=""
                    />
                    <label>Address</label>
                    <textarea
                        name="address"
                        placeholder="Mexico City"
                    ></textarea>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;
