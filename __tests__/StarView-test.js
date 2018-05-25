import React from 'React';
import ReactTestRenderer from 'react-test-renderer';
import StarView from '../index';

describe('StarView', () => {
  it('renders correctly', () => {
    const instance = ReactTestRenderer.create(
      <StarView score={3} />
    );
    expect(instance.toJSON()).toMatchSnapshot();
  });
});