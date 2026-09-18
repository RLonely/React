import styles from "./Likes.module.css";

import Heart from "@/assets/icons/heart.svg";

export const Likes = ({ likeCount }: { likeCount: number }) => {
  return (
    <div className={styles.likes}>
      <img src={Heart} alt="Heart" loading="lazy" />
      <div className={styles.likes__quantity}>{likeCount}</div>
    </div>
  );
};
