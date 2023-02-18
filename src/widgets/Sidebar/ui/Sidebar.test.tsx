import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/libs/i18test/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe('Test button', () => {
	test('btn', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		screen.debug()
	})
	test('toggle state', () => {
		renderWithTranslation(<Sidebar />);
		const sidebar = screen.getByTestId("sidebar");
		const toggleBtn = screen.getByTestId("sidebar-toggle");
		expect(sidebar).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('sidebar_opened');
	})
})