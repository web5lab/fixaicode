import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Post from './pages/Post'
import { useTheme } from './hooks/useTheme'
import { useHashRoute } from './hooks/useHashRoute'

function App() {
  const { theme, toggle } = useTheme()
  const route = useHashRoute()

  return (
    <div className="flex min-h-screen flex-col">
      <Nav theme={theme} onToggleTheme={toggle} />
      <div className="flex-1">
        {route.page === 'post' ? <Post slug={route.slug} /> : <Home />}
      </div>
      <Footer />
    </div>
  )
}

export default App
