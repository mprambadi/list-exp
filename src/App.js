import React, { Component } from "react";
import users from "./user";
import "./App.scss";
class App extends Component {
  state = {
    search: ""
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    return (
      <div className="app">
        <div className="content">
          <input
            placeholder="search user"
            value={search}
            onChange={this.handleSearch}
            className="search"
          />
          <UserList users={users} search={search} />
        </div>
      </div>
    );
  }
}

const UserList = ({ users, search }) => {
  const filter = users.filter(
    user =>
      [user.name, user.username, user.email]
        .join(" ")
        .toLowerCase()
        .indexOf(search) !== -1
  );

  return (
    <div >
        <div className="user-header">
            <div>Name</div>
            <div>Username</div>
            <div>Email</div>
        </div>
      {filter.map(user => (
        <div key={user.id} className="user-list">
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
