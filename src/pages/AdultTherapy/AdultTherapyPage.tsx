import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { adultTherapyConfig } from '../../data/pageConfigs/adultTherapyConfig';

const AdultTherapyPage: React.FC = () => {
  return <ServiceLandingTemplate config={adultTherapyConfig} />;
};

export default AdultTherapyPage;
