import styles from "../styles.module.css";

const ProjeLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>Micro House Design</div>
          <p className="text-white italic opacity-75">İstanbul, Türkiye</p>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Residential Project</div>
          <p className="text-white italic opacity-75">Kasım, 2020</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjeLayout;
