import styles from "../styles.module.css";

const ProjeLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}> Modern Lobby Design</div>
          <p className="text-white italic opacity-75">Karaköy - İstanbul, Türkiye</p>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Hotel Project</div>
          <p className="text-white italic opacity-75">Mayıs, 2021</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProjeLayout;
