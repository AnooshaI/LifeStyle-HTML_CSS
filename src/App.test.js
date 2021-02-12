import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import renderer from "react-test-renderer";
Enzyme.configure({
  adapter: new Adapter(),
});
//Setup function is to create wrapper for your mount so you dont have to define it again
const setUp = () => {
  const wrapper = mount(<App />); //change componant name here
  return wrapper;
};
describe("App", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
