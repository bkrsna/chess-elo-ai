Prompt : 
{
  "project_instruction": "Create a high-performance, visually stunning landing page for 'ELOBoost', a premium chess training platform. The design must be modern, dark-themed, and evoke a sense of professional mastery and strategy.",
  "tech_stack": {
    "framework": "React 19",
    "bundler": "Vite",
    "styling_approach": "Utility-first CSS (Tailwind recommended) with arbitrary values for precision",
    "animations": "Framer Motion for complex entrance and scroll animations",
    "icons": "Lucide React",
    "scroll_handling": "Lenis for buttery smooth scroll inertia"
  },
  "design_system": {
    "theme": "Dark Mode Exclusive",
    "palette": {
      "backgrounds": "Deep black (#000000) and very dark gray (#171717) surfaces",
      "text_primary": "Pure white (#ffffff) for headings and high-contrast text",
      "text_secondary": "Neutral gray (#a3a3a3) for body text and supporting details",
      "accents": "Vibrant Green (#22c55e) for success indicators, Golden Yellow for premium/highlight elements, and extensive use of white for primary actions"
    },
    "typography": {
      "family": "Inter (sans-serif) for both headings and body",
      "style": "Tight letter spacing on large headings, clean and readable line heights for body text"
    },
    "visual_effects": [
      "Glassmorphism: Heavy use of backdrop blur on floating elements like the navbar",
      "Glows: Subtle outer glows on buttons and highlighted cards",
      "Gradients: Text gradients (White to Gray) for main headlines",
      "Hovers: Smooth lifting (translate Y) and scaling effects on interactive cards"
    ]
  },
  "layout_structure": {
    "type": "Single Page Application with smooth scroll navigation sections",
    "container_width": "Standard max-width container (approx 1280px) centered on screen",
    "responsiveness": "Mobile-first approach, expanding from single-column stacks to multi-column grids on tablet and desktop"
  },
  "components_breakdown": {
    "navbar": {
      "type": "Floating 'Pill' Style",
      "position": "Fixed at the top center, detached from the window edges",
      "appearance": "Semi-transparent dark background with a strong blur effect and a thin white border",
      "elements": [
        "Brand Logo: Bold text 'ELO' with 'Boost' in varied weight/color",
        "Navigation Links: Centered horizontal list with a sliding underline animation on hover",
        "Action Area: 'Log in' text link and a primary 'Get Started' button with a glowing white shadow",
        "Mobile Toggle: Hamburger menu icon that expands an animated full-width dropdown on small screens"
      ]
    },
    "hero_section": {
      "background": "Deep black with a subtle, low-opacity checkered/grid pattern overlay to resemble a chessboard texture",
      "layout": "Two-column split (Text Left, Visual Right)",
      "content_left": [
        "Badge: 'Grandmaster Strategy' pill with a glowing green status dot",
        "Headline: Massive typography 'Skyrocket Your Chess ELO' with 'Chess ELO' in a gradient text finish",
        "Subtext: Large, readable gray description about analysis tools",
        "Buttons: Two large buttons side-by-side. Primary is solid white text on black (reversed) or white background with black text. Secondary is a ghost/outline style",
        "Social Proof: A row of overlapping user avatars followed by a '5-star' rating text and 'Rated 5/5 by GMs' label"
      ],
      "visual_right": {
        "content": "A high-quality animated GIF or video of a chessboard in a 3D isometric or top-down view",
        "frame": "Wrapped in a thick dark border with a heavy drop shadow to make it pop off the background"
      }
    },
    "features_section": {
      "background": "Solid dark background (Neutral Black)",
      "header": "Centered section title 'Grandmaster Training' with a fade-in animation",
      "grid": "3-column grid of feature cards",
      "cards": {
        "appearance": "Dark gray almost-black cards (#111) with thin borders",
        "interaction": "On hover, the border brightens, the card lifts up slightly, and a subtle shadow appears",
        "content": "Top-left icon inside a small square container, bold white title, and gray description text"
      }
    },
    "testimonials_section": {
      "background": "Black background with a large, blurred white spotlight effect in the top-right corner",
      "layout": "3-column grid of testimonial cards",
      "cards": {
        "appearance": "Dark surface color, rounded corners, thin border",
        "content": [
          "Header: User avatar and name/role",
          "Stats Block: A dedicated inner dark box showing 'Before' rating -> Arrow -> 'After' (highlighted green) rating",
          "Rating: 5 yellow stars row",
          "Quote: Italicized gray text"
        ]
      }
    },
    "pricing_section": {
      "header": "Centered title 'Pro Pricing'",
      "layout": "3-column grid where the middle card is visually emphasized",
      "cards": {
        "standard": "Dark background, white border, standard button",
        "highlighted (middle)": "Slightly lighter dark background, Golden/Yellow border, 'Recommended' badge in top right corner, Golden shadow glow",
        "elements": [
          "Plan Name (e.g., 'Club Player')",
          "Price: Large white typography with '/month' in gray",
          "Button: Full width. White background for the highlighted plan, Outline for others",
          "Features List: Vertical list with checkmark icons (Yellow for highlighted plan, white for others)"
        ]
      }
    },
    "team_section": {
      "background": "Black with a top border separator",
      "header": "Split header: Title 'Meet the Grandmasters' on left, 'View all' link on right",
      "layout": "Horizontal scrollable row on mobile, 4-column grid on desktop",
      "cards": {
        "image_handling": "Vertical portrait aspect ratio. Image is grayscale by default and transitions to full color on hover",
        "overlays": [
          "Gradient overlay at the bottom to make text readable",
          "Top Right Badge: 'GM' title box",
          "Bottom Left Info: Rating (in yellow monospace font) and Specialty (uppercase tracking-wide)"
        ],
        "interaction": "Image scales up slightly (zoom effect) within its container on hover"
      }
    },
    "footer": {
      "background": "Very dark footer background (#050505) with top border",
      "layout": "4-column grid (Brand info, Platform Links, Resource Links, Newsletter Signup)",
      "brand_column": "Logo, tagline, and circle-icon links for Twitter, Instagram, YouTube",
      "links_columns": "Simple vertical lists of text links with hover-white transition",
      "newsletter_column": "Text description, Email input field (transparent bg, border), and a 'Subscribe' button",
      "bottom_bar": "Flex row with Copyright text on left, Privacy/Terms links on right, separated by a thin divider line"
    }
  }
}
