import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected if the header is blank', () => {
    const tree = renderer
        .create(<List name="Header" header={""} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the UI as expected if there are many cards', () => {
    const tree = renderer
        .create(<List name="List" cards={25} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});