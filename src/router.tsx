import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import ItemDetailPage from './pages/ItemDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'item',
    children: [
      {
        path: ':id',
        element: <ItemDetailPage />,
        loader: async ({ params }) => {
          const { id } = params
          // Fetch item details using the id
          // For example: const itemData = await fetchItemDetails(id);
          return { id } // Return the data that the component needs
        }
      }
    ]
  }
])
export default router
