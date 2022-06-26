import styles from "./styles.module.scss";
import { compose } from "../../../styles/utils";

const Bubble = () => (
  <div className={compose(styles.bubble, styles.bubbleSm)}>
    <span className={styles.bubbleText}>Bubble</span>
  </div>
);

export { Bubble };
