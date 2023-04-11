import styles from "./invoice.module.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const userData = [];

const Invoice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userData.push(data);
    console.log(userData);
  };

  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        <div className={styles.noDates}>
          <div className={styles.wrapperNoDates}>
            <div className={styles.no}>
              <div className={styles.label}>
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

        <div className={styles.saveCancel}>
          <div className={styles.wrapperSaveCancel}>
            <Stack direction="row" spacing={2}>
              <button className={styles.buttonCancel}>Cancel</button>
              <input className={styles.inputSave} value="Save" type="submit" />
            </Stack>
          </div>
        </div>

        <div className={styles.recipient}>
          <p className={styles.paragraph}>Recipient</p>
        </div>
        <div className={styles.sender}>Sender</div>

        <div className={styles.info}>info</div>
        <div className={styles.addItem}>add</div>
      </div>
    </form>
  );
};

export default Invoice;
