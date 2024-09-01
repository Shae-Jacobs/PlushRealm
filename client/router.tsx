/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Posts from './components/Posts'
import Layout from './components/Layout'
import UserProfile from './components/UserProfile'
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={<Posts />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Route>,
  ]),
)

export default router
