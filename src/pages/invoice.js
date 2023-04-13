import styles from "./invoice.module.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import Stack from "@mui/material/Stack";
import NoDates from "./components/NoDates";
import RecipientSender from "./components/RecipientSender";
import Items from "./components/Items";

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
        <NoDates register={register} errors={errors} />

        <div className={styles.saveCancel}>
          <div className={styles.wrapperSaveCancel}>
            <Stack direction="row" spacing={2}>
              <button className={styles.buttonRegular}>Cancel</button>
              <input className={styles.inputSave} value="Save" type="submit" />
            </Stack>
          </div>
        </div>

        <RecipientSender register={register} errors={errors} />

        <Items register={register} errors={errors} />
      </div>
    </form>
  );
};

export default Invoice;
