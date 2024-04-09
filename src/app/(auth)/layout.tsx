import React from 'react';

type Props = {children: React.ReactNode};

const Layout = (props: Props) => {
    return (
        <div
            className="flex items-center justify-center
         overflow-hidden h-screen w-full"
        >
            {props.children}
        </div>
    );
};

export default Layout;