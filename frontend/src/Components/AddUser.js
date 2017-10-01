import React, { Component } from 'react';
import uuid from 'uuid';

class AddUser extends Component {

  constructor(){
    super();
    this.state = {
      newUser:{}
    }
  }

  handleSubmit(e){
    if(this.refs.name.value === ''){
      alert('Name is mandatory');
    }else if(this.refs.userName.value === ''){
      alert('User Name is mandatory');
    } else {
      this.setState({newUser:{
        id: uuid.v4(),
        name: this.refs.name.value,
        userName: this.refs.userName.value
      }}, function(){
        this.props.addUser(this.state.newUser);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add User</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>UserName</label><br />
            <input type="text" ref="userName" />
          </div>
          <br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddUser;
