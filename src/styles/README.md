# Rainbow Glow Effects - Usage Guide

This guide explains how to use the standardized rainbow glow effects throughout the Caroline Fu Psychiatry application.

## 🌈 Overview

The rainbow glow effects provide a subtle, professional way to add visual interest to any component in the app. The effects use a smooth, reversible rainbow pulse animation that cycles through the full spectrum and back, creating a gentle breathing effect.

## 📁 Files

- **`src/styles/rainbowGlow.css`** - Main CSS file with all animations and utility classes
- **`src/index.css`** - Imports the rainbow glow CSS globally

## 🎨 Available Effects

### Intensity Levels

| Class | Description | Use Case |
|-------|-------------|----------|
| `rainbow-glow-subtle` | Very gentle effect | Background elements, secondary content |
| `rainbow-glow` | Standard intensity | Main cards, primary content |
| `rainbow-glow-button` | Optimized for buttons | Interactive elements, CTAs |
| `rainbow-glow-small` | Scaled for small elements | Icons, badges, small components |

### Speed Variations

| Modifier | Duration | Use Case |
|----------|----------|----------|
| `-fast` | 2-3 seconds | Attention-grabbing elements |
| (default) | 4-6 seconds | Balanced, general use |
| `-slow` | 8-10 seconds | Ambient, background effects |

### Hover Enhancements

| Class | Description |
|-------|-------------|
| `rainbow-glow-hover` | Enhanced effect on hover |
| `rainbow-glow-interactive` | Subtle base + enhanced hover |
| `rainbow-glow-button-interactive` | Button-optimized interactive effect |

## 🚀 Usage Examples

### Basic Usage

```tsx
// Standard card with rainbow glow
<Card className="rainbow-glow">
  <Text>Content with rainbow glow</Text>
</Card>

// Subtle background element
<Box className="rainbow-glow-subtle-slow">
  <Text>Background content</Text>
</Box>

// Interactive button
<Button className="rainbow-glow-button-interactive">
  Click Me
</Button>
```

### Mantine Components

```tsx
// Paper component
<Paper className="rainbow-glow" p="md" radius="md">
  <Title order={3}>Card Title</Title>
  <Text>Card content</Text>
</Paper>

// ThemeIcon with small glow
<ThemeIcon className="rainbow-glow-small rainbow-glow-small-hover" size="lg">
  <IconHeart />
</ThemeIcon>

// Group with interactive glow
<Group className="rainbow-glow-interactive" p="lg">
  <Text>Interactive group</Text>
</Group>
```

### Advanced Usage

```tsx
// Combined classes for complex interactions
<Card 
  className="rainbow-glow-subtle rainbow-glow-hover" 
  p="xl"
>
  <Text>Subtle base with enhanced hover</Text>
</Card>

// Fast attention-grabbing CTA
<Button 
  className="rainbow-glow-button-fast" 
  size="xl"
>
  Important Action
</Button>

// Slow ambient background
<Container className="rainbow-glow-subtle-slow">
  <Text>Ambient background glow</Text>
</Container>
```

## 🎯 Recommended Usage Patterns

### Home Page Elements

```tsx
// Hero cards
<Card className="rainbow-glow">Hero Content</Card>

// Service cards
<Card className="rainbow-glow-subtle rainbow-glow-hover">Service Info</Card>

// CTA buttons
<Button className="rainbow-glow-button-interactive">Get Started</Button>

// Doctor image card
<Card className="rainbow-glow-slow">Doctor Photo</Card>
```

### Service Pages

```tsx
// Feature cards
<Card className="rainbow-glow-interactive">Feature Description</Card>

// About sections
<Paper className="rainbow-glow-subtle">About Content</Paper>

// Contact forms
<Paper className="rainbow-glow">Contact Form</Paper>
```

### Interactive Elements

```tsx
// Primary buttons
<Button className="rainbow-glow-button-interactive">Primary Action</Button>

// Secondary buttons
<Button className="rainbow-glow-button-subtle">Secondary Action</Button>

// Icon buttons
<ActionIcon className="rainbow-glow-small-hover">
  <IconSettings />
</ActionIcon>
```

### Navigation & Layout

