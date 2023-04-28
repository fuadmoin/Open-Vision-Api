import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Beagle from '../pages/Beagle';

const mockStore = configureStore([]);

describe('Beagle', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      animal: {
        animals: [
          { breeds: { primary: 'Beagle' } },
          { breeds: { primary: 'Border' } },
          { breeds: { primary: 'Labrador Retriever' } },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Beagle />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render the Beagle component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display the breed "beagle"', () => {
    expect(screen.getAllByText(/Beagle/i)[0]).toBeInTheDocument();
  });
});
