import React, { Component } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 
import PurpleRibbon from "../../Images/purpleRibbon.jpg";
import Footer from "../footer/Footer";

class Volunteer extends Component {
	constructor(props) { 
		super(props); 

		// Setting up state 
		this.state = { 
			userInput: "", 
			list: [], 
		}; 
	} 

	// Set a user input value 
	updateInput(value) { 
		this.setState({ 
			userInput: value, 
		}); 
	} 

	// Add item if user input in not empty 
	addItem() { 
		if (this.state.userInput !== "") { 
			const userInput = { 
				// Add a random id which is used to delete 
				id: Math.random(), 

				// Add a user value to list 
				value: this.state.userInput, 
        value2: "I volunteer"
			}; 

			// Update list 
			const list = [...this.state.list]; 
			list.push(userInput); 

			// reset state 
			this.setState({ 
				list, 
				userInput: "", 
			}); 
		} 
	} 

	// Function to delete item from list use id to delete 
	deleteItem(key) { 
		const list = [...this.state.list]; 

		// Filter values and leave value which we need to delete 
		const updateList = list.filter((item) => item.id !== key); 

		// Update list in state 
		this.setState({ 
			list: updateList, 
		}); 
	} 

	editItem = (index) => { 
	const todos = [...this.state.list]; 
	const editedTodo = "- Clare has volunteered"; 
	if (editedTodo !== null && editedTodo.trim() !== '') { 
		let updatedTodos = [...todos] 
		// updatedTodos[index].value= updatedTodos[index].value+" "+editedTodo 
    updatedTodos[index].value= updatedTodos[index].value
    updatedTodos[index].value2= "Clare has Volunteered"
		this.setState({ 
		list: updatedTodos, 
	}); 
	} 
	} 

	render() { 
		return ( 
			<Container> 
				<Row 
					style={{ 
						display: "flex", 
						justifyContent: "center", 
						alignItems: "center", 
						fontSize: "2rem", 
						fontWeight: "bolder", 
            background: '#800080',
            color: "white",
            paddingTop: 20,
            paddingBottom: 20
					}} 
				> 
					VOLUNTEER PORTAL 
				</Row> 
        <Row 
					style={{ 
						display: "flex", 
						justifyContent: "center", 
						alignItems: "center", 
						fontSize: "1rem", 
						fontWeight: "bolder", 
            background: '#04b4b4',
            color: "white",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft:10,
            paddingRight:10
					}} 
				> 
					Post your requests for help (mention the time and place) and volunteer for when you can!
				</Row> 
				{/* <hr />  */}

			<div className="ImageClass">
             <img  style ={{width: '100%'}} src={PurpleRibbon} />
			 <div className="centered" style={{position: 'absolute', color: 'white', backgroundColor: 'purple', padding: '20px', width: '350px', height:'200px'}}>
				<Row> 
					<Col md={{ span: 6, offset: 3 }}> 
						<InputGroup className="mb-3" style={{width:"100%"}}> 
							<FormControl 
								placeholder="Post your request . . . "
								size="lg"
								value={this.state.userInput} 
								onChange={(item) => 
									this.updateInput(item.target.value) 
								} 
								aria-label="add something"
								aria-describedby="basic-addon2"
								style={{margin:'2%', justifyContent:'center'}}
							/> 
								<Button 
									variant="dark"
									className="mt-2"
									style={{margin:'2%',justifyContent:'center', color:'purple',width:'100%'}}
									onClick={() => this.addItem()} 
								> 
									ADD 
								</Button> 
						</InputGroup> 
					</Col> 
				</Row> 
				<Row> 
					<Col md={{ span: 6, offset: 3 }}> 
						<ListGroup margin='3%'> 
							{/* map over and print items */} 
							{this.state.list.map((item, index) => { 
								return ( 
								<div key = {index} > 
									<ListGroup.Item 
										variant="dark"
										action 
										style={{display:"flex", 
												justifyContent:'space-between'
									}} 
									> 
										{item.value} 
										<span> 
										<Button variant = "light"
										onClick={() => this.editItem(index)}> 
										{item.value2} 
										</Button> 
										</span> 
									</ListGroup.Item> 
								</div> 
								); 
							})} 
						</ListGroup> 
					</Col> 
				</Row> 
				</div>
				</div>

			<Footer note="Deutsche Bank" />
			</Container> 
		);
	} 
} 

export default Volunteer;