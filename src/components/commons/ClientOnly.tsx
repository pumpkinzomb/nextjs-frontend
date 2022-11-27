import React, { useState, useEffect } from 'react';

type ClientOnlyProps = {
    children?: React.ReactNode;
};

const ClientOnly = ({ children }: ClientOnlyProps) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <React.Fragment>{mounted ? children : ''}</React.Fragment>;
};

export default ClientOnly;
