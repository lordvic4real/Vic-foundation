import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ overflow: 'hidden scroll' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
