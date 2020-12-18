import React, { useState } from 'react';
import InputComponent from './component/Ptb2/input';
import ButtonComponent from './component/Ptb2/button';
import Results from './component/Ptb2/results';

const GiaiPTB2 = () => {
    let[Hsa, setHsa] = useState('');
    let[Hsb, setHsb] = useState('');
    let[Hsc, setHsc] = useState('');
    let[result, setResult] = useState(null);


    const changeInput = (event) => {
        let nameInput = event.target.name;
        let val = event.target.value;
        if(nameInput === 'Hsa'){
            setHsa(val);
        }else if (nameInput === 'Hsb'){
            setHsb(val);
        }else if (nameInput === 'Hsc'){
            setHsc(val);
        }
    }

    const giaiPT = () => {
        console.log('a')
        let a = Hsa;
        let b = Hsb;
        let c = Hsc;
        let chka = null; // check a
        let chkb = null; // check b
        let chkc = null; // check c

        if(!isNaN(a) && a.length > 0){ //kiem tra he so cua a xem co phai dang so hay khong
            chka = true;
            a = parseFloat(a);// ep a ve dang so thuc
        }else {
            chka = false;
        }

        if(!isNaN(b) && b.length > 0){
            chkb = true;
            b = parseFloat(b);// ep b ve dang so thuc
        }else {
            chkb = false;
        }

        if(!isNaN(c) && c.length > 0){
            chkc = true;
            c = parseFloat(c);// ep c ve dang so thuc
        }else {
            chkc = false;
        }
        console.log(a,b,c);
        if(chka && chkb && chkc){
            //Thuc su tim nghiem
            let delta = (b*b) - (4*a*c);
            console.log(delta);
            if(delta < 0){
              setResult(`Phuong trinh vo nghiem`);  
            }
            else if(delta===0){
                setResult(`Phuong trinh co nghiem kep: ${-b/(2*a)}`);
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2*a);
                let x2 = (-b - Math.sqrt(delta)) / (2*a);
                console.log(x1,x2);
                setResult(`Phuong trinh co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`)
            }
        }else{
            setResult(`Vui long nhap lai he so`);
        }

    }


    return(
        <>
            <h2>Giai phuong trinh bac 2</h2>
            <p>Nhap he so a: </p>   
            <InputComponent change={changeInput} type="text" name="Hsa" />
            <p>Nhap he so b: </p>   
            <InputComponent change={changeInput} type="text" name="Hsb" />
            <p>Nhap he so c: </p>   
            <InputComponent change={changeInput} type="text" name="Hsc" />
            <br></br>
            <ButtonComponent click={giaiPT} type="button">Giai PT</ButtonComponent>
            <Results result={result}/>

        </>
    );

}

export default GiaiPTB2;