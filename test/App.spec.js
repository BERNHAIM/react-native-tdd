import React from "react";
import App from "../src/App";

import renderer from "react-test-renderer";
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>)
  it('is Text exist?', () => {
    // wrapper에서 find를 이용하여 Text컴포넌트를 검색, 
    // 'Todo Tdd'를 가지고 있으면 true
    expect(wrapper.find('Text').contains('Todo TDD')).toBe(true)
  })

  it('is AddTodo exist?', () => {
    // AddTodo가 1개 있느냐 검색
    expect(wrapper.find('AddToDo')).toHaveLength(1)
  })
  
  it('is ToDoList exist?', () => {
    // ToDoList 1개 있느냐 검색
    expect(wrapper.find('ToDoList')).toHaveLength(1)
  })
})