import { Bubble } from "../../models/Bubble";
import styles from "./styles.module.scss";

export type MockMindNode = Readonly<{
  text: string;
}>;

type ProtoPageLayoutProps = Readonly<{
  mindNodes: MockMindNode[];
}>;
export const ProtoPageLayout = ({ mindNodes }: ProtoPageLayoutProps) => (
  <>
    {mindNodes.map((mindNode) => (
      <div className={styles.bubbleWrapper}>
        <Bubble text={mindNode.text} />
      </div>
    ))}
  </>
);
