import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import FeaturedProducts from './component/featured';
import LatestProducts from './component/latest';
import TopSellingProduct from './component/top-selling';
import LayoutComponent from '../../component/layout';
// import *as reselect from './reselect/product-reselect';
import * as actions from './actions/index';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.getData());
    },[dispatch]);
    return (
        <>
            <LayoutComponent>
                <FeaturedProducts/>
                <LatestProducts/>
                <TopSellingProduct/>
            </LayoutComponent>
        </>
    )
}

export default React.memo(HomePage);