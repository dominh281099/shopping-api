import React from 'react'; 
import LayoutComponent from './component/partials/Layout';
import Global from './component/Global';
import Country from './component/Country';
import CoronaProvider from './context/my-provider';

class Corona extends React.Component{
    render() {
        return (
            <LayoutComponent>
                <CoronaProvider>
                    <Global/>
                    <Country/>
                </CoronaProvider>
            </LayoutComponent>
        )
    }
}
export default Corona;