import styles from "./invoice.module.css";

const Invoice = () => {
  return (
    <div className={styles.grid}>
      <div className="grid__element grid__element--1">1</div>
      <div className="grid__element grid__element--2">2</div>
      <div className="grid__element grid__element--3">3</div>
      <div className="grid__element grid__element--4">4</div>
      <div className="grid__element grid__element--5">5</div>
      <div className="grid__element grid__element--6">6</div>
      <div className="grid__element grid__element--7">7</div>
    </div>
  );
};

export default Invoice;
