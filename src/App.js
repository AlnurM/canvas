import { useEffect } from 'react';
import styles from './App.module.css'

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: document.body.scrollWidth,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>

      </div>
    </div>
  );
}

export default App;
