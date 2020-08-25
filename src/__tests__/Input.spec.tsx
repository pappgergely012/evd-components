import * as React from "react";
import EInput from "../index";
import renderer from "react-test-renderer";

test("Component should return an EInput with placeholder=Asd, value=asd, onChange='function: void' ", () => {
  const component = renderer.create(
    <EInput 
      placeholder="Asd"
      value="asd"
      onChange={(val) => console.log(val)}
    />
  );
  const testInstance = component.root;

  expect(testInstance.findByType(EInput).props.placeholder).toBe("Asd");
  expect(testInstance.findByType(EInput).props.value).toBe("asd");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});