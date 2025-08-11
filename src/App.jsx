import './App.css'
import AppRoutes from './AppRoutes'
import Header from './components/Header'
import useScrollRestoration from './Hooks/useScrollRestoration'


function App() {
  useScrollRestoration()

  return (
    <>
    <div>
      <div>
      <Header />
      </div>
      <div>
        <AppRoutes />
      </div>
    </div>
    </>
  )
}

export default App
