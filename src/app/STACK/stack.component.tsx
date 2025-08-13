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
          <div className={styles['icon-wrapper']}>
          <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <p>Languages</p>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <p>Frameworks</p>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <p>Tools</p>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>

          <div className={styles['icon-wrapper']}>
            <img src={ironManIcon} alt="Iron Man icon" />
            <p className={styles['element-name']} >
              Iron Man
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default StackComponent;
