import React from "react";
import AddToDo from "../src/AddToDo";
import { shallow } from "enzyme";
import { View, TextInput, Button } from "react-native";

describe("App", () => {
  let wrapper;

  // BeforEach : it이 수행될 때마다(test가 진행될 때마다 )
  // 새로 렌더링을 하겠다는 의미
  beforeEach(() => {
	wrapper = shallow(<AddToDo />);
  });

  it("is TextInput exist?", () => {
	// AddTodo가 1개 있느냐 검색
	let textInput = wrapper.find(TextInput);
	expect(textInput).toHaveLength(1);
  });

  it("is Button exist?", () => {
	// ToDoList 1개 있느냐 검색
	let button = wrapper.find(Button);
	expect(button).toHaveLength(1);
  });
});

// 버튼 클릭 후에 제대로 콜백 해주는 지
describe("Interaction", () => {
  let wrapper;
  let props;
  const text = "some To Do";

  beforeEach(() => {
	props = {
		/*
		 * jest.fn(): 이 함수가 몇번 호출되었는지, 
		 * 어떤 함수가 인자로 전달되었는지 확인 가능
		 */
		onAdded: jest.fn()
	}

	wrapper = shallow(<AddToDo {...props} />);

	wrapper.find(TextInput).simulate('changeText', text);
	wrapper.find(Button).prop('onPress')();
  });

  // 버튼이 눌렸을 때 콜백이 호출되고 text 인자가 전달되는지 확인하는 테스트 
  it("should call the onAdded callback with input text", () => {
	  // 콜백이 한번 실행되기를 기대
	  expect(props.onAdded).toHaveBeenCalledTimes(1);
	  expect(props.onAdded).toHaveBeenCalledWith(text);
  });
});
