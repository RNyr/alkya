import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t, i18n } = useTranslation('header');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div>
        <div className={styles.languageButtons}>
          <button onClick={() => changeLanguage('fr')}>FR</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>

      <nav>
        <ul className={`${styles.quickMenu} nav-menu`}>
          <li className="nav-item">
            <button type="button" className="nav-link-button">{t('legroupe')}</button>
            <ul className="submenu">
              <li><a href="/nous-decouvrir">{t('nousdecouvrir')}</a></li>
              <li><a href="/nos-valeurs">{t('nosvaleurs')}</a></li>
              <li><a href="/equipe">{t('equipe')}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link-button">{t('activites')}</button>
            <ul className="submenu">
              <li><a href="/consulting">{t('consulting')}</a></li>
              <li><a href="/formation">{t('formation')}</a></li>
              <li><a href="/drone">{t('drone')}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link-button">{t('secteurs')}</button>
            <ul className="submenu">
              <li><a href="/construction">{t('construction')}</a></li>
              <li><a href="/industrie">{t('industrie')}</a></li>
              <li><a href="/energie">{t('energie')}</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="/contact">{t('contact')}</a></li>
          <li className="nav-item"><a href="/actualites">{t('actualites')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;