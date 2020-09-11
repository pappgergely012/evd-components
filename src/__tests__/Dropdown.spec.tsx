import React from "react";
import { Dropdown } from "../index";
import renderer, { act } from "react-test-renderer";

interface IData {
  name: string;
  key: number;
}

const data: IData[] = [{name: 'Kis Pizza', key: 1}, {name: 'Nagy Pizza', key: 2}];

const component = renderer.create(
  <Dropdown
    placeholder="Pizzák"
    data={data}
    onItemClicked={(item) => console.log(item)}
    keyExtractor={(item): number => item.key}
    labelExtractor={(item): string => item.name}
  />
);

test("Dropdown list", () => {
  const instance   = component.root;
  const inst: any  = component.toJSON();

  expect(instance.props.placeholder).toBe("Pizzák");
  expect(instance.props.data).toBeInstanceOf(Array);

  act(() => {
    inst.children[0].props.onClick();
  })

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Dropdown list selects the first element", () => {
  const instance   = component.root;

  expect(instance.props.placeholder).toBe("Pizzák");
  expect(instance.props.data).toBeInstanceOf(Array);

  act(() => {
    //the list test opened the dropdown
    const openedInstance: any = component.toJSON();

    openedInstance.children[1].children[0].props.onClick(data[0]);
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});