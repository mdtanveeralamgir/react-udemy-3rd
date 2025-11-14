import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";

test('renders hello word as a text', () => {
    //Arrange
    render(<Greeting/>)
    //Act
    //..nothing for this one

    //Assert
    const helloWroldElement = screen.getByText('Hello world');
    expect(helloWroldElement).toBeInTheDocument();
})