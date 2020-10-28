import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Include components
import ContactList from './Components/ContactList/ContactList'
import Header from './Components/Header/Header'
import NotFound from './Components/NotFound/NotFound'

class App extends Component {
  state = {
    List: [
      {
        id: uuidv4(),
        name: 'Mila Kunis',
        role: 'Member',
        avatar: '16',
        created: '2013/08/08',
        status: 'Inactive',
        email: 'mila@kunis.com',
        gender: 'women',
      },
      {
        id: uuidv4(),
        name: 'George Clooney',
        role: 'Admin',
        avatar: '42',
        created: '2013/08/08',
        status: 'Active',
        email: 'marlon@brando.com',
        gender: 'men',
      },
      {
        id: uuidv4(),
        name: 'Ryan Gossling',
        role: 'Registered',
        avatar: '44',
        created: '2013/03/03',
        status: 'Banned',
        email: 'jack@nicholson',
        gender: 'men',
      },
      {
        id: uuidv4(),
        name: 'Emma Watson',
        role: 'Registered',
        avatar: '12',
        created: '2004/01/24',
        status: 'Pending',
        email: 'humphrey@bogart.com',
        gender: 'women',
      },
      {
        id: uuidv4(),
        name: 'Robert Downey Jr.',
        role: 'Admin',
        avatar: '3',
        created: '2013/12/31',
        status: 'Active',
        email: 'spencer@tracy',
        gender: 'men',
      },
      {
        id: uuidv4(),
        name: 'Mila Kunis',
        role: 'Admin',
        avatar: '7',
        created: '2013/08/08',
        status: 'Inactive',
        email: 'mila@kunis.com',
        gender: 'women',
      },
      {
        id: uuidv4(),
        name: 'George Clooney',
        role: 'Member',
        avatar: '8',
        created: '2013/08/08',
        status: 'Active',
        email: 'marlon@brando.com',
        gender: 'men',
      },
      {
        id: uuidv4(),
        name: 'Ryan Gossling',
        role: 'Registered',
        avatar: '11',
        created: '2013/03/03',
        status: 'Banned',
        email: 'jack@nicholson',
        gender: 'men',
      },
      {
        id: uuidv4(),
        name: 'Emma Watson',
        role: 'Registered',
        avatar: '10',
        created: '2004/01/24',
        status: 'Pending',
        email: 'humphrey@bogart.com',
        gender: 'women',
      },
      {
        id: uuidv4(),
        name: 'Robert Downey Jr.',
        role: 'Admin',
        avatar: '1',
        created: '2013/12/31',
        status: 'Active',
        email: 'spencer@tracy',
        gender: 'men',
      },
    ],
  }
  onStatusChange = (id) => {
	const index = this.state.List.findIndex((elem) => elem.id === id);
	const tmpList = this.state.List.slice();
	switch (tmpList[index].status) {
	  case "Active":
		 tmpList[index].status = "Inactive";
		 break;
	  case "Inactive":
		 tmpList[index].status = "Pending";
		 break;
	  case "Pending":
		 tmpList[index].status = "Banned";
		 break;
	  case "Banned":
		 tmpList[index].status = "Active";
	}

	this.setState({
	  List: tmpList,
	});
 };

 onDelete = (id) => {
	const index = this.state.List.findIndex((elem) => elem.id === id);
	const partOne = this.state.List.slice(0, index);
	const partTwo = this.state.List.slice(index + 1);
	const newList = [...partOne, ...partTwo];

	this.setState(() => {
	  return {
		 List: newList,
	  };
	});
 };

 render() {
	return (
	  <Router>
		 <Header />
		 <Switch>
			<Route
			  path="/"
			  exact
			  render={() => (
				 <ContactList
					onStatusChange={this.onStatusChange}
					onDelete={this.onDelete}
					List={this.state.List}
				 />
			  )}
			/>
			<Route component={NotFound} />
		 </Switch>
	  </Router>
	);
 }
}

ReactDOM.render(<App />, document.getElementById("root"));