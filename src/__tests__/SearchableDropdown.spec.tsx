/**
 * @jest-environment jsdom
 */

import React from "react";
import { SearchableDropdown } from '../index';
import renderer, { act } from "react-test-renderer";

const cities = [
  { city: 'New York', id: '1' },
  { city: 'Boston', id: '2' }
]

const component = renderer.create(
  <SearchableDropdown
    data={cities}
    placeholder="Cities"
    labelExtractor={(item): string => item.city}
    keyExtractor={(item): string => item.id}
    onChange={(selected) => console.log('value come from searchabledropdown change is ' + selected)}
    activeColor="#333"
  />
);

test("Dropdown open test", () => {
  const instance = component.root;

  expect(instance.props.placeholder).toBe("Cities");
  expect(instance.props.data).toBeInstanceOf(Array);

  act(() => {
    const inst: any = component.toJSON();
    const input: any = inst.children[0].children[0].children[1];

    input.props.onFocus();
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("Dropdown item clicked test", () => {
  const instance = component.root;

  expect(instance.props.placeholder).toBe("Cities");
  expect(instance.props.data).toBeInstanceOf(Array);

  act(() => {
    const inst: any = component.toJSON();
    const input: any = inst.children[0].children[0].children[1];
    const listItem: any = inst.children[1].children[0];

    input.props.onFocus();
    listItem.props.onClick();
  });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
