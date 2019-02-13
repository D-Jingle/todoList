import React , { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick(){
    const { index , deleteItem } = this.props;
    deleteItem(index);
  }
}

// TodoItem.propTypes = {
//   content : PropTypes.string.isRequired,
//   deleteItem : PropTypes.func,
//   index : PropTypes.number
// }

TodoItem.defaultProps = {
  content: 'hello world'
}

export default TodoItem;
