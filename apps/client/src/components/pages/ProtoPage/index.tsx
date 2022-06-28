import { useMindNodes } from './hooks'
import { ProtoPageLayout } from './layout'

const ProtoPage = () => {
  const { mindNodes, addNewNode } = useMindNodes()

  const handleClickAdd = addNewNode

  return (
    <ProtoPageLayout mindNodes={mindNodes} handleClickAdd={handleClickAdd} />
  )
}

export { ProtoPage }
