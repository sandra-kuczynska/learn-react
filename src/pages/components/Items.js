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
  const [itemsList, setItemsList] = useState([initialItem]);

  const btnHandler = () => {
    setItemsList((state) => {
      const newState = [...state, initialItem];
      setValue("items", [...getValues().items, initialItem]);
      console.log(itemsList);
      return newState;
    });
  };

  const handleRemoveItem = (e) => {
    setItemsList(itemsList.slice(itemsList.indexOf(e.target.name, 1)));
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
                <button
                  className={styles.buttonTrash}
                  onClick={handleRemoveItem}
                >
                  <IoMdTrash />
                </button>
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
