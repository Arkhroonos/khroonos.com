import styles from './stack.component.module.scss';

export function StackComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Stack</h1>
        </div>
      </div>
    </div>
  );
}

export default StackComponent;
