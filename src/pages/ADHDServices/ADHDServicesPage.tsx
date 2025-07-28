import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { adhdServicesConfig } from '../../data/pageConfigs/adhdServicesConfig';

const ADHDServicesPage: React.FC = () => {
  return <ServiceLandingTemplate config={adhdServicesConfig} />;
};

export default ADHDServicesPage;
