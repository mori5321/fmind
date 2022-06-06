import { MindNodeBuilder } from "./builder";
import { NodeIdProvider } from "./provider";

export interface IdProvider {
  run: () => string
}

export type MindNode = Readonly<{
  id: string,
}>;

export const MindNode = {
  build: () => MindNodeBuilder.build(NodeIdProvider)
}
