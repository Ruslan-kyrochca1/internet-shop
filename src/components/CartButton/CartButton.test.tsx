import { render, screen} from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
import {CartButton}  from "./CartButton.tsx"
describe('CartButton', () => {
    it('shows "Добавить в корзину" when isInCart=false', () => {
        render(<CartButton isInCart={false} onClick={() => {}} />);
        expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
    });
  });
