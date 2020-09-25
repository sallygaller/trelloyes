import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected when the Card content is long', () => {
    const tree = renderer
        .create(<Card name="Card" content={"Blah blah blah blah blah blah blah blah blah blah blah"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the UI as expected when the title is blank', () => {
    const tree = renderer
        .create(<Card name="Card" title={""} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});