import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer>
        <ul className='contact'>
            <li>EMAIL</li>
            <li>NUMERO</li>
        </ul>
        <ul className='acces-rapide'>
            <li><Link to="/nous-decouvrir">{t('nousdecouvrir')}</Link></li>
            <li><Link to="/nos-valeurs">{t('nosvaleurs')}</Link></li>
            <li><Link to="/equipe">{t('equipe')}</Link></li>
            <li><Link to="/consulting">{t('consulting')}</Link></li>
            <li><Link to="/formation">{t('formation')}</Link></li>
            <li><Link to="/drone">{t('drone')}</Link></li>
            <li><Link to="/construction">{t('construction')}</Link></li>
            <li><Link to="/industrie">{t('industrie')}</Link></li>
            <li><Link to="/energie">{t('energie')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/actualites">{t('actualites')}</Link></li>
        </ul>
        <ul className='reseaux'>
            <li>LINKEDIN</li>
            <li>INSTAGRAM</li>           
        </ul>
    </footer>
  );
};

export default Footer;