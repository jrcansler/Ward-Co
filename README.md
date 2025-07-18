# Ward & Co. Website

A modern, professional website for Ward & Co. - a hauling, grading, and clearing business.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Professional Color Scheme**: Tans, browns, and forest green palette
- **Modern UI**: Clean, sleek design with smooth animations
- **Interactive Elements**: Mobile navigation, smooth scrolling, contact form
- **Accessibility**: Focus states, keyboard navigation, and semantic HTML
- **Performance Optimized**: Debounced scroll events and lazy loading

## File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles (mobile-first)
├── script.js           # JavaScript functionality
├── noback.png          # Ward & Co. company logo (no background)
├── Logo.PNG            # Previous logo (PNG format)
├── logo.svg            # Previous logo (SVG format)
└── README.md           # This file
```

## How to Use

1. **Local Development**: Run a local server to view the website

   ```bash
   python3 -m http.server 8002
   ```

   Then visit `http://localhost:8002` in your browser

2. **Deploy**: Upload all files to your web hosting service

## Customization

### Colors

The color scheme is defined in CSS custom properties at the top of `styles.css`:

```css
:root {
  --primary-color: #2d4a2b; /* Forest Green */
  --secondary-color: #8b4513; /* Saddle Brown */
  --accent-color: #d2b48c; /* Tan */
  --light-tan: #f5f5dc; /* Beige */
  --dark-brown: #654321; /* Dark Brown */
}
```

### Content

- Update company information in `index.html`
- Change contact details in the contact section
- Modify service descriptions and features
- Update the hero section text and call-to-action buttons

### Images

- Replace placeholder icons with actual images
- Add your company logo
- Include project photos in the hero and about sections

### Contact Form

The contact form currently shows a success message. To make it functional:

1. Replace the form submission handler in `script.js`
2. Add server-side processing (PHP, Node.js, etc.)
3. Integrate with email services or CRM systems

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for mobile devices
- Minimal JavaScript for fast loading
- CSS custom properties for maintainability
- Debounced scroll events for smooth performance

## SEO Ready

- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt text ready for images (when added)

## Accessibility

- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance
- Mobile-friendly touch targets

---

**Ward & Co.** - Professional Excavation & Land Services
