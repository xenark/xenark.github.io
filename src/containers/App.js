import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	
	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value})
	}
	render(){
		const {robots, searchField} = this.state;
		const filterRobots = robots.filter((robotList) =>{

			return robotList.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ?
		<h1>Loading</h1>:
		(<div className="tc">
		<h1 className="f1">RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundary>
		<CardList robots={filterRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>);
	}
}
export default App;