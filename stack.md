# InvoltAI Website Technical Documentation

## Typography System

### Font Families

The website uses a set of carefully selected font families to create a consistent and professional typographic hierarchy:

- **Montserrat**: Used for headings and titles to convey strength and clarity
- **Inter**: Used for body text and paragraphs for optimal readability
- **Poppins**: Used for specific UI elements requiring a modern aesthetic
- **Roboto**: Used as a fallback font and for specific functional elements
- **Open Sans**: Used for specific UI components requiring a friendly tone

### Typography Scale

The website implements a responsive typography scale that adjusts based on screen size:

```css
html {
  font-size: 15px; /* Base font size for mobile */
}

@screen sm {
  html {
    font-size: 16px; /* Medium screens */
  }
}

@screen lg {
  html {
    font-size: 17px; /* Larger screens */
  }
}
```

### Heading Styles

Consistent heading styles are applied throughout the site:

- **h1**: `font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight`
- **h2**: `font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight`
- **h3**: `font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight`
- **h4**: `font-montserrat font-bold text-base sm:text-lg md:text-xl leading-tight`
- **h5/h6**: `font-montserrat font-bold text-sm sm:text-base md:text-lg leading-tight`

### Body Text

Body text is styled for optimal readability across devices:

```css
p {
  @apply text-sm sm:text-base font-inter leading-relaxed tracking-wide;
}
```

### Typography Utility Classes

To maintain consistency, the following utility classes are available:

#### Heading Utilities

- `.heading-large`: `text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold tracking-tight leading-tight`
- `.heading-medium`: `text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold tracking-tight leading-tight`
- `.heading-small`: `text-xl sm:text-2xl md:text-3xl font-montserrat font-bold tracking-tight leading-tight`

#### Body Text Utilities

- `.body-large`: `text-base sm:text-lg md:text-xl font-inter leading-relaxed tracking-wide`
- `.body-medium`: `text-sm sm:text-base md:text-lg font-inter leading-relaxed tracking-wide`
- `.body-small`: `text-xs sm:text-sm md:text-base font-inter leading-relaxed tracking-wide`

### Component-Specific Typography

Different components on the site leverage the typography system:

- **Hero**: Large headings with gradient backgrounds, medium-sized descriptive text
- **HowItWorks**: Section headings with gradient effects, descriptive paragraph text
- **UseCases**: Medium headings for case studies, smaller text for descriptions
- **Technology**: Combination of large section headings and supporting descriptive text
- **Contact**: Clean, readable text for contact information with appropriate emphasis

### Best Practices

When adding new content to the site, follow these typography guidelines:

1. Use the appropriate heading level to maintain document hierarchy
2. Leverage the utility classes for consistent styling
3. Maintain the font family assignments (Montserrat for headings, Inter for body text)
4. Ensure responsive text sizing using the sm/md/lg breakpoint system
5. Keep line heights (leading) and letter spacing (tracking) consistent with existing patterns