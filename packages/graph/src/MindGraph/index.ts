import type { MindNode } from "../MindNode"

export type MindGraph = Readonly<{
  nodes: MindNode[]
}>;


const build = (): MindGraph => {
  return {
    nodes: []
  }
}

const addNode = (node: MindNode) => (graph: MindGraph): MindGraph => {
  return {
    ...graph,
    nodes: [
      ...graph.nodes,
      node,
    ]
  }
}

export const MindGraph = {
  build,
  addNode,
}
