import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation('header');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div>
        <button onClick={() => changeLanguage('fr')}>FR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>

      <nav>
        <ul>
          <li>
            <button type="button">{t('legroupe')}</button>
            <ul>
              <li><Link to="/nous-decouvrir">{t('nousdecouvrir')}</Link></li>
              <li><Link to="/nos-valeurs">{t('nosvaleurs')}</Link></li>
              <li><Link to="/equipe">{t('equipe')}</Link></li>
            </ul>
          </li>
          <li>
            <button type="button">{t('activites')}</button>
            <ul>
              <li><Link to="/consulting">{t('consulting')}</Link></li>
              <li><Link to="/formation">{t('formation')}</Link></li>
              <li><Link to="/drone">{t('drone')}</Link></li>
            </ul>
          </li>
          <li>
            <button type="button">{t('secteurs')}</button>
            <ul>
              <li><Link to="/construction">{t('construction')}</Link></li>
              <li><Link to="/industrie">{t('industrie')}</Link></li>
              <li><Link to="/energie">{t('energie')}</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">{t('contact')}</Link></li>
          <li><Link to="/actualites">{t('actualites')}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;