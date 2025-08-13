import styles from './stack.component.module.scss';
import ironManIcon from '../../assets/medias/iron-man-icons/icons8-iron-man-30.svg';

export function StackComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Stack:</h1>
        </div>
        <div className={styles['stack-icons-wrapper']}>
          <p>Basics</p>
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <p>Languages</p>
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <p>Frameworks</p>
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <p>Tools</p>
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />
          <img src={ironManIcon} alt="Iron Man icon" />

        </div>
      </div>
    </div>
  );
}

export default StackComponent;
