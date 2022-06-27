import { ProtoPageLayout } from "./layout";
import { useMindNodes } from "./hooks";

const ProtoPage = () => {
  const { mindNodes, addNewNode } = useMindNodes();

  const handleClickAdd = addNewNode;

  return (
    <ProtoPageLayout mindNodes={mindNodes} handleClickAdd={handleClickAdd} />
  );
};

export { ProtoPage };
