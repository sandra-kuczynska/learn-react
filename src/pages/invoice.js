import styles from "./invoice.module.css";
import { useForm } from "react-hook-form";

const Invoice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch());

  return (
    <div className={styles.grid}>
      <div className={styles.noDates}>
        <form className="grid__NoAndDates" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>No.</label>
            <input
              className="grid__input-no"
              defaultValue="20/04/23"
              {...register("inputNo", { required: true })}
            />
          </div>

          <div>
            <label>Created date</label>
            <input
              className="grid__date-from"
              defaultValue="20/04/2023"
              {...register("date-from", { required: true })}
            />

            <label>Valid until date</label>
            <input
              className="grid__date-to"
              defaultValue="20/10/2023"
              {...register("date-from", { required: true })}
            />

            {errors.inputNo && <span>This field is required</span>}
          </div>
        </form>
      </div>

      <div className={styles.saveCancel}>
        Cancel
        <input type="submit" value="Save" />
      </div>
      <div className={styles.recipient}>recipient</div>
      <div className={styles.sender}>sender</div>
      <div className={styles.info}>info</div>
      <div className={styles.addItem}>add</div>
    </div>
  );
};

export default Invoice;
