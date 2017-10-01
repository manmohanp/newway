import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

  deleteUser(id){
    this.props.onDelete(id);
  }

  render() {
    let userItems;

    if (this.props.users){
      userItems = this.props.users.map(user => {
        return (
          <UserItem onDelete={this.deleteUser.bind(this)} key={user.id} user={user} />
        );
      });
    }
    return (
      <div className="Users">
        <h3>All users</h3>
        {userItems}
      </div>
    );
  }
}

export default Users;
