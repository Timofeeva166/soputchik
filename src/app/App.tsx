import { AppRouter } from './providers/RouterProvider'
import { StoreProvider } from './providers/StoreProvider'
import '@/styles/globals.css'

function App() {
  return (
    <StoreProvider>
      <AppRouter/>
    </StoreProvider>
  )
}

export default App
