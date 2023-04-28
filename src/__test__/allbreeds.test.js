import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AllBreeds from '../pages/AllBreeds';

const mockStore = configureStore([]);

describe('AllBreeds', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      animal: {
        animals: [
          { breeds: { primary: 'Pug' } },
          { breeds: { primary: 'Pug' } },
          { breeds: { primary: 'Labrador Retriever' } },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
        <AllBreeds />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render the AllBreeds component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display the title "All Breeds"', () => {
    expect(screen.getByText(/All Breeds/i)).toBeInTheDocument();
  });
});