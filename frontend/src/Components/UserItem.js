import React, { Component } from 'react';


class UserItem extends Component {

  deleteUser(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="User">
        <strong>{this.props.user.userName}</strong> : {this.props.user.name} <a href="#" onClick={this.deleteUser.bind(this, this.props.user.id)}>Remove</a>
      </li>
    );
  }
}

export default UserItem;
