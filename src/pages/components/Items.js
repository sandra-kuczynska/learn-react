import styles from "./Items.module.css";
import { IoMdTrash } from "react-icons/io";
import { useState } from "react";

const Items = ({ register, errors, props }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    amount: "",
    unit: "",
    tax: "",
    price: "",
  });

  const itemList = [];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const btnHandler = (event) => {
    itemList.push(inputValues);
    console.log(itemList);
  };

  return (
    <>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.smallLabel}>
            <label>Name</label>
          </div>
          <br />
          <input
            className={styles.inputRegular}
            name="name"
            type="text"
            onChange={handleChange}
            // {...register("nameItem", { required: true })}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.smallLabel}>
            <label>Amount</label>
          </div>
          <br />
          <input
            name="amount"
            className={styles.inputRegular}
            type="text"
            onChange={handleChange}
            // {...register("amount", { required: true })}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.smallLabel}>
            <label>Unit</label>
          </div>
          <br />
          <input
            name="unit"
            className={styles.inputRegular}
            type="text"
            onChange={handleChange}
            // {...register("unit", { required: true })}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.smallLabel}>
            <label>Tax</label>
          </div>
          <br />
          <input
            name="tax"
            className={styles.inputRegular}
            type="text"
            onChange={handleChange}
            // {...register("tax", { required: true })}
          />
        </div>

        <div className={styles.item}>
          <div className={styles.smallLabel}>
            <label>Price</label>
          </div>
          <br />
          <input
            name="price"
            className={styles.inputRegular}
            type="text"
            onChange={handleChange}
            // {...register("price", { required: true })}
          />
        </div>

        <div className={styles.itemTrash}>
          <IoMdTrash />
        </div>
      </div>

      <div className={styles.addItem}>
        <button onClick={btnHandler} className={styles.buttonRegular}>
          ADD ITEM
        </button>
      </div>
    </>
  );
};

export default Items;
