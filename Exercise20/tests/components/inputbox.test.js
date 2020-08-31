import React from 'react';
import { create, act } from 'react-test-renderer';
import { InputBox } from "../../src/components/inputbox";


describe("InputBox should ", () => {

  test('render with same dom output', () => {
    const componentRenderer = create(
      <InputBox label="Emrah" value="Öz" onChange={(e) => {

      }} type="text" />
    );
    let tree = componentRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render given label prop correctly', () => {
    const componentRoot = create(
      <InputBox label="Username" value="user" onChange={(e) => {

      }} type="text" />
    ).root;
    var spanObject = componentRoot.findByType("span");

    expect(spanObject.props.children).toBe("Username")
    expect(spanObject.props.className).toBe("input-group-text")
    expect(spanObject.props.id).toBe("inputGroup-sizing-default")

    var inputObject = componentRoot.findByType("input");
    expect(inputObject.props.ariaLabel).toBe("Username");
  });

  test('render given value prop correctly', () => {
    var valueInput = "user";

    let component;
    act(() => {
      component = create(<InputBox label="Username" value={valueInput} onChange={(e) => { }} type="text" />);
    });
    var inputObject = component.root.findByType("input");
    expect(inputObject.props.value).toBe("user");

    act(() => {
      valueInput = "user2";
      component.update(<InputBox label="Username" value={valueInput} onChange={(e) => { }} type="text" />)
    });
    expect(inputObject.props.value).toBe("user2");

  });

  test('fire onchange on inputchange', () => {
    var valueInput = "user";

    function onChange(e) {
      valueInput = e;
    }

    let component = create(<InputBox label="Username" value={valueInput} onChange={onChange} type="text" />);

    var inputObject = component.root.findByType("input");
    expect(inputObject.props.onChange).toBe(onChange);

    inputObject.props.onChange("newValue");

    inputObject = component.root.findByType("input");
    expect(valueInput).toBe("newValue");
  });


})



