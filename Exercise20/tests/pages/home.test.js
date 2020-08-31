import React from 'react';
import { create, act } from 'react-test-renderer';
import { Home } from "../../src/pages/home";
import { store } from "../../src/state/store"
import { Provider } from 'react-redux'

describe("Home should ", () => {

    test('render with same dom output', () => {
      const componentRenderer = create(
        <Provider store={store}><Home   /></Provider>
      );
      let tree = componentRenderer.toJSON();
      expect(tree).toMatchSnapshot();
    });


    test('render app title correctly', () => {
        const componentRenderer = create(
          <Provider store={store}><Home   /></Provider>
        );
       
        store.dispatch({type:"SET_APP_TITLE",appTitle})
        
      });

});