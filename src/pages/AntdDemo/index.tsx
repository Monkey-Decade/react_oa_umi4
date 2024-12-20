import AntInput from '@/components/Ant/AntInput';
import styles from './index.module.css';
const AntDemo = () => {
  return (
    <div>
      <div className={styles.searchContainer}>
        <h2 className={styles.title}>新页面</h2>
        <div className={styles.searchForm}>
          <AntInput label="输入框" />
        </div>
      </div>
    </div>
  );
};

export default AntDemo;
