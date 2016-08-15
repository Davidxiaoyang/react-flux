import React from 'react';
import ListStore from '../stores/ListStore';
import ButtonActions from '../actions/ButtonActions';
import MyButton from './MyButton';
var buttonAction = new ButtonActions();

//flux学习
//1、用户访问View
// 2、view发出用户的Action
// 3、Dispatcher 收到 Action，要求 Store 进行相应的更新
// 4、Store 更新后，发出一个"change"事件
// 5、View 收到"change"事件后，更新页面


export default class MyButtonController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : ListStore.getAll()
        }
    }
    createNewItem(event){
        buttonAction.addNewItem("new item");
    }
    componentDidMount(){
        ListStore.addChangeListener(()=>this._onChange());
    }
    componentWillUnmount(){
        ListStore.removeChangeListener(()=>this._onChange());
    }
    _onChange(){
        this.setState({
            item : ListStore.getAll()
        });
    }
    render(){
        return <MyButton
            items={this.state.items}
            onClick={()=>this.createNewItem()} />;
    }


}



















