# Sanity Studio for Dr. Caroline Fu Psychiatry

This is the Sanity Studio for managing content on the Dr. Caroline Fu Psychiatry website.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Sanity Studio on [http://localhost:3333](http://localhost:3333).

## Content Types

The following content types are available in the Sanity Studio:

- **Pages**: General website pages
- **Services**: Psychiatric and therapy services offered
- **Practice Information**: Contact details, address, hours, etc.
- **Staff**: Staff profiles and credentials
- **SEO Settings**: SEO metadata for each page
- **Announcements**: Practice announcements and updates

## Deployment

To deploy the Sanity Studio to a public URL:

```bash
npm run deploy
# or
yarn deploy
```

This will deploy the studio to `https://caroline-fu-psychiatry.sanity.studio/`.

## GraphQL API

To deploy the GraphQL API:

```bash
npm run deploy-graphql
# or
yarn deploy-graphql
```

## Project Details

- **Project ID**: 9ko39o08
- **Dataset**: production

## Connecting to the React Application

The React application connects to this Sanity Studio using the following environment variables:

```
REACT_APP_SANITY_PROJECT_ID=9ko39o08
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_TOKEN=your-token-here
```

These should be set in the `.env` file of the React application.

## Adding Content

1. Log in to the Sanity Studio
2. Select the content type you want to add
3. Click the "Create new" button
4. Fill in the required fields
5. Click "Publish" to make the content live on the website

## Editing Content

1. Log in to the Sanity Studio
2. Navigate to the content you want to edit
3. Make your changes
4. Click "Publish" to update the content on the website

## Content Modeling

The content models are defined in the `schemaTypes` directory. Each content type has its own schema file.

## Further Documentation

For more information on using Sanity, see the [Sanity documentation](https://www.sanity.io/docs).
