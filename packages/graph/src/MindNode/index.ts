import { MindNodeBuilder } from "./builder";
import { NodeIdProvider } from "./provider";

export interface IdProvider {
  run: () => string
}

export type MindNode = Readonly<{
  id: string,
  text: string,
}>;

const setText = (mindNode: MindNode, text: string): MindNode => {
  return {
    ...mindNode,
    text, 
  }
}

export const MindNode = {
  build: () => MindNodeBuilder.build(NodeIdProvider),
  setText,
}

