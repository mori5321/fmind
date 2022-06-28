import { pipe } from 'fp-ts/lib/function'

import { MindNode } from '../MindNode'

import { MindGraph } from '.'


describe('build', () => {
  it('returns MindGraph with its nodes empty', () => {
    const graph = MindGraph.build()

    expect(graph.nodes.length).toEqual(0)
  })
})

describe('addNode', () => {
  it('increments the length of its nodes', () => {
    const graph = MindGraph.build()
    
    const node1 = MindNode.build()
    const node2 = MindNode.build()

    const graphUpdated = pipe(
      graph,
      MindGraph.addNode(node1),
      MindGraph.addNode(node2)
    )

    expect(graphUpdated.nodes.length).toEqual(2)
  })
})
