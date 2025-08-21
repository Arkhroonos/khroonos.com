import styles from './motivation.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';

export function MotivationComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>About Me</h1>
        <img className={styles['icon']} src={IconsLibrary.Phone.icon1} alt="phone-icon" />
      </div>
      <div className={styles['content']}>
        <p className={styles['about-text']}>
          Hey ! Moi c’est Axel De 2013 à 2025, j’ai passé plus d’une décennie dans le commerce,
          entre Zara et Apple.
          <br />
          Ces années m’ont appris à garder mon sang-froid dans le rush, à écouter vraiment les
          besoins des gens (même quand ils ne savent pas eux-mêmes ce qu’ils veulent), et à trouver
          des solutions rapides. Mais surtout, elles m’ont donné le goût du contact humain et de la
          transmission.
          <br />
          Aujourd’hui, je mets cette énergie dans une nouvelle aventure : le développement web.
          Curieux depuis toujours (j’étais ce gamin qui démontait l’ordinateur familial juste pour
          voir comment ça marche), j’ai décidé de transformer cette passion en métier.
          <br />
          Je me forme en HTML, CSS, JavaScript, TypeScript, React et Angular, avec pour objectif de
          devenir développeur Full-Stack. Je recherche une alternance pour apprendre encore plus
          vite, dans un vrai environnement pro, entouré de personnes plus expérimentées que moi.
          <br />
          Mon approche ? Apprendre, créer, partager. Je crois en la progression continue, en la
          curiosité comme moteur et en l’humour comme meilleur allié quand les choses se
          compliquent.
          <br />
          En résumé : un ancien vendeur qui a troqué son badge pour des lignes de code, un futur dev
          motivé, passionné et prêt à construire de belles choses (et à en rire quand ça bug).
        </p>
      </div>
    </div>
  );
}

export default MotivationComponent;
