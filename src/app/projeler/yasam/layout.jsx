import styles from "../styles.module.css";

const ProjeLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>Livingroom Design</div>
          <p className="text-white italic opacity-75">İstanbul, Türkiye</p>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Residential Project</div>
          <p className="text-white italic opacity-75">Eylül, 2023</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjeLayout;
