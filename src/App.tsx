import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const content = useRoutes(routes)

  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
        {content}
        </Suspense>
      </>
  )
}

export default App
