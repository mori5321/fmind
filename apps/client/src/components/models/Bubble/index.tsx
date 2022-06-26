import styles from "./styles.module.scss";
import { compose } from "../../../styles/utils";

type BubbleProps = Readonly<{
  text: string;
}>;
const Bubble = ({ text }: BubbleProps) => (
  <div className={compose(styles.bubble, styles.bubbleSm)}>
    <span className={styles.bubbleText}>{text}</span>
  </div>
);

export { Bubble };
