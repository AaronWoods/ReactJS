import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from './Link';

test('Link changes the class when hovered', () =>{
    const component = renderer.create(<Link>Google</Link>);
    let tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    //event simulation
    //manually trigger the callback
    tree.props.onMouseEnter();
    
    //re-rendery
    
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    //manually trigger the callback
    tree.props.onMouseLeave();
    
    //re-render
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
})