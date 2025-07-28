import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { adultPsychiatryConfig } from '../../data/pageConfigs/adultPsychiatryConfig';

const AdultPsychiatryPage: React.FC = () => {
  return <ServiceLandingTemplate config={adultPsychiatryConfig} />;
};

export default AdultPsychiatryPage;
