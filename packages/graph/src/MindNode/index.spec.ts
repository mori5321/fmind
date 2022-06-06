import { NodeIdProvider } from "./provider";
import { MindNodeBuilder } from './builder'

describe('MindNode', () => {
  describe('id', () => {
    it('has prefix "node"', () => {
      const node = MindNodeBuilder.build(NodeIdProvider);
      expect(node.id.substring(0, 5)).toEqual('node-')
    })

    it('has 13 letters', () => {
      const node = MindNodeBuilder.build(NodeIdProvider);
      // 13 = 4(node) + 1 (-) + 8(nanoid)
      expect(node.id.length).toEqual(13)
    })
  })
})


// want parse Text into MindGraph
// Text -> MindGraph
// - English
//   - Greeting
//     - Hello
//     - Good Morning
//     - Good Evening
//   - Fruits
//     - Apple
//     - Banana
