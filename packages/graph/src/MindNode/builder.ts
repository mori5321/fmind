import type { MindNode, IdProvider } from ".";

export const MindNodeBuilder = {
  build: (idProvider: IdProvider): MindNode => {
    return {
      id: idProvider.run(),
    }
  }
}
