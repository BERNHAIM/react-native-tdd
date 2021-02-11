import React from "react";
import App from "../src/App";

import renderer from "react-test-renderer";
import { Text } from 'react-native';
import { shallow } from 'enzyme';


describe("Jest", () => {
  it("is it working?", () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

describe("Enzyme", () => {
  it("is it working?", () => {
    //shallow : 
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
