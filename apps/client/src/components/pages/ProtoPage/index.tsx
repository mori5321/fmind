import { useCallback, useEffect, useState } from 'react'
import { Snapshot, useGotoRecoilSnapshot, useRecoilSnapshot } from 'recoil'

import { useKey } from '../../../hooks/useKey'
import { ProtoPageLayout } from './layout'

type StateMap = {
  snapshot: Snapshot;
  release: () => void;
};

const ProtoPage = () => {
  // REFACTOR: This is Undo Prototype
  const [stateMaps, setStateMaps] = useState<StateMap[]>([])

  const snapshot = useRecoilSnapshot()

  let release: () => void
  try {
    release = snapshot.retain()
  } catch {
    alert('fail to retain')
    release = () => {
      alert('Release failed')
    }
  }

  const [currentStateMapIdx, setCurrentStateMapIdx] = useState(0)

  useEffect(() => {
    if (stateMaps.every((s) => s.snapshot.getID() !== snapshot.getID())) {
      const stateMap: StateMap = { snapshot, release }
      setStateMaps([...stateMaps, stateMap])
      setCurrentStateMapIdx(stateMaps.length)
    }

    return () => {
      for (const stateMap of stateMaps) {
        stateMap.release()
      }
    }
  }, [snapshot, setStateMaps, stateMaps])

  const gotoSnapshot = useGotoRecoilSnapshot()

  const goBack = useCallback(() => {
    if (stateMaps.length > 1) {
      const nextIdx = currentStateMapIdx - 1
      const nextStateMap = stateMaps[nextIdx]
      if (nextStateMap) {
        gotoSnapshot(nextStateMap.snapshot)
        setCurrentStateMapIdx(nextIdx)
      }
    }
  }, [stateMaps, currentStateMapIdx, setCurrentStateMapIdx])

  const handleClickBackspace = goBack

  useKey('Backspace', handleClickBackspace)
  // ^^^^ Undo ProtoType ^^^^

  return (
    <>
      <div>current {currentStateMapIdx}</div>
      <ProtoPageLayout />
    </>
  )
}

export { ProtoPage }
