import React from 'react';
import SearchMovie from '../component/search';
import ResultMovie from '../component/result';
import PaginationPage from '../component/pagination'

const AppMovie = () => {
    return(
        <>
            <SearchMovie/>
            <ResultMovie/>
            <PaginationPage/>
        </>
    )
}

export default React.memo(AppMovie);