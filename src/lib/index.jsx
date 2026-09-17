import FriendsProvider from '@/contexts/FriendsProvider';
import React from 'react';

const Provider = ({children}) => {
    return <FriendsProvider>
        {children}
    </FriendsProvider>
};

export default Provider;