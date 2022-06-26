import { MockMindNode, ProtoPageLayout } from "./layout";

const ProtoPage = () => {
  const mockMindNodes: MockMindNode[] = [
    { text: "Hello" },
    { text: "World" },
    { text: "This is" },
  ];

  return <ProtoPageLayout mindNodes={mockMindNodes} />;
};

export { ProtoPage };
