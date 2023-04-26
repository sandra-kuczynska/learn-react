import styles from "./invoice.module.css";
import { useForm } from "react-hook-form";
import * as React from "react";
import Stack from "@mui/material/Stack";
import NoDates from "./components/NoDates";
import RecipientSender from "./components/RecipientSender";
import Items from "./components/Items";
import ITEMLIST from "./components/Items";

const userData = [];

const Invoice = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    values: {
      // ksztalt formularza
      items: [""],
    },
  });

  const onSubmit = (data) => {
    userData.push(data);
    userData.push({ items: ITEMLIST });
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

        <Items
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
      </div>
    </form>
  );
};

export default Invoice;
