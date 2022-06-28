import type { MindNode, IdProvider } from '.'

export const MindNodeBuilder = {
  build: (idProvider: IdProvider, text: string): MindNode => {
    return {
      id: idProvider.run(),
      text,
    }
  }
}
