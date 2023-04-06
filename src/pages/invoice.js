import styles from "./invoice.module.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperNoDates}>
            <div className={styles.no}>
              <div className={styles.label}>
                <label>No.</label>
              </div>
              <br />
              <input
                className={styles.inputLong}
                defaultValue="20/04/23"
                {...register("no", { required: true })}
              />
            </div>

            <div className={styles.from}>
              <label>Created date</label>
              <br />
              <input
                defaultValue="20/04/2023"
                {...register("from", { required: true })}
              />
            </div>
            <div className={styles.to}>
              <label>Valid until date</label>
              <br />
              <input
                defaultValue="20/10/2023"
                {...register("to", { required: true })}
              />
            </div>

            {errors.no && <span>This field is required</span>}
          </div>
        </form>
      </div>

      <div className={styles.saveCancel}>
        <Stack direction="row" spacing={2}>
          <Button
            style={{
              backgroundColor: "gray",
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button variant="contained" disabled>
            Save
          </Button>
        </Stack>
      </div>
      <div className={styles.recipient}>recipient</div>
      <div className={styles.sender}>sender</div>
      <div className={styles.info}>info</div>
      <div className={styles.addItem}>add</div>
    </div>
  );
};

export default Invoice;
