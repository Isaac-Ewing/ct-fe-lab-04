import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import data from '../fixtures/data.json';
import APIContainer from './APIContainer';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

describe('Container test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should enter a URL and request method, click submit, and return a response from an API', async () => {
    const component = render(<APIContainer />);

    screen.getByText('CSSless');

    const input = await screen.findByPlaceholderText('URL');
    userEvent.type(input, 'https://ac-vill.herokuapp.com/villagers/');

    const radioButton = await screen.findByLabelText('GET');
    userEvent.click(radioButton);

    const submitButton = await screen.findByRole(
      'button',
      { name: 'submit-button' }
    );

    userEvent.click(submitButton);

    return waitFor(() => {
      const response = screen.getByText(
        '"Admiral"',
        { exact: false }
      );

      expect(response).toBeInTheDocument();
      expect(component).toMatchSnapshot();
    });
  });
});