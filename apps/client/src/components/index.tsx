import { RecoilRoot } from 'recoil'
import { Route } from 'wouter'

import { ProtoPage } from './pages/ProtoPage'
import { UploadPage } from './pages/UploadPage'

const App = () => {
  return (
    <RecoilRoot>
      <Route path="/" component={ProtoPage} />
      <Route path="/upload" component={UploadPage} />
    </RecoilRoot>
  )
}

export { App }
