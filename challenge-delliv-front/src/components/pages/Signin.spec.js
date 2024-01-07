import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SignIn from './Signin'
    
    const onSubmit = jest.fn()

    beforeEach(()=>{
        render(<SignIn onSubmitForTest={onSubmit} />)
      })
    
    // beforeEach(()=>{
    //   const {  } = render(<SignIn />)
    //   onSubmit.mockClear()
    // })
    
    test('Login form with params', async () => {
      const eMail = screen.getByTestId('email')
      const password = screen.getByTestId('password')
      userEvent.type(eMail, "nilton.a.junior@hotmail.com")
      userEvent.type(password, "12345")
    
      userEvent.click(screen.getByTestId('send'))
    
      await waitFor(()=>{
        expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})