---
title: "ShopFit"
year: "2025"
rank: 6
subtitle: "Shopify Hackathon Winner"
image: "/images/shopify_mockup.png"
github: "https://github.com/AkshayG99/shopFits"
timeline: "2025"
tools: "Shop Minis SDK, React, TypeScript, Tailwind, Fal AI"
overview: "Built ShopFit as a Shop Mini that uses AI to recommend outfits based on user data, Shopify products, and preferences."
features:
  - title: "Shop Minis SDK"
    description: "Utilized the Shop Minis SDK in order to collect user data, access product specs, and fetch products."
    icon: "code"
  - title: "AI Virtual Try-On"
    description: "Implemented AI virtual try-on (photo + video) and theme-based search layered on Shopify product catalogs."
    icon: "cloud"
  - title: "Industry Mentorship"
    description: "Received feedback and mentorship from Shopify Engineering and Product Managers."
    icon: "terminal"
---

<!-- The features grid is rendered dynamically here from frontmatter -->

### The Problem

Imagine you are shopping online for a new outfit for an upcoming event. You see a great jacket, but you have no idea how it will actually look on your body type, or if it will match the shirt you already have in your cart. The flat, heavily edited product photos don't help. Frustrated by the guesswork and the hassle of inevitable returns, you abandon your cart entirely. E-commerce lacks the personalized, tactile styling experience of a physical fitting room.

### Overview & Impact

We won the **Shopify Hackathon** by building **ShopFit**, a Shop Mini application that utilizes Artificial Intelligence to act as a virtual stylist. We presented our final product directly to Farhan Thawar (Head of Engineering at Shopify), who commended the project's ambitious vision and technical execution. 

### Technical Implementation

- **Shop Minis SDK Integration:** We deeply integrated the official **Shop Minis SDK** to securely collect user data, access detailed product specifications, and fetch relevant products from merchants' catalogs.
- **AI Virtual Try-On:** We implemented advanced AI virtual try-on technology (supporting both photo and video formats) alongside a theme-based search engine layered directly on top of existing Shopify product catalogs.
- **Recommendation Engine:** The platform leverages AI to recommend complete outfits based on individual user data, preferences, and available Shopify products.
- **Industry Feedback:** Throughout the development process, we received invaluable feedback and mentorship from a Shopify Engineering Manager and a Senior Product Operations Manager.

### Challenges

Generating the virtual try-on images via Fal AI initially suffered from high latency, which disrupts the fast-paced e-commerce experience. We had to implement optimistic UI updates and skeleton loaders in React to keep the user engaged while the AI processed the imagery.

### Next Steps

Expanding the virtual try-on capabilities from static photos to short video clips, allowing users to see how the fabric moves and drapes in real-time.
