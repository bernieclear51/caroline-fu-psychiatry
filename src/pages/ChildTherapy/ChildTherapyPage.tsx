import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { childTherapyConfig } from '../../data/pageConfigs/childTherapyConfig';

const ChildTherapyPage: React.FC = () => {
  return <ServiceLandingTemplate config={childTherapyConfig} />;
};

export default ChildTherapyPage;
