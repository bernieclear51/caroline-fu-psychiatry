import React, { useState } from 'react';
import {
  Container,
  Title,
  Tabs,
  Card,
  Stack,
  TextInput,
  Textarea,
  Button,
  Select,
  Group,
  Text,
  Badge,
  SimpleGrid,
  Box,
  Alert,
  Code,
} from '@mantine/core';
import { IconSeo, IconSettings, IconKey, IconEye, IconAlertCircle } from '@tabler/icons-react';
import { useSEO } from '../hooks/useSEO';

// Import your SEO data (in a real app, you'd fetch this from an API)
import pagesData from '../data/seo/pages.json';
import globalData from '../data/seo/global.json';

const SEOManager: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [activeTab, setActiveTab] = useState<string>('pages');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  // State for editable form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    canonical: '',
    keywords: ''
  });
  
  // Get current SEO data for preview
  const currentSEO = useSEO(selectedPage);
  
  // Update form data when page changes (but not when user is actively editing)
  React.useEffect(() => {
    if (!isEditing) {
      const pageData = (pagesData as any)[selectedPage] || {};
      setFormData({
        title: pageData.title || '',
        description: pageData.description || '',
        canonical: pageData.canonical || '/',
        keywords: (pageData.keywords || []).join(', ')
      });
    }
  }, [selectedPage, isEditing]);
  
  // Handle form field changes
  const handleFieldChange = (field: string, value: string) => {
    setIsEditing(true);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Handle page selection change
  const handlePageChange = (value: string) => {
    setIsEditing(false); // Reset editing flag when changing pages
    setSelectedPage(value);
  };
  
  // Handle save changes
  const handleSaveChanges = () => {
    // In a real implementation, this would save to a backend
    console.log('Saving changes for page:', selectedPage, formData);
    alert(`Changes saved for ${selectedPage}!\n\nNote: In a production environment, this would save to your backend/CMS.`);
  };

  // Available pages from your routes
  const availablePages = [
    { value: 'home', label: 'Home Page' },
    { value: 'about', label: 'About Page' },
    { value: 'services', label: 'Services Overview' },
    { value: 'adult-psychiatry', label: 'Adult Psychiatry' },
    { value: 'adult-therapy', label: 'Adult Therapy' },
    { value: 'child-psychiatry', label: 'Child Psychiatry' },
    { value: 'adhd-services', label: 'ADHD Services' },
    { value: 'autism-services', label: 'Autism Services' },
    { value: 'insurance', label: 'Insurance & Fees' },
    { value: 'contact', label: 'Contact' },
    { value: 'chinese', label: 'Chinese Page' },
    { value: 'new-patient', label: 'New Patient' },
  ];

  const GooglePreview = ({ seoData }: { seoData: any }) => (
    <Card withBorder p="md" style={{ maxWidth: 600 }}>
      <Stack gap="xs">
        <Text size="xs" c="dimmed">Google Search Preview</Text>
        <Box>
          <Text size="lg" c="blue" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            {seoData.title}
          </Text>
          <Text size="xs" c="green">
            {seoData.canonical}
          </Text>
          <Text size="sm" c="dimmed" lineClamp={2}>
            {seoData.description}
          </Text>
        </Box>
      </Stack>
    </Card>
  );

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Box ta="center">
          <Title order={1} mb="xs">SEO Management Tool</Title>
          <Text c="dimmed">Manage SEO settings for Dr. Caroline Fu's website</Text>
        </Box>

        <Tabs value={activeTab} onChange={(value) => value && setActiveTab(value)}>
          <Tabs.List>
            <Tabs.Tab value="pages" leftSection={<IconSeo size={16} />}>
              Page SEO
            </Tabs.Tab>
            <Tabs.Tab value="global" leftSection={<IconSettings size={16} />}>
              Global Settings
            </Tabs.Tab>
            <Tabs.Tab value="keywords" leftSection={<IconKey size={16} />}>
              Keywords
            </Tabs.Tab>
            <Tabs.Tab value="preview" leftSection={<IconEye size={16} />}>
              Preview
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="pages" pt="xl">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              <Card withBorder p="lg">
                <Stack gap="md">
                  <Title order={3}>Edit Page SEO</Title>
                  
                  <Select
                    label="Select Page"
                    value={selectedPage}
                    onChange={(value) => value && handlePageChange(value)}
                    data={availablePages}
                  />

                  <TextInput
                    label="Page Title"
                    description={`Recommended: 50-60 characters (${formData.title.length}/60)`}
                    value={formData.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    maxLength={60}
                  />

                  <Textarea
                    label="Meta Description"
                    description={`Recommended: 150-160 characters (${formData.description.length}/160)`}
                    value={formData.description}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                    maxLength={160}
                    rows={3}
                  />

                  <TextInput
                    label="Canonical URL"
                    value={formData.canonical}
                    onChange={(e) => handleFieldChange('canonical', e.target.value)}
                  />

                  <Group>
                    <Badge color="blue">
                      Priority: {(pagesData as any)[selectedPage]?.priority || 'N/A'}
                    </Badge>
                    <Badge color="green">
                      Change Freq: {(pagesData as any)[selectedPage]?.changeFreq || 'N/A'}
                    </Badge>
                  </Group>

                  <Button onClick={handleSaveChanges} color="lavender">Save Changes</Button>
                </Stack>
              </Card>

              <Card withBorder p="lg">
                <Stack gap="md">
                  <Title order={3}>Keywords</Title>
                  <Text size="sm" c="dimmed">
                    Current keywords for {availablePages.find(p => p.value === selectedPage)?.label}:
                  </Text>
                  <Group>
                    {((pagesData as any)[selectedPage]?.keywords || []).map((keyword: string, index: number) => (
                      <Badge key={index} variant="light">
                        {keyword}
                      </Badge>
                    ))}
                  </Group>
                  
                  <Textarea
                    label="Add/Edit Keywords"
                    description="Separate keywords with commas"
                    placeholder="psychiatrist Cambridge MA, mental health services, therapy"
                    value={formData.keywords}
                    onChange={(e) => handleFieldChange('keywords', e.target.value)}
                    rows={3}
                  />
                </Stack>
              </Card>
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="global" pt="xl">
            <Card withBorder p="lg" maw={800} mx="auto">
              <Stack gap="md">
                <Title order={3}>Global SEO Settings</Title>
                
                <TextInput
                  label="Site Name"
                  value={globalData.siteName}
                />

                <Textarea
                  label="Default Site Description"
                  value={globalData.siteDescription}
                  rows={3}
                />

                <TextInput
                  label="Site URL"
                  value={globalData.siteUrl}
                />

                <Title order={4} mt="lg">Medical Practice Information</Title>
                
                <SimpleGrid cols={2}>
                  <TextInput
                    label="Practice Name"
                    value={globalData.organization.name}
                  />
                  <TextInput
                    label="Phone Number"
                    value={globalData.organization.telephone}
                  />
                </SimpleGrid>

                <TextInput
                  label="Address"
                  value={`${globalData.organization.address.streetAddress}, ${globalData.organization.address.addressLocality}, ${globalData.organization.address.addressRegion}`}
                />

                <Button>Save Global Settings</Button>
              </Stack>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="keywords" pt="xl">
            <Card withBorder p="lg">
              <Stack gap="md">
                <Title order={3}>Keyword Analysis</Title>
                
                <Alert icon={<IconAlertCircle size={16} />} color="blue">
                  This section would integrate with keyword research tools and analytics in a full implementation.
                </Alert>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
                  <Card withBorder p="md">
                    <Stack gap="xs">
                      <Text fw={600}>High Priority Keywords</Text>
                      <Badge color="red">psychiatrist Cambridge MA</Badge>
                      <Badge color="red">mental health services</Badge>
                      <Badge color="red">child psychiatrist</Badge>
                    </Stack>
                  </Card>

                  <Card withBorder p="md">
                    <Stack gap="xs">
                      <Text fw={600}>Medium Priority</Text>
                      <Badge color="yellow">ADHD evaluation</Badge>
                      <Badge color="yellow">therapy Cambridge</Badge>
                      <Badge color="yellow">Harvard psychiatrist</Badge>
                    </Stack>
                  </Card>

                  <Card withBorder p="md">
                    <Stack gap="xs">
                      <Text fw={600}>Long Tail Keywords</Text>
                      <Badge color="green">adult therapy CBT</Badge>
                      <Badge color="green">child ADHD treatment</Badge>
                      <Badge color="green">Asian American therapy</Badge>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="preview" pt="xl">
            <Stack gap="xl">
              <Card withBorder p="lg">
                <Stack gap="md">
                  <Group>
                    <Title order={3}>SEO Preview</Title>
                    <Select
                      value={selectedPage}
                      onChange={(value) => value && setSelectedPage(value)}
                      data={availablePages}
                      w={200}
                    />
                  </Group>

                  <GooglePreview seoData={currentSEO} />

                  <Title order={4} mt="lg">Structured Data Preview</Title>
                  <Code block>
                    {JSON.stringify(JSON.parse(currentSEO.structuredData), null, 2)}
                  </Code>
                </Stack>
              </Card>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
};

export default SEOManager;
