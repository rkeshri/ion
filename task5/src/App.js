import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }
  componentDidMount = () => {
    this.getUserList();
  };

  getUserList = () => {
    const that = this;
    axios
      .get("https://api.github.com/users ")
      .then(response => {
        this.setState({ userList: response.data });
      })
      .catch(function(error) {
        console.log("In error" + error);
        that.setState({ failureMessage: "Please try after some time" });
      });
  };

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <div className="container-fluid">
            <table class="table table-hover">
              <thead>
                <tr className="row">
                  <th className="col-md-2">Id</th>
                  <th className="col-md-2">Image</th>
                  <th className="col-md-2">Name</th>
                  <th className="col-md-2">Profile</th>
                  <th className="col-md-2">Get Repos</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {this.state.userList !== undefined &&
                this.state.userList !== [] ? (
                  this.state.userList.map((data, key) => {
                    return (
                      <tr className="row">
                        <td className="col-md-2">{data.id}</td>
                        <td className="col-md-2"><img src={data.avatar_url} class="img-responsive" width="150px" height="150px"/></td>
                        <td className="col-md-2">{data.login}</td>
                        <td className="col-md-2"><a href={data.html_url} target="_blank">Click here for profile</a></td>
                        <td className="col-md-2"><a href={data.repos_url} target="_blank">Click here for Repos</a></td>
                        
                        
                      </tr>
                    );
                  })
                ) : (
                  <tr>No data found</tr>
                )}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
