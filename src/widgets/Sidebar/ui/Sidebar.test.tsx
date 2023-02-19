import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouterAndProvider } from "shared/libs/ComponentRender/ComponentRender";
renderWithRouterAndProvider
import { Sidebar } from "./Sidebar";

describe('Test button', () => {
	test('btn', () => {
		renderWithRouterAndProvider(<Sidebar />)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		screen.debug()
	})
	test('toggle state', () => {
		renderWithRouterAndProvider(<Sidebar />);
		const sidebar = screen.getByTestId("sidebar");
		const toggleBtn = screen.getByTestId("sidebar-toggle");
		expect(sidebar).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('sidebar_opened');
	})
})