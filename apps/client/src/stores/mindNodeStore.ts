import { MindNode } from '@fmind/graph'
import { atom, AtomEffect, useRecoilState } from 'recoil'
      

let mockMindNodesStore = [
  MindNode.build('Hello'),
  MindNode.build('World'),
  MindNode.build('How Are You'),
]

const mindNodeRepository = {
  list: async () => {
    console.log('Repo: List')
    const mockResponse = new Promise<MindNode[]>((resolve, _) => {
      setTimeout(() => {
        resolve(mockMindNodesStore)
      }, 1000)
    })

    return mockResponse
  },
  deleteAll: async () => {
    console.log('Repo: deleteAll')
    mockMindNodesStore = []
  },
  store: async (mindNode: MindNode) => {
    console.log('Repo: store')
    mockMindNodesStore = [...mockMindNodesStore, mindNode] 
  },
  sync: async (mindNodes: MindNode[]) => {
    console.log('Repo: sync')
    mockMindNodesStore = mindNodes
  }
}


// const _effect: AtomEffect<MindNode[]> = ({ onSet }) => {
// 
// const fetchMindNodes = async () => { 
//   const mindNodes = await mindNodeRepository.list()
//   setSelf(mindNodes)
// }

// if (trigger === 'get') {
//   fetchMindNodes()
// }
//       
//   onSet((newValue, _, isReset) => {
//     isReset ? mindNodeRepository.deleteAll() : mindNodeRepository.sync(newValue)
//   })
// }

const effect: AtomEffect<MindNode[]> = ({ onSet }) => {
  onSet((newValue, _, isReset) => {
    isReset ? mindNodeRepository.deleteAll() : mindNodeRepository.sync(newValue)
  })
}


const mindNodesState = atom<MindNode[]>({
  key: 'mindNodeState',
  default: mindNodeRepository.list(),
  effects: [
    effect,
  ]
})


export type UseMindNodes = () => {
  mindNodes: MindNode[],
  addMindNode: () => void,
  clearMindNodes: () => void,
}

export const useMindNodes: UseMindNodes = () => {
  const [mindNodes, setMindNodes] = useRecoilState(mindNodesState)

  const addMindNode = () => {
    const newNode = MindNode.build('Yeah')
    setMindNodes([...mindNodes, newNode])
  }

  const clearMindNodes = () => setMindNodes([])

  return {
    mindNodes,
    addMindNode,
    clearMindNodes
  }
}
