import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Border from '../pages/Border';


const mockStore = configureStore([]);

describe('Border', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      animal: {
        animals: [
          { breeds: { primary: 'Pug' } },
          { breeds: { primary: 'Border' } },
          { breeds: { primary: 'Labrador Retriever' } },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
        <Border />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render the Border component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display the breed "border"', () => {
    expect(screen.getAllByText(/Border/i)[0]).toBeInTheDocument();
  });
});