import { Outlet } from 'react-router-dom'

import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <div>
        <div>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
