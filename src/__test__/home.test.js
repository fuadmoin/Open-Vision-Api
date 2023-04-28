import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../component/Home';
import store from '../redux/store';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
          <Home />
      </Provider>
    );
  });

  it('should render the Home component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display "ANIMALS AND THEIR BREEDS" text', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
}); 