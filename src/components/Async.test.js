import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async', () => {
    test('renders post if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 1, title: 'test'}]
        })
        render(<Async/>)
        const listItemsRenders = await screen.findAllByRole('listitem');
        expect(listItemsRenders.length).toBeGreaterThanOrEqual(1);
    })
})