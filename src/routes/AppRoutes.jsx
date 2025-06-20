import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import NousDecouvrirPage from '../pages/NousDecouvrirPage';
import NosValeursPage from '../pages/NosValeursPage';
import EquipePage from '../pages/EquipePage';
import ConsultingPage from '../pages/ConsultingPage';
import FormationPage from '../pages/FormationPage';
import DronePage from '../pages/DronePage';
import MissionPage from '../pages/MissionPage';
import ConstructionPage from '../pages/ConstructionPage';
import IndustriePage from '../pages/IndustriePage';
import EnergiePage from '../pages/EnergiePage';
import ContactPage from '../pages/ContactPage';
import ActualitesPage from '../pages/ActualitesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../components/layout/MainLayout';

const AppRoutes = () => (
     <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/nous-decouvrir" element={<NousDecouvrirPage />} />
            <Route path="/nos-valeurs" element={<NosValeursPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/formation" element={<FormationPage />} />
            <Route path="/drone" element={<DronePage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/industrie" element={<IndustriePage />} />
            <Route path="/energie" element={<EnergiePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/actualites" element={<ActualitesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
)

export default AppRoutes