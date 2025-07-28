# Service Landing Template

A reusable template component for creating consistent, professional service landing pages with beautiful animations and cohesive design.

## Features

- **Consistent Design**: All pages maintain the same professional lavender-themed design
- **Beautiful Animations**: Sophisticated scroll animations including the signature pink card animation
- **Fully Configurable**: Easy to customize content while maintaining design consistency
- **Mobile Responsive**: Optimized for all screen sizes
- **TypeScript Support**: Full type safety with comprehensive interfaces

## Usage

### 1. Create a Configuration File

Create a new configuration file in `src/data/pageConfigs/`:

```typescript
// src/data/pageConfigs/yourServiceConfig.ts
import { ServicePageConfig } from '../../components/templates/ServiceLandingTemplate';
import { IconYourIcon } from '@tabler/icons-react';
import image from '../../assets/images/CarolineSmile.jpg';

export const yourServiceConfig: ServicePageConfig = {
  hero: {
    title: "Your Service Title",
    subtitle: "in Cambridge, Mass.",
    features: [
      {
        title: 'Feature 1',
        description: 'Description of your first feature',
        icon: IconYourIcon,
      },
      // ... more features
    ],
    ctaText: "Your CTA Text",
    ctaSubtext: "Your subtext here"
  },
  about: {
    eyebrow: "About Dr. Caroline Fu",
    title: "Your about title",
    content: [
      "First paragraph of content...",
      "Second paragraph of content..."
    ],
    showDoctorCard: true,
    doctorImage: image,
    buttonText: "Your Button Text"
  },
  commitment: {
    title: "Your Commitment Section Title",
    subtitles: [
      "First subtitle",
      "Second subtitle",
      "Third subtitle"
    ],
    features: [
      {
        icon: IconYourIcon,
        title: 'Feature Title',
        description: 'Feature description...',
      },
      // ... more features
    ],
    buttonText: "Your Button Text"
  },
  services: {
    title: "Your Services Section Title",
    options: [
      {
        title: "Service Option 1",
        description: "Description of your service option",
        imageUrl: "https://your-image-url.com"
      },
      // ... more service options
    ]
  }
};
```

### 2. Create Your Page Component

```typescript
// src/pages/YourService/YourServicePage.tsx
import React from 'react';
import ServiceLandingTemplate from '../../components/templates/ServiceLandingTemplate';
import { yourServiceConfig } from '../../data/pageConfigs/yourServiceConfig';

const YourServicePage: React.FC = () => {
  return <ServiceLandingTemplate config={yourServiceConfig} />;
};

export default YourServicePage;
```

## Configuration Options

### ServicePageConfig Interface

```typescript
interface ServicePageConfig {
  hero: {
    title: string;           // Main hero title
    subtitle: string;        // Hero subtitle
    features: FeatureCard[]; // Array of feature cards (max 4)
    ctaText: string;         // Call-to-action button text
    ctaSubtext: string;      // Text below CTA button
  };
  about: {
    eyebrow: string;         // Small text above title
    title: string;           // About section title
    content: string[];       // Array of paragraphs
    showDoctorCard: boolean; // Whether to show the pink doctor card
    doctorImage?: string;    // Image for doctor card (if shown)
    buttonText: string;      // About section button text
  };
  commitment: {
    title: string;           // Commitment section title
    subtitles: string[];     // Array of subtitle lines
    features: CommitmentFeature[]; // Array of commitment features (max 3)
    buttonText: string;      // Commitment section button text
  };
  services: {
    title: string;           // Services section title
    options: ServiceOption[]; // Array of service options (max 3)
  };
}
```

## Animation Features

- **Hero Cards**: Animate in with staggered timing
- **Pink Doctor Card**: Slides in from the right and stays permanently visible
- **Commitment Features**: All animate in simultaneously
- **Scroll Animations**: Sophisticated blur and transform effects
- **Hover Effects**: Interactive card hover animations

## Styling

The template uses a cohesive lavender gradient theme with:
- Hero Section: `#fafafa → #f8f5ff → #fafafa`
- About Section: `#f8f5ff → #fafaf9 → #f8f5ff`
- Features Section: `#fafaf9 → #f8f5ff → #fafaf9`
- Services Section: `#f8f5ff → #fafafa → #f8f5ff`

## Examples

See existing configurations:
- `src/data/pageConfigs/childPsychiatryConfig.ts`
- `src/data/pageConfigs/adultPsychiatryConfig.ts`
- `src/data/pageConfigs/childTherapyConfig.ts`

## Adding New Pages

1. Create a configuration file in `src/data/pageConfigs/`
2. Create a page component that uses the template
3. Add routing in your router configuration
4. That's it! Your new page will have all the animations and styling automatically
