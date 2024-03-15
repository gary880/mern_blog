import { renderWithProviders } from "@/utils/test-utils";
import '@testing-library/jest-dom/vitest';
import { LoginCard } from "@/components/loginCard";
import { vi } from 'vitest'
import { waitFor } from "@testing-library/react";

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

const mockedDispatch = vi.fn();
vi.mock('react-redux', async () => {
    const mod = await vi.importActual<typeof import("react-redux")>(
        "react-redux"
    );
    return {
        ...mod,
        useDispatch: () => mockedDispatch,
    };
})

const signinUser = vi.fn();
vi.mock('@/app/slices/userSlice', async () => {
    const mod = await vi.importActual<typeof import("@/app/slices/userSlice")>(
        "@/app/slices/userSlice"
    );
    return {
        ...mod,
        signinUser: () => signinUser
    };
})


it('should render the loginCard component', () => {
    const { getByRole } = renderWithProviders(<LoginCard />)
    const loginButton = getByRole('button', { name: /login/i })
    expect(loginButton).toBeInTheDocument()

})

it('should call signinUser ', () => {
    const { getByRole } = renderWithProviders(<LoginCard />)
    const loginButton = getByRole('button', { name: /login/i })
    loginButton.click()
    waitFor(() => {
        expect(signinUser).toHaveBeenCalled()
    })
});


