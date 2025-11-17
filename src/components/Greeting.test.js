import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders hello word as a text', () => {
        //Arrange
        render(<Greeting/>)
        //Act
        //..nothing for this one

        //Assert
        const helloWroldElement = screen.getByText('Hello world');
        expect(helloWroldElement).toBeInTheDocument();
    });

    test('rendering good to see you when the button is not clicked', () => {
        render(<Greeting/>)
        const greeting = screen.getByText('It\'s good to see you');
        expect(greeting).toBeInTheDocument();
    });

    test('rendering Changed when the button is clicked', async () => {
        //Arrange
        render(<Greeting/>)
        //Act
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement);
        const greeting = screen.getByText('Changed');
        expect(greeting).toBeInTheDocument();
    });

    test('hiding "good to see you" when the button is clicked', async () => {
        //Arrange
        render(<Greeting/>)
        //Act
        const buttonElement = screen.getByRole('button')
        await userEvent.click(buttonElement);
        const greeting = screen.queryByText('It\'s good to see you');
        expect(greeting).toBeNull();
    });
})

