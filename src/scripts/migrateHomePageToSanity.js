// Migration script to create home page content in Sanity
// Run this script with: node src/scripts/migrateHomePageToSanity.js

const { createClient } = require('@sanity/client');

// Sanity client configuration
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '9ko39o08',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function migrateHomePage() {
  console.log('Creating home page content in Sanity...');
  
  const homePageDoc = {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home Page',
    
    heroSection: {
      enabled: true,
      title: 'Adult & Child Psychiatry',
      subtitle: 'in Cambridge, Mass.',
      description: 'Personalized therapy & med management. <br /> <span style="color: #A51C30">Harvard</span> & <span style="color: #3E8EDE">Tufts</span> instructor. <br /> Now accepting new patients.',
      buttonText: 'Request Appointment',
      buttonLink: '/new-patient',
      subtext: 'In-person and virtual appointments available. <br />Office located at 186 Hampshire Street, Cambridge, MA.',
      featureCards: [
        {
          title: 'Adult Psychiatry',
          link: '/adult-psychiatry',
          icon: 'brain',
        },
        {
          title: 'Child Psychiatry',
          link: '/child-psychiatry',
          icon: 'users',
        },
        {
          title: 'ADHD & Autism Care',
          link: '/adhd-services',
          icon: 'heart',
        },
        {
          title: '很高兴认识您',
          link: '/chinese',
          icon: 'stethoscope',
        },
      ],
    },
    
    servicesSection: {
      enabled: true,
      eyebrow: 'My Services',
      title: 'Comprehensive Mental Health Care',
      description: 'From evaluation to ongoing support, I provide a full spectrum of personalized psychiatric and therapeutic services.',
      services: [
        {
          title: 'Psychiatry',
          description: 'Comprehensive psychiatric care, combining medication management with therapeutic support.',
          features: [
            'Medication Management',
            'Diagnostic Evaluation',
            'Treatment Planning',
            'Ongoing Support'
          ],
          buttonText: 'Learn More',
          link: '/adult-psychiatry',
          icon: 'brain',
        },
        {
          title: 'Therapy',
          description: 'Evidence-based therapy to help adults navigate life challenges and improve mental wellness.',
          features: [
            'CBT, ACT, DBT & more',
            'Individualized Therapy Plans',
            'ADHD & Mood Disorders',
            'Asian American Mental Health'
          ],
          buttonText: 'Learn More',
          link: '/adult-therapy',
          icon: 'heart',
        },
        {
          title: 'Child Therapy & Psychiatry',
          description: 'Specialized mental health services for children and adolescents, supporting healthy development.',
          features: [
            'Child & Teen Assessment',
            'ADHD Evaluation',
            'Personalized Therapy',
            'Family Collaboration'
          ],
          buttonText: 'Learn More',
          link: '/child-psychiatry',
          icon: 'mood-happy',
        },
      ],
    },
    
    aboutSection: {
      enabled: true,
      eyebrow: 'About Dr. Caroline Fu',
      title: 'Your mental health partner',
      mainDescription: 'I believe in treating the whole person, not just symptoms. My approach combines evidence-based psychiatric care with genuine partnership, creating a safe space where you can explore challenges and develop lasting strategies for wellness.',
      secondaryDescription: 'Moving towards a holistic, lasting shift in mindset or mental health requires time and patience. At my practice, interactions with your physician are never rushed. Your health and personal growth are always prioritized over time constraints.',
      buttonText: 'Learn About Dr. Fu',
      buttonLink: '/about',
      imageCardTitle: 'Personalized psychiatry?',
      imageCardFeatures: [
        'Access to Dr. Fu by phone.',
        'Same-day appointments.',
        'Therapy & Medications in 1 visit.',
        'Flexible scheduling to fit your life.'
      ],
      imageCardButtonText: 'Request Appointment',
      imageCardButtonLink: '/new-patient',
    },
    
    virtualInPersonSection: {
      enabled: true,
      eyebrow: 'Treatment Options',
      title: 'Virtual & In-Person Care',
      description: 'Choose the format that works best for your lifestyle and comfort level.',
      options: [
        {
          title: 'Virtual Sessions',
          description: 'Convenient online psychiatric care from the comfort of your home. Secure video sessions with flexible scheduling to fit your work and life.',
          icon: 'users',
        },
        {
          title: 'In-Person Visits',
          description: 'Face-to-face psychiatric care in Cambridge. Comfortable, private office setting with traditional therapeutic environment.',
          icon: 'stethoscope',
        },
      ],
      buttonText: 'Request Appointment',
      buttonLink: '/new-patient',
    },
    
    ctaSection: {
      enabled: true,
      title: 'Ready to Begin Your Journey?',
      description: 'Take the first step towards better mental health. Schedule a consultation today.',
      primaryButtonText: 'Schedule Appointment',
      primaryButtonLink: '/new-patient',
      secondaryButtonText: 'Contact Us',
      secondaryButtonLink: '/contact',
    },
  };

  try {
    await client.createOrReplace(homePageDoc);
    console.log('✅ Home page content created successfully');
  } catch (error) {
    console.error('❌ Error creating home page content:', error);
  }
}

async function runMigration() {
  console.log('Starting home page migration to Sanity...\n');
  
  // Check if we have a write token
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is not set in your environment variables.');
    return;
  }

  try {
    await migrateHomePage();
    
    console.log('\n✅ Migration completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Go to your Sanity Studio (http://localhost:3333)');
    console.log('2. Navigate to "Home Page" document');
    console.log('3. Upload images for Hero and About sections');
    console.log('4. Update your React components to fetch from Sanity');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
  }
}

// Run the migration
runMigration();
