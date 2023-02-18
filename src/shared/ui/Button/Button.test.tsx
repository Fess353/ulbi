import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe('Test button', () => {
	test('btn', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText("Test")).toBeInTheDocument();
	})
	test('btn with theme', () => {
		render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
		expect(screen.getByText("Test")).toHaveClass('button_clear')
		screen.debug()
	})
})