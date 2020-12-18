import React from 'react';
import LayoutComponent from './component/partials/Layout';
import AddTodo from './component/add-todo';
import ListTodo from './component/list-todo';
import FinishedAndDelete from './component/action-todo.js'

class TodoApp extends React.Component{
    constructor(){
        super();
        this.state = {
            idTodo: 1,
            nameTodo: '',
            listTodo: [] ,// {id: 1, name: 'Hoc CSS',done: false}
            showUnfinish: false
        }
    }

    // Thuc hien them cong viec
    addTodo = (nameWork = '') => {
        // kiem tra do dai string neu > 0 => nguoi dung da nhap vao cong viec
        if(nameWork.length > 0){
            // Cap nhap thay doi state
            this.setState({
                idTodo: this.state.idTodo + 1, // dam bao id khong trung lap
                nameTodo: '',
                listTodo: [...this.state.listTodo, {
                    id: this.state.idTodo,
                    name: nameWork,
                    done: false, // Mac dinh cong viec chua hoan thanh
                }] //Ghep dl cu va dl moi de hoan thanh danh sach day du,

            });

        }
    }

    changeNameTodo = (event) => {
        const name = event.target.value; // lay du lieu nhap vao o input 
        this.setState({
            nameTodo: name,
        });
    }


    deleteIconTodo = (idWork) => {
        //Xoa cac cong viec theo id tung cong viec
        // can loai bo cong viec co id trung voi idwork truyen vao trong mang ListTodo khai bao o constructor
        const newTodo = this.state.listTodo.filter(item => item.id !== idWork); // lay ra tat ca cac dl khong ton tai trong thg kia
        this.setState({
            ...this.state,
            listTodo: newTodo
        });
    }

    finishedItemTodo = (idWork) => {
        // Cap nhap lai trang thai done ve true cua cong viec ma co id la idWork truyen vao tuong ung   
            const finishedTodo = this.state.listTodo.map(item => {
            return item.id === idWork ? {...item, done: !item.done} : item;// ...item: lay lai item ban dau

        });
        this.setState({
            ...this.state,
            listTodo: finishedTodo
        })
    }

    finishedAndDelete = (TypeAction) => {
        switch(TypeAction){
            case 'deleteAll':
                    this.setState({
                        idTodo: 1, 
                        listTodo: [],
                        showUnfinish: false
                    });
                break;
            case 'finishedAll':
                const newFinished = this.state.listTodo.map(item => {
                    return {...item, done: true}
                });
                this.setState({
                    listTodo: newFinished,
                    showUnfinish: true
                })
                break;
                case 'unfinishedAll':
                    const unFinished = this.state.listTodo.map(item => {
                        return {...item, done: false}
                    });
                    this.setState({
                        listTodo: unFinished
                    })
                break;
            default: 
                this.setState({
                    listTodo: {...this.state.listTodo}
                })
            break;    
        }
    }

    

    render() {
        return (
            <>
            <LayoutComponent>
                <AddTodo
                    add={this.addTodo}
                    change={this.changeNameTodo}
                    value={this.state.nameTodo}
                />
                <FinishedAndDelete
                    action={this.finishedAndDelete}
                    show={this.state.showUnfinish}
                />
                <ListTodo
                    todo={this.state.listTodo}
                    delete={this.deleteIconTodo}
                    finished={this.finishedItemTodo}
                />
            </LayoutComponent>
            </>
        )
    }
}
export default TodoApp;