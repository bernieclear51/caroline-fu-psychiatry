import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate/ServiceLandingTemplate';
import { childPsychiatryConfig } from '../../data/pageConfigs/childPsychiatryConfig';

const ChildPsychiatryPage: React.FC = () => {
  return <ServiceLandingTemplate config={childPsychiatryConfig} />;
};

export default ChildPsychiatryPage;
