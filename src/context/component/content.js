import React from 'react';
import MyContext from '../global/my-context';

const Content = () => {
    return(
        <MyContext.Consumer>
            {context => {
                // console.log(context);
                return(
                    <table width="100%" border="1" cellSpacing="0" cellPadding="0"> 
                    <thead>
                        <tr>
                            <th>Ma SV</th>
                            <th>Ho ten</th>
                            <th>Tuoi</th>
                            <th>SDT</th>
                            <th>Email</th>
                            <th>Dia chi</th>
                        </tr>
                    </thead>    
                    <tbody className=''>
                        {context.student.map((item, index) => (
                            <tr key={index}> 
                        <td>
                            {item.id}
                        </td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>

                            </tr>
                        ) )}
                    </tbody>
                </table>
                )
            }}
        {/* <table width="100%" border="1" cellSpacing="0" cellPadding="0"> 
            <thead>
                <tr>
                    <th>Ma SV</th>
                    <th>Ho ten</th>
                    <th>Tuoi</th>
                    <th>SDT</th>
                    <th>Email</th>
                    <th>Dia chi</th>
                </tr>
            </thead>    
            <tbody></tbody>
        </table> */}
        </MyContext.Consumer>
    )
}
export default Content;