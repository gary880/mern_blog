
import { renderWithProviders } from "@/utils/test-utils";
import '@testing-library/jest-dom/vitest';
import Navbar from "@/components/nav";
import { vi } from 'vitest'

const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual<typeof import("react-router-dom")>(
        "react-router-dom"
    );
    return {
        ...mod,
        useNavigate: () => mockedUseNavigate,
    };
});


it('should render the nav component', () => {
    const { getByRole } = renderWithProviders(<Navbar />)
    const profileButton = getByRole('button', { name: /profile/i })
    const linkedinButton = getByRole('button', { name: /linkedin/i })
    const loginButton = getByRole('button', { name: /login/i })
    expect(profileButton).toBeInTheDocument()
    expect(linkedinButton).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
})

it('should navigate to the profile page', () => {
    const { getByRole } = renderWithProviders(<Navbar />)
    const profileButton = getByRole('button', { name: /profile/i })
    profileButton.click()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/profile")
})

it('should navigate to the login page', () => {
    const { getByRole } = renderWithProviders(<Navbar />)
    const loginButton = getByRole('button', { name: /login/i })
    loginButton.click()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login")
})