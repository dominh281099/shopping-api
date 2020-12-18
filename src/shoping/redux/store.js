import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { apply } from 'redux-saga/effects';
import rootReducer from './reducer';
import rootSaga from './saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { routerMiddleware } from 'connected-react-router';
import history from './history';

const configRootPersist = {
    key: 'root-persist-config',
    storage,
    blacklist: ['router','productReducer', 'login']
}

const rootReducerPersist = persistReducer(configRootPersist, rootReducer(history))


const sagaMiddleware = createSagaMiddleware()

const configStore = (loadState = {}) => {
    const store = createStore(
        rootReducerPersist,
        loadState,
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
            logger
        )
    )
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { store, persistor, history }
}
export default configStore;