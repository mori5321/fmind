import { Suspense } from 'react'

import { TargetKey, useKey } from '../../../hooks/useKey'
import { useMindNodes } from '../../../stores/mindNodeStore'
import { Bubble } from '../../models/Bubble'
import styles from './styles.module.scss'

export const ProtoPageLayout = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <MindNodes />
    </Suspense>
  </>
)

const MindNodes = () => {
  const { mindNodes, addMindNode, clearMindNodes } = useMindNodes()
  useKey(TargetKey.Tab, (e) => {
    e.preventDefault()
    addMindNode()
  })

  const handleClickAdd = addMindNode
  const handleClickClear = clearMindNodes
  return (
    <>
      <div>
        {mindNodes.map((mindNode) => (
          <div key={mindNode.id} className={styles.bubbleWrapper}>
            <Bubble text={mindNode.text} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleClickAdd}>Add</button>
        <button onClick={handleClickClear}>Clear</button>
      </div>
    </>
  )
}
