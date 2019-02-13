import React , { Component , Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props); // 父类构造函数
    // 数据定义在状态里面
    this.state= {
      inputValue: '',
      list: ['吃饭','睡觉']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    return this.state.list.map((item , index ) => {
      return (
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        </div>
      )
    })
  }

  handleInputChange(e){
    const value = e.target.value
    this.setState(() => ({
      inputValue : value
    }))
    // this.setState(() => {
    //   return {
    //     inputValue : e.target.value
    //   }
    // })
    // this.setState({
    //   inputValue : e.target.value
    // })
  }

  handleBtnClick(){
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index){
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1)
      return {list}
    })
    // this.setState({
    //   list: list
    // })
  }
}
export default TodoList;