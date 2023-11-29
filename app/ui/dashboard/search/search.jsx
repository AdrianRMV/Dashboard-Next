import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

const Search = ({ placehoder }) => {
    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placehoder}
                className={styles.input}
            />
        </div>
    );
};

export default Search;
