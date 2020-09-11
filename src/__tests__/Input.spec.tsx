import React from "react";
import { Input } from "../index";
import renderer, { act } from "react-test-renderer";

test("Input test", () => {
  const component = renderer.create(
    <Input
      placeholder="Name"
      value="George"
      onChange={(val: string) => console.log(val)}
    />
  );
  const instance = component.root;

  expect(instance.findByType(Input).props.placeholder).toBe("Name");
  expect(instance.findByType(Input).props.value).toBe("George");

  act(() => {
    const inst: any = component.toJSON();
    const input: any = inst.children[0].children[1];
    
    input.props.onChange( { target: { value: 'value come from input' } } );
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});