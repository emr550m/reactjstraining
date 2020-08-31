import React from 'react';
import { create, act } from 'react-test-renderer';
import { Home } from "../../src/pages/home";
import { InputBox } from "../../src/components/inputbox";
import { store } from "../../src/state/store"
import { Provider } from 'react-redux'
import axios from "axios";

describe("Home should ", () => {

  test('render with same dom output', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    let tree = componentRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('render app title correctly', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_APP_TITLE", appTitle: "yeni title" })
    });
    var spanObject = componentRenderer.root.findByType("ol");
    expect(spanObject.props.children[0].props.children).toBe("yeni title")

  });


  test('username onchangetest', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    var inputObjects = componentRenderer.root.findAllByType(InputBox);
    expect(inputObjects.length).toBe(2)

    act(() => {
      inputObjects[0].props.onChange({ target: { value: "TEST123123456" } });
    });

    expect(inputObjects[0].props.value).toBe("TEST123123456");


  });

  test('username state change test', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_USERNAME", username: "emr550m" })
    });
    var inputObjects = componentRenderer.root.findAllByType(InputBox);
    expect(inputObjects.length).toBe(2)

    expect(inputObjects[0].props.value).toBe("emr550m");


  });


  test('password onchangetest', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    var inputObjects = componentRenderer.root.findAllByType(InputBox);
    expect(inputObjects.length).toBe(2)

    act(() => {
      inputObjects[1].props.onChange({ target: { value: "PASS_123123098" } });
    });

    expect(inputObjects[1].props.value).toBe("PASS_123123098");


  });

  test('password state change test', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_PASSWORD", password: "PSDW22333444" })
    });
    var inputObjects = componentRenderer.root.findAllByType(InputBox);
    expect(inputObjects.length).toBe(2)

    expect(inputObjects[1].props.value).toBe("PSDW22333444");


  });

  test('login button state test true case', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_USERNAME", username: "emr550m" })
      store.dispatch({ type: "SET_PASSWORD", password: "PSDW22333444" })
    });
    var btn = componentRenderer.root.findByType("button");
    expect(btn.props.disabled).toBe(false)
  });

  test('login button state test false case', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_USERNAME", username: "emr550m" })
      store.dispatch({ type: "SET_PASSWORD", password: "" })
    });
    var btn = componentRenderer.root.findByType("button");
    expect(btn.props.disabled).toBe(true)
  });


  test('login button click test (login itself)', () => {
    const componentRenderer = create(
      <Provider store={store}><Home /></Provider>
    );
    act(() => {
      store.dispatch({ type: "SET_USERNAME", username: "emr550m" })
      store.dispatch({ type: "SET_PASSWORD", password: "PSDW22333444" })
    });
    var originalAxiosPost = axios.post;
    expect(store.getState().dashboard.logIn).toBe(false)
    axios.post = function (a, b) {
      return new Promise((resolve, reject) => {
        resolve({ data: { success: true, token: "tokenVALUE" } })
      });
    }
    var btn = componentRenderer.root.findByType("button");
    act(() => {
      btn.props.onClick();
    });
    axios.post=originalAxiosPost;
    expect(store.getState().dashboard.logIn).toBe(true)
  });

});