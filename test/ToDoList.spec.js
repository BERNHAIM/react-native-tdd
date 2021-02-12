import React from "react";
import ToDoList from "../src/ToDoList";
import { shallow } from "enzyme";
import { FlatList } from "react-native";

describe("rendering", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          text: "some todo",
          completed: false,
        },
        {
          text: "some todo 2",
          completed: true,
        },
      ],
    };

    wrapper = shallow(<ToDoList {...props} />);
  });

  it("should render a flat list", () => {
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });

  it("should pass props to FlatList", () => {
    expect(wrapper.find(FlatList).prop('data')).toBe(props.items);
  });
});
