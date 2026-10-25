import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ROUTES } from '@/lib/constants'
import { useAppDispatch } from '@/services/hooks'
import { loadCatalog } from '@/services/slices/places/placesSlice'

const CatalogPage = lazy(() => import('@/pages/CatalogPage'))
const DashboardPage = lazy(() => import('@/pages/DashboardPage'))
const DiaryPage = lazy(() => import('@/pages/DiaryPage'))
const FavouritesPage = lazy(() => import('@/pages/FavouritesPage'))
const KanbanPage = lazy(() => import('@/pages/KanbanPage'))
const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const PlacePage = lazy(() => import('@/pages/PlacePage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))
const UsersPage = lazy(() => import('@/pages/UsersPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export function AppRouter() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCatalog())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Загрузка...</p>}>
      <Routes>
        <Route path={ROUTES.CATALOG} element={<CatalogPage/>} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage/>} />
        <Route path={ROUTES.DIARY} element={<DiaryPage/>} />
        <Route path={ROUTES.FAVOURITES} element={<FavouritesPage/>} />
        <Route path={ROUTES.HOME} element={<HomePage/>} />
        <Route path={ROUTES.KANBAN} element={<KanbanPage/>} />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.PLACE} element={<PlacePage/>} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage/>} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage/>} />
        <Route path={ROUTES.USERS} element={<UsersPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
