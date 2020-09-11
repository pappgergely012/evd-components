import React from "react";
import { Button } from "../index";
import renderer, { act } from "react-test-renderer";


const component = renderer.create(
  <Button
    title="Order"
    className="primary"
    onClick={() => console.log('Button clicked!')}
    type="square"
    position="center"
    style={{backgroundColor: "#fff", color: "#333", border: "1px solid #fff"}}
  />
);

test("Button", () => {
  const instance   = component.root;
  const inst: any  = component.toJSON();

  expect(instance.props.className).toBe("primary");
  expect(instance.props.title).toBe("Order");
  expect(instance.props.type).toBe("square");
  expect(instance.props.position).toBe("center");

  act(() => {
    inst.props.onClick();
  })

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});