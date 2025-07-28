import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { autismServicesConfig } from '../../data/pageConfigs/autismServicesConfig';

const AutismServicesPage: React.FC = () => {
  return <ServiceLandingTemplate config={autismServicesConfig} />;
};

export default AutismServicesPage;
