import { renderWithProviders } from '@/utils/test-utils';
import Post from '@/components/post';
import { vi } from 'vitest'
import { waitFor } from '@testing-library/react';

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
const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

it('should render the post component', () => {

    //mock fetchPosts
    const fetchPosts = vi.fn()

    const postProps = {
        title: 'title',
        date: 'date',
        summary: 'summary',
        image: 'image',
        tags: ['tag1', 'tag2'],
        id: 'id',
        fetchPosts: () => fetchPosts
    }

    const { getByRole } = renderWithProviders(<Post {...postProps} />)
    const title = getByRole('heading', { name: /title/i })
    const summary = getByRole('heading', { name: /summary/i })

    
    const {findByText} = renderWithProviders(<Post {...postProps} />)
    const tag1 = findByText('tag1')
  
    waitFor(() => {
        expect(title).toBeInTheDocument()
        expect(summary).toBeInTheDocument()
        expect(tag1).toBeInTheDocument()
    })
})