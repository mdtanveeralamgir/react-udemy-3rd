import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async', () => {
    test('renders post if request succeeds', async () => {
        render(<Async/>)
        const listItemsRenders = await screen.findAllByRole('listitem');
        expect(listItemsRenders.length).toBeGreaterThanOrEqual(1);
    })
})