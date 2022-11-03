import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
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
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
