type MindSettings = Readonly<{
  nodePaddingX: number,
  nodePaddingY: number,
}>

export class MindTree {
  #settings: MindSettings
  #nodes: MindNode[]

  constructor(settings: MindSettings) {
    this.#settings = settings
    this.#nodes = []
  }

  addNode(node: MindNode): void {
    this.#nodes.push(node)
  }

  getNodes(): MindNode[] {
    return this.#nodes
  }

  getSettings(): MindSettings {
    return this.#settings
  }
}

export class MindNode {
  #content: string
  // parentId

  constructor(content: string) {
    this.#content = content
  }

  getContent(): string {
    return this.#content
  }
}

