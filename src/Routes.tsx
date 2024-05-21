import { Route, Routes as BaseRoutes } from 'react-router-dom'
import HomePage from './pages/Home'

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<HomePage />} />
    </BaseRoutes>
  )
}
