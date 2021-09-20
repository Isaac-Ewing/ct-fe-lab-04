import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('displays a json object', () => {
    render(
      <Display 
        res={{ hello: 'world' }}
      />
    );

    const display = screen.getByText('"world"');
    expect(display).toMatchSnapshot();
  });
});
