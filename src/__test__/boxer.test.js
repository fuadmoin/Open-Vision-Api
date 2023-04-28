import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Boxer from '../pages/Boxer';


const mockStore = configureStore([]);

describe('Boxer', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      animal: {
        animals: [
          { breeds: { primary: 'Beagle' } },
          { breeds: { primary: 'Border' } },
          { breeds: { primary: 'Boxer' } },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
        <Boxer />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render the Boxer component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display the breed "boxer"', () => {
    const breed = screen.getAllByText(/Boxer/i);
    expect(breed[0]).toBeInTheDocument();
  });
});