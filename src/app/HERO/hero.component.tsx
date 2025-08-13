import styles from './hero.component.module.scss';

export function HeroComponent() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HeroComponent!</h1>
    </div>
  );
}

export default HeroComponent;
