import React from 'react';
import LayoutPage from '../component/layout';

const UpComingPage = () => {
    return(
        <LayoutPage>
            <h1>This is an Upcoming Page</h1>
        </LayoutPage>
    )
}

export default React.memo(UpComingPage);