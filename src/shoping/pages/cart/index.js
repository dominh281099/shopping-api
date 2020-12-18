import React from 'react';
import LayoutComponent from '../../component/layout';
import ListItemsCart from './component/list-cart';

const AppCart = () => {
    return (
        <>
            <LayoutComponent>
                <ListItemsCart/>
            </LayoutComponent>
        </>
    )
};

export default React.memo(AppCart);