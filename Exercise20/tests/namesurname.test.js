import React from 'react';
import renderer from 'react-test-renderer';
import {NameSurname} from "../src/components/namesurname";



test('name surname snopshot test', () => {
    const component = renderer.create(
      <NameSurname Name="Emrah" Surname="Öz" />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree)
    
});


