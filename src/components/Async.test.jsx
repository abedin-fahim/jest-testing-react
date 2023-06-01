import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('Post are AVAILABLE', async () => {
    render(<Async />);

    // This has a third arguments, which allows us to set a timeout before running the following line which is 1s by default
    // The second argument is exact;
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
