import styles from './stack.component.module.scss';

export function StackComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1>StackComponent!</h1>
      </div>
    </div>
  );
}

export default StackComponent;
