import Header from './components/Header'
import Articles from './components/Articles'
import { ArticleContextProvider } from './store/ArticleContext'

/**
 * App Component
 * 
 * Root component of the application, responsible for rendering the Header and Articles components
 * wrapped inside the ArticleContextProvider.
 * App component rendering Header and Articles components within ArticleContextProvider.
 */
function App() {

  return (
    <ArticleContextProvider>
      <Header/>
      <Articles />
    </ArticleContextProvider>
  )
}

export default App
