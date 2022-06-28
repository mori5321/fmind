import { compose } from '../../../styles/utils'
import styles from './styles.module.scss'

type BubbleProps = Readonly<{
  text: string;
}>;
const Bubble = ({ text }: BubbleProps) => (
  <div className={compose(styles.bubble, styles.bubbleSm)}>
    <span className={styles.bubbleText}>{text}</span>
  </div>
)

export { Bubble }
