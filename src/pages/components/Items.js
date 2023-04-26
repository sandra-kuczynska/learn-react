import styles from "./Items.module.css";
import { IoMdTrash } from "react-icons/io";
import { useState } from "react";

const initialItem = {
  Name: "",
  Amount: "",
  Unit: "",
  Tax: "",
  Price: "",
};

const Items = ({ register, errors, setValue, getValues }) => {
  const [inputValues, setInputValues] = useState({});
  const [itemsList, setItemsList] = useState([initialItem]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const btnHandler = () => {
    setItemsList((state) => {
      const newState = [...state, initialItem];
      setValue("items", [...getValues().items, initialItem]);
      return newState;
    });
  };

  return (
    <>
      <div className={styles.items}>
        {itemsList.map((row, itemIndex) => {
          return (
            // import fragment
            <>
              {Object.entries(row).map(([key, value], index) => {
                return (
                  <div className={styles.item} key={index}>
                    <div className={styles.smallLabel}>
                      <label>{key}</label>
                    </div>
                    <br />
                    {/* +state */}
                    <input
                      {...register(`items[${itemIndex}].[${key}]`, {
                        required: true,
                      })}
                      className={styles.inputRegular}
                    />
                  </div>
                );
              })}
              <div className={styles.itemTrash}>
                <IoMdTrash />
              </div>
            </>
          );
        })}
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
