import { Route } from 'wouter'

import { ProtoPage } from './pages/ProtoPage'

const App = () => {
  return (
    <div>
      <Route path="/" component={ProtoPage} />
    </div>
  )
}

export { App }
