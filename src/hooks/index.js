import React, { useState } from 'react';
import ButtonComponent from './component/Button';
import Results from './component/Results';

const CounterHooks = () =>{
    //Tao ra state va cach thuc cap nhap lai state
    const[count, setCount] = useState(0); // ban chat ham useState se return lai array(state, phuong thuc cap nhap lai state) 
    const incrementCounter = () => {
        setCount(count + 1);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }
    return (
        <>
            <Results result={count} />
            <ButtonComponent 
                click = {incrementCounter}
                type="button">+
            </ButtonComponent>
            <ButtonComponent
                 click = {decrementCounter}
                 type="button" type="button">-
            </ButtonComponent>
        </>
    )
};

export default CounterHooks;