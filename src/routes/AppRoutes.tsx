import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ServicesPage from '../pages/Services/ServicesPage';
import AdultPsychiatryPage from '../pages/AdultPsychiatry/AdultPsychiatryPage';
import AdultTherapyPage from '../pages/AdultTherapy/AdultTherapyPage';
import ChildPsychiatryPage from '../pages/ChildPsychiatry/ChildPsychiatryPage';
import ChildTherapyPage from '../pages/ChildTherapy/ChildTherapyPage';
import ADHDServicesPage from '../pages/ADHDServices/ADHDServicesPage';
import AutismServicesPage from '../pages/AutismServices/AutismServicesPage';
import NewPatientPage from '../pages/NewPatient/NewPatientPage';
import ConciergePage from '../pages/Concierge/ConciergePage';
import ContactPage from '../pages/Contact/ContactPage';
import InsurancePage from '../pages/Insurance/InsurancePage';
import PortalPage from '../pages/Portal/PortalPage';
import ChinesePage from '../pages/Chinese/ChinesePage';
import SEOManager from '../admin/SEOManager';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/adult-psychiatry" element={<AdultPsychiatryPage />} />
      <Route path="/adult-therapy" element={<AdultTherapyPage />} />
      <Route path="/child-psychiatry" element={<ChildPsychiatryPage />} />
      <Route path="/child-therapy" element={<ChildTherapyPage />} />
      <Route path="/adhd-services" element={<ADHDServicesPage />} />
      <Route path="/autism-services" element={<AutismServicesPage />} />
      <Route path="/new-patient" element={<NewPatientPage />} />
      <Route path="/concierge" element={<ConciergePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/portal" element={<PortalPage />} />
      <Route path="/chinese" element={<ChinesePage />} />
      <Route path="/admin/seo" element={<SEOManager />} />
    </Routes>
  );
};

export default AppRoutes;
