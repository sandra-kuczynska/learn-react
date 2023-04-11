import styles from "./Recipient.module.css";

const Recipient = ({ register, errors }) => {
  return (
    <div className={styles.recipient}>
      <p className={styles.paragraph}>Recipient</p>

      <div className={styles.smallLabel}>
        <label>Company name</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("companyName", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>City</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("city", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Street</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("street", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Postcode</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("postcode", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>NIP</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("nip", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Tel.</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("tel", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Email</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("email", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Bank account</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("bankAccount", { required: true })}
      />
    </div>
  );
};

export default Recipient;
