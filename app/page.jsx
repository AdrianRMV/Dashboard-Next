'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const Homepage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard');
    }, []);

    return <div>Redireccionando a Dashboard...</div>;
};

export default Homepage;
