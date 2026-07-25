import { Outlet } from 'react-router-dom'

/** Base layout for public routes such as the landing and login pages. */
function MainLayout() {
  return <Outlet />
}

export default MainLayout
