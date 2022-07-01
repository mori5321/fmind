import { RecoilRoot } from 'recoil'
import { Route } from 'wouter'

import { ProtoPage } from './pages/ProtoPage'

const App = () => {
  return (
    <RecoilRoot>
      <Route path="/" component={ProtoPage} />
    </RecoilRoot>
  )
}

export { App }
