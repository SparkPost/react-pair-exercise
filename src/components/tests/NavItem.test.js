import React from "react";
import { shallow } from "enzyme";
import NavItem from "../NavItem";

describe("NavItem", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onClick: jest.fn()
    };

    wrapper = shallow(<NavItem {...props}>Click Me</NavItem>);
  });

  it("handles click events", () => {
    wrapper.find("UnstyledLink").simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });

  it("renders selected nav item", () => {
    wrapper.setProps({ selected: true });
    expect(wrapper.find("UnstyledLink").prop("className")).toMatch(/SelectedNavItem/);
  });
});