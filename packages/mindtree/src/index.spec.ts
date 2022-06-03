import { MindNode, MindTree } from ".";

describe('MindNode', () => {
  describe('#getContent', () => {
    it('returns content', () => {
      const node = new MindNode("Hello World");
      expect(node.getContent()).toEqual("Hello World")
    })
  })
})

describe('MindTree', () => {
  describe('#addNode', () => {
    let tree: MindTree;
    beforeEach(() => {
      tree = new MindTree(
        { nodePaddingX: 0, nodePaddingY: 0 }
      )
    })

    it('when addNode 3 times, children length should be 3', () => {
      tree.addNode(new MindNode('Hello World 1'));
      tree.addNode(new MindNode('Hello World 2'));
      tree.addNode(new MindNode('Hello World 3'));

      const length = tree.getNodes().length
      expect(length).toEqual(3)
    })
  })
})
