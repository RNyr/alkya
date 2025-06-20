import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import groupeImg from '../../assets/images/group-card.jpg';
import activitesImg from '../../assets/images/activity-card.jpg';
import secteursImg from '../../assets/images/sectors-card.webp';

const HomeCard = () => {
    const { t } = useTranslation('homecard');
    
    return (
        <div className="home-card">
            {/* Carte 1 - Le Groupe */}
            <div className="group-card">
                <img src={groupeImg} alt="Le Groupe"/>
                <div>
                    <Link to="/nous-decouvrir" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('nousdecouvrir')}</Link>
                    <Link to="/nos-valeurs" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('nosvaleurs')}</Link>
                    <Link to="/equipe" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('equipe')}</Link>
                </div>
            </div>

            {/* Carte 2 - Activités */}
            <div className="activity-card">
                <img src={activitesImg} alt="Activités"/>
                <div>
                    <Link to="/consulting" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('consulting')}</Link>
                    <Link to="/formation" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('formation')}</Link>
                    <Link to="/drone" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('drone')}</Link>
                    </div>
            </div>

            {/* Carte 3 - Secteurs */}
            <div className="sectors-card">
                <img src={secteursImg} alt="Secteurs"/>
                <div>
                    <Link to="/construction" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('construction')}</Link>
                    <Link to="/industrie" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('industrie')}</Link>
                    <Link to="/energie" className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">{t('energie')}</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;