import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white'
  },

  completed: {
    backgroundColor: 'red'
  }
})


export default class ToDoItem extends Component {

  onCompleted = () => {
    const { onCompleted, index } = this.props;
    onCompleted(index);
  }

  onDeleted = () => {
    const { onDeleted, index } = this.props;
    onDeleted(index);
  }

  render(){
    const { items } = this.props;

    return (
      <View style={items.completed ? styles.completed : styles.default}>
        <Text></Text>
        <Button title="click2" onPress={this.onCompleted}></Button>
        <Button title="click3" onPress={this.onDeleted}></Button>
      </View>
    )
  }
}