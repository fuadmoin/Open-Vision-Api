import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Details from '../component/Details';

describe('Details', () => {
  let component;

  beforeEach(() => {
    const animals = [
      { breeds: { primary: 'Pug' } },
      { breeds: { primary: 'Pug' } },
      { breeds: { primary: 'Labrador Retriever' } },
    ];

    component = render(
      <BrowserRouter>
        <Details picture="test.jpg" animals={animals} title="Test Title" />
      </BrowserRouter>
    );
  });

  it('should render the Details component', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should display the title', () => {
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });

  it('should display the individual breeds', () => {
    expect(screen.getByText(/Pug/i)).toBeInTheDocument();
    expect(screen.getByText(/Labrador Retriever/i)).toBeInTheDocument();
  });
});