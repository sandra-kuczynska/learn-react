import styles from "./NoDates.module.css";

const noDates = ({ register, errors }) => {
  return (
    <div className={styles.noDates}>
      <div className={styles.wrapperNoDates}>
        <div className={styles.no}>
          <div>
            <label>No.</label>
          </div>
          <br />
          <input
            className={styles.inputRegular}
            defaultValue="20/04/23"
            {...register("no", { required: true })}
          />
        </div>

        <div className={styles.from}>
          <label>Created date</label>
          <br />
          <input
            className={styles.inputRegular}
            defaultValue="20/04/2023"
            {...register("from", { required: true })}
          />
        </div>
        <div className={styles.to}>
          <label>Valid until date</label>
          <br />
          <input
            className={styles.inputRegular}
            defaultValue="20/10/2023"
            {...register("to", { required: true })}
          />
        </div>

        {errors.no && <span>This field is required</span>}
      </div>
    </div>
  );
};

export default noDates;
