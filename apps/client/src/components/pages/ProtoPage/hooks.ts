import { MindNode } from '@fmind/graph'
import { useCallback, useState } from 'react'

const mockData: MindNode[] = [
  MindNode.build('Hello'),
  MindNode.build('World'),
  MindNode.build('!!!'),
]

export type UseMindNodes = () => {
  mindNodes: MindNode[],
  addNewNode: () => void,
}
export const useMindNodes = () => {
  const [mindNodes, setMindNode] = useState(mockData)

  const addNewNode = useCallback(() => {
    const newNode = MindNode.build('Yeah')
    setMindNode([...mindNodes, newNode])
  }, [mindNodes])

  return {
    mindNodes,
    addNewNode
  }
}
