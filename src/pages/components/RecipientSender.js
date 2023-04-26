import styles from "./RecipientSender.module.css";

const Recipient = ({ register, errors }) => {
  return (
    <>
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

      {/* Sender */}
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
    </>
  );
};

export default Recipient;
