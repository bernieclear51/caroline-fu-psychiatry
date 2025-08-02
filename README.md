# Caroline Fu Psychiatry Website

A modern, responsive website for Dr. Caroline Fu's psychiatry practice, built with React, TypeScript, and Mantine UI, integrated with Sanity CMS.

## Features

- 🎨 Modern, clean design with a calming color palette
- 📱 Fully responsive across all devices
- ⚡ Fast performance with optimized images and code splitting
- 🔍 SEO optimized with meta tags and structured data
- ♿ Accessible design following WCAG guidelines
- 🎯 Service-specific landing pages
- 📝 Contact forms with validation
- 🗺️ Interactive location information
- 📄 Content management with Sanity CMS

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **UI Library:** Mantine v7
- **Routing:** React Router v6
- **Styling:** CSS Modules with PostCSS
- **Icons:** Tabler Icons
- **CMS:** Sanity v3
- **Build Tool:** Create React App
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Sanity account (for content management)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bernieclear51/caroline-fu-psychiatry.git
cd caroline-fu-psychiatry
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```
REACT_APP_SANITY_PROJECT_ID=9ko39o08
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_API_VERSION=2024-01-01
```

4. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Sanity Studio Setup

1. Navigate to the Sanity Studio directory:
```bash
cd caroline-fu-psychiatry
```

2. Install Sanity Studio dependencies:
```bash
npm install
```

3. Start Sanity Studio:
```bash
npm run dev
```

Sanity Studio will be available at `http://localhost:3333`.

**Important:** You need to configure CORS in your Sanity project settings. See `SANITY_SETUP_GUIDE.md` for detailed instructions.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── layout/      # Layout components (Header, Footer)
│   ├── ui/          # UI components (Hero, Cards, etc.)
│   └── templates/   # Page templates
├── pages/           # Page components
├── data/            # Static data and configurations
├── hooks/           # Custom React hooks
├── sanity/          # Sanity configuration and queries
├── styles/          # Global styles and CSS modules
├── assets/          # Images and other static assets
└── utils/           # Utility functions

caroline-fu-psychiatry/  # Sanity Studio
├── schemaTypes/     # Content schemas
├── sanity.config.ts # Sanity configuration
└── package.json     # Sanity dependencies
```

## Key Pages

- **Home** - Overview of services and practice information
- **Services** - Detailed service offerings
- **About** - Information about Dr. Caroline Fu
- **New Patient** - Information for new patients
- **Insurance** - Accepted insurance and payment information
- **Contact** - Contact form and location details
- **Adult Psychiatry** - Adult mental health services
- **Child Psychiatry** - Child and adolescent services
- **Therapy Services** - Individual therapy offerings

## Content Management

This website uses Sanity CMS for content management. Content types include:

- **Pages** - Dynamic page content
- **Services** - Service offerings and descriptions
- **Practice Info** - General practice information
- **Staff** - Staff profiles and credentials
- **SEO Settings** - Page-specific SEO metadata
- **Announcements** - Practice announcements and updates

## Deployment

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `REACT_APP_SANITY_PROJECT_ID`
   - `REACT_APP_SANITY_DATASET`
   - `REACT_APP_SANITY_API_VERSION`
3. Deploy

### Sanity Studio Deployment

```bash
cd caroline-fu-psychiatry
npm run deploy
```

This will deploy your Studio to `https://caroline-fu-psychiatry.sanity.studio`

## Development

### Running Tests

```bash
npm test
```

### Code Quality

```bash
npm run lint
npm run format
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

See `SANITY_SETUP_GUIDE.md` for detailed Sanity integration troubleshooting.

## License

This project is private and proprietary. All rights reserved.
