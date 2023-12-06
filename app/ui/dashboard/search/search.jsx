'use client';

import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathName = usePathname();
    const params = new URLSearchParams(searchParams);

    // ! useDebouncedCallback espera a que el usuario termine de escirbir con un tiempo de espera de 300 milisegundos en este caso, para impedir el exceso de peticiones

    const handleSearch = useDebouncedCallback(({ target }) => {
        // Si no tiene un valor el input no se manda una query por parametro y asi evitamos una peticion vacia
        if (target.value) {
            target.value.length > 2 && params.set('q', target.value);
        } else {
            params.delete('q');
        }
        replace(`${pathName}?${params}`);
    }, 300);

    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
