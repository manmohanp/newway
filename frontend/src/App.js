import React, { Component } from 'react';
import $ from 'jquery';
//import logo from './logo.svg';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      users : [],
      todos : []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getUsers(){

    $.ajax({
      url: 'http://192.168.99.100:32342/internalapis/users',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({users: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getUsers();
  }

  componentDidMount(){

  }

  handleAddUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({users:users});
  }

  handleDeleteUser(id){
    let users = this.state.users;
    let index = users.findIndex(x => x.id === id);
    users.splice(index,1);
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <AddUser addUser={this.handleAddUser.bind(this)}/>
        <Users users={this.state.users} onDelete={this.handleDeleteUser.bind(this)}/>
      </div>
    );
  }
}

export default App;
