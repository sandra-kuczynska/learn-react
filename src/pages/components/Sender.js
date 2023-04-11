import styles from "./Sender.module.css";

const Sender = ({ register, errors }) => {
  return (
    <div className={styles.sender}>
      <p className={styles.paragraph}>Sender</p>

      <div className={styles.smallLabel}>
        <label>Company name</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("companyNameSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>City</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("citySender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Street</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("streetSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Postcode</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("postcodeSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>NIP</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("nipSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Tel.</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("telSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Email</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("emailSender", { required: true })}
      />

      <div className={styles.smallLabel}>
        <label>Bank account</label>
      </div>
      <br />
      <input
        className={styles.inputRegular}
        {...register("bankAccountSender", { required: true })}
      />
    </div>
  );
};

export default Sender;
