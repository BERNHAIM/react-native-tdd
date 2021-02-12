import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";

export default class AddToDo extends Component {
    state = {
		  text: ''
	  }
	
	onChangeText = (text) => {
		this.setState({text});
	}

	onPress = () => {
		const { onAdded } = this.props;
		onAdded(this.state.text);
		// console.log(this.state.text);
	}

	render(){
   		return(
			<View>
				<TextInput
					placeholder="Type here!"
					onChangeText={this.onChangeText}
					value={this.state.text}
				/>
				<Button title="Click" onPress={this.onPress} />
			</View>
    )
	}
}
