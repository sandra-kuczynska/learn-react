import styles from "./Items.module.css";
import { IoMdTrash } from "react-icons/io";

const Items = ({ register, errors }) => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.smallLabel}>
          <label>Name</label>
        </div>
        <br />
        <input
          className={styles.inputRegular}
          {...register("nameItem", { required: true })}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.smallLabel}>
          <label>Amount</label>
        </div>
        <br />
        <input
          className={styles.inputRegular}
          {...register("amount", { required: true })}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.smallLabel}>
          <label>Unit</label>
        </div>
        <br />
        <input
          className={styles.inputRegular}
          {...register("unit", { required: true })}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.smallLabel}>
          <label>Tax</label>
        </div>
        <br />
        <input
          className={styles.inputRegular}
          {...register("tax", { required: true })}
        />
      </div>

      <div className={styles.item}>
        <div className={styles.smallLabel}>
          <label>Price</label>
        </div>
        <br />
        <input
          className={styles.inputRegular}
          {...register("price", { required: true })}
        />
      </div>

      <div className={styles.itemTrash}>
        <IoMdTrash />
      </div>
    </div>
  );
};

export default Items;
