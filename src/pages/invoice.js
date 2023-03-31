import styles from "./invoice.module.css";

const Invoice = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.noDates}>No. dates</div>
      <div className={styles.saveCancel}>Cancel Save</div>
      <div className={styles.recipient}>recipient</div>
      <div className={styles.sender}>sender</div>
      <div className={styles.info}>info</div>
      <div className={styles.addItem}>add-item</div>
    </div>
  );
};

export default Invoice;
