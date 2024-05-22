import { Route, Routes as BaseRoutes } from 'react-router-dom'
import HomePage from './pages/Home'
import DetailPage from './pages/ItemDetail'

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="" element={<HomePage />} />
      <Route path="/:id" element={<DetailPage />} />
    </BaseRoutes>
  )
}
