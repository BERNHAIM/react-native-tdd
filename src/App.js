import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <>
    <View testId="welcome">
      <Text>Todo TDD</Text>
      <AddToDo></AddToDo>
      <ToDoList></ToDoList>
      <StatusBar style="auto" />
    </View>
    </>
  );
}
