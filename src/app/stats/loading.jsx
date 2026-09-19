import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-10'>
            <span className='loading loading-bars loading-xl text-green-600'></span>
        </div>
    );
};

export default loading;