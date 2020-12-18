import React from 'react';
import PropTypes from 'prop-types';

//kiem tra props cua component


// khi nao dung export defaul: bat ki nhung cho khac import vao rat de dang. vi duoc phep chinh sua component(tien cho file khac de su dung hon)
// export: su dung {} - ngam bao hieu trong file co nhieu doi tuong can goi ra.
// trong 1 file chi dc export defaul 1 lan

 class ButtonComponent extends React.Component{
    // ten component bat buoc phai viet hoa ki tu dau
    render(){
        return(
            <>
            <button onClick={this.props.btnClick} type={this.props.type}>{this.props.children}</button>
            </>
        );
    }
}

//kiem tra props cua component
ButtonComponent.propTypes = {
    btnClick: PropTypes.func.isRequired,
    // type: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

// gan gia tri mac dinh cho props - tao ra cai prop mac dinh
// la phuong thuc chay dau tien khi component dc tao ra
ButtonComponent.defaultProps = {
    type: "button"
}

export default ButtonComponent;