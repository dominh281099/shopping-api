import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import ButtonComponent from './component/button';
import ResultComponent from './component/result';


const AppRedux = () => {
    return (
        <Provider store={store}>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <ResultComponent/>
                <ButtonComponent type="increment">+</ButtonComponent>
                <ButtonComponent type="decrement">-</ButtonComponent>
            </div>
        </Provider>
    )
}

export default React.memo(AppRedux)
