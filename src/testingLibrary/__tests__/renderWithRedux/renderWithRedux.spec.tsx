import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { renderWithRedux } from '../../renderWithRedux';
import { Demo } from './Demo';
import demoReducer from './Redux/redux'

describe('test renderWithRedux', () => {
  it('do changePerson', () => {
    const store = configureStore({ reducer: { demoReducer } });
    renderWithRedux(<Demo name="Hello Demo" />, store, {});

    expect(screen.getByText('姓名: Nancy')).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: 'Jack'
      }
    });

    expect(screen.getByText('姓名: Jack')).toBeInTheDocument();
  });
});