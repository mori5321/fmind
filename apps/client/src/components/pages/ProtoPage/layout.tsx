import { MindNode } from '@fmind/graph'

import { Bubble } from '../../models/Bubble'
import styles from './styles.module.scss'

type ProtoPageLayoutProps = Readonly<{
  mindNodes: MindNode[];
  handleClickAdd: () => void;
}>;
export const ProtoPageLayout = ({
  mindNodes,
  handleClickAdd,
}: ProtoPageLayoutProps) => (
  <>
    {mindNodes.map((mindNode) => (
      <div className={styles.bubbleWrapper}>
        <Bubble text={mindNode.text} />
      </div>
    ))}
    <button onClick={handleClickAdd}>Add</button>
  </>
)
