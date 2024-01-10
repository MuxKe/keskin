import styles from "../styles.module.css";

const ProjeLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>Wasaroll Restaurant Design</div>
          <p className="text-white italic opacity-75">İstanbul, Türkiye</p>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Food & Beverage Project</div>
          <p className="text-white italic opacity-75">Nisan, 2021</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjeLayout;
