import { MockMindNode, ProtoPageLayout } from "./layout";
// import { MindNode } from "@fmind/graph";

const ProtoPage = () => {
  const mockMindNodes: MockMindNode[] = [
    { text: "Hello" },
    { text: "World" },
    { text: "This is" },
  ];

  return <ProtoPageLayout mindNodes={mockMindNodes} />;
};

export { ProtoPage };
