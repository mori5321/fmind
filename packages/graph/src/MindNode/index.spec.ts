import { MindNode } from '.'

describe('MindNode', () => {
  describe('build', () => {
    describe('id', () => {
      it('has prefix "node"', () => {
        const node = MindNode.build()
        expect(node.id.substring(0, 5)).toEqual('node-')
      })

      it('has 13 letters', () => {
        const node = MindNode.build()
        // 13 = 4(node) + 1 (-) + 8(nanoid)
        expect(node.id.length).toEqual(13)
      })
    })

    describe('text', () => {
      it('has empty string', () => {
        const node = MindNode.build()
        expect(node.text).toBe('')
      })
    })
  })

  describe('setText', () => {
    it('should updates its text', () => {
      const node = MindNode.build()
      const newNode = MindNode.setText(node, 'Hello World')
      expect(newNode.text).toBe('Hello World')
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
