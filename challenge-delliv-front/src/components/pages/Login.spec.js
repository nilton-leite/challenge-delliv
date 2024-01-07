import React from 'react';
import { fireEvent, getByTestId } from '@testing-library/react';

import SignIn from './Signin'
import { renderWithProviders } from '../../utils/tests/renderWithProvider';

describe('LoginForm Component', () => {
  it('should submit the username and password', () => {
    // GIVEN
    const onSubmitMock = jest.fn();
    const password = '12345';
    const username = 'nilton.a.junior@hotmail.com';

    // WHEN
    const {getByLabelText, getByText} = renderWithProviders(<SignIn onSubmit={onSubmitMock}/>);

    fireEvent.change(getByTestId('email'), {target: {value: username}});
    fireEvent.change(getByTestId('password'), {target: {value: password}});
    fireEvent.click(getByTestId('send'));

    // THEN
    /* 
    onSubmit will be called with 3 parameters but only the first one interests me:
    values : Object
    The field values in the form of { field1: 'value1', field2: 'value2' }.
    https://redux-form.com/8.2.2/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-
    
    a less explicite option:
    expect(onSubmitMock.mock.calls[0][0]).toEqual({username, password});
    */
    expect(onSubmitMock).toHaveBeenCalledWith(
      {username, password},
      expect.any(Function),
      expect.any(Object),
    );
  });

//   it('should show a errorMessage message if passed one', () => {
//     // GIVEN
//     const onSubmitMock = jest.fn();
//     const errorMsg = 'errorMessage message';

//     // WHEN
//     const {getByText} = renderWithProviders(<SignIn errorMessage={errorMsg} onSubmit={onSubmitMock}/>);

//     // THEN
//     expect(getByText(errorMsg)).not.toBeNull();
//   });
});