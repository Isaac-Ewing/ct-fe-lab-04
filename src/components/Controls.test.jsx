import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  it('tests for form with two inputs, radio selections, and a button', () => {
    render(
      <Controls 
        valueUrl=""
        valueRawJson=""
        onChange={() => {}}
        onSubmit={() => {}}
      />
    );

    const controlsForm = screen.getByTestId('controls-form');
    expect(controlsForm).toMatchSnapshot();
  });
});
