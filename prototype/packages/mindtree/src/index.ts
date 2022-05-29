type MindSettings = Readonly<{
  nodePaddingX: number,
  nodePaddingY: number,
}>

class MindTree {
  #settings: MindSettings
  #children: MindNode[]

  constructor(settings: MindSettings) {
    this.#settings = settings
    this.#children = []
  }

  addNode(node: MindNode): void {
    this.#children.push(node)
  }

  getChildren(): MindNode[] {
    return this.#children
  }

  getSettings(): MindSettings {
    return this.#settings
  }
}

class MindNode {
  #content: string
  #children: MindNode[]

  constructor(content: string) {
    this.#content = content
    this.#children = []
  }

  getContent(): string {
    return this.#content
  }

  getChildren(): MindNode[] {
    return this.#children
  }
}