```tsx
// Header elements
<Header className="rainbow-glow-subtle-slow">Navigation</Header>

// Footer sections
<Footer className="rainbow-glow-subtle">Footer Content</Footer>

// Sidebar components
<Aside className="rainbow-glow-subtle">Sidebar</Aside>
```

## 🎨 Customization

### Combining with CSS Modules

```tsx
// In your component
import classes from './MyComponent.module.css';

<Card className={`${classes.myCard} rainbow-glow-interactive`}>
  Content
</Card>
```

### Conditional Application

```tsx
// Apply based on state
<Card className={isHighlighted ? 'rainbow-glow-fast' : 'rainbow-glow-subtle'}>
  Dynamic content
</Card>

// Apply based on props
<Button className={`rainbow-glow-button${isPrimary ? '-fast' : '-subtle'}`}>
  Dynamic button
</Button>
```

### Pausing Animations

```tsx
// Temporarily disable animation
<Card className="rainbow-glow rainbow-glow-paused">
  Paused animation
</Card>
```

## ♿ Accessibility

The rainbow glow effects automatically respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* All rainbow glow animations are disabled */
}
```

Users who have enabled "Reduce motion" in their system settings will not see the animations.

## 🎨 Color Spectrum

The rainbow effect cycles through these colors:
- **Red** → **Orange** → **Yellow** → **Green** → **Blue** → **Indigo** → **Violet** → **Indigo** → **Blue** → **Green** → **Yellow** → **Orange** → **Red**

## 📱 Responsive Behavior

All effects work consistently across device sizes and automatically scale appropriately for mobile devices.

## 🔧 Technical Details

- **Animation Type**: CSS keyframes (GPU accelerated)
- **Performance**: Optimized for smooth 60fps animation
- **Browser Support**: All modern browsers
- **File Size**: ~15KB minified
- **Dependencies**: None (pure CSS)

## 🚫 What NOT to Do

```tsx
// ❌ Don't overuse - too many glowing elements
<Card className="rainbow-glow-fast">
  <Button className="rainbow-glow-button-fast">
    <ThemeIcon className="rainbow-glow-small-fast">
      <IconStar />
    </ThemeIcon>
    Overloaded
  </Button>
</Card>

// ❌ Don't use fast effects everywhere
<Container className="rainbow-glow-fast">
  <Card className="rainbow-glow-fast">
    <Text>Too distracting</Text>
  </Card>
</Container>

// ❌ Don't combine conflicting effects
<Card className="rainbow-glow rainbow-glow-subtle rainbow-glow-button">
  Conflicting classes
</Card>
```

## ✅ Best Practices

```tsx
// ✅ Use hierarchy - different intensities for different importance
<Container className="rainbow-glow-subtle-slow">
  <Card className="rainbow-glow-interactive">
    <Button className="rainbow-glow-button">Primary Action</Button>
  </Card>
</Container>

// ✅ Use sparingly for maximum impact
<Card className="rainbow-glow">
  <Text>Important highlighted content</Text>
</Card>

// ✅ Match effect to element purpose
<ThemeIcon className="rainbow-glow-small">
  <IconHeart />
</ThemeIcon>
```

## 🎯 Quick Reference

| Element Type | Recommended Class | Use Case |
|--------------|-------------------|----------|
| Hero Cards | `rainbow-glow` | Main attention |
| Service Cards | `rainbow-glow-interactive` | Hover enhancement |
| CTA Buttons | `rainbow-glow-button-interactive` | User actions |
| Icons | `rainbow-glow-small-hover` | Subtle interaction |
| Background | `rainbow-glow-subtle-slow` | Ambient effect |
| Forms | `rainbow-glow-subtle` | Gentle highlight |
| Navigation | `rainbow-glow-subtle-slow` | Subtle presence |

## 🔄 Migration from Inline Styles

If you have existing inline rainbow glow styles, replace them with utility classes:

```tsx
// Before (inline styles)
<Card style={{ animation: 'rainbowGlow 5s ease-in-out infinite' }}>
  Content
</Card>

// After (utility class)
<Card className="rainbow-glow">
  Content
</Card>
```

This standardized approach ensures consistency, maintainability, and better performance across the entire application.
