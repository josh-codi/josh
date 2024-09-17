import {render, screen, clear} from '@testing-library/react'
import Button from '../Button'

test('should render button component', ()=>{
    render(<Button/>);
    const buttonElement = screen.getByTestId('button-1');
    expert(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('button')
})