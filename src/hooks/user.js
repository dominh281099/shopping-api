import React from 'react';
import LayoutComponent from './component/user/layout';
import ContentUser from './component/user/content';

const ListUsers = () => {
    return (
        <>
            <LayoutComponent>
                <ContentUser/>
            </LayoutComponent>
        </>
    )
}
export default React.memo(ListUsers);