# Glorix Galaxy Showcase

Build a complete, polished, responsive **Phase 1 prototype of GLORIX**, a professional gaming identity and social-profile platform — essentially a professional identity layer for gamers.

IMPORTANT EXECUTION RULE:
This is an urgent college project/demo submission. Prioritize a visually complete, functional FRONTEND PROTOTYPE over backend implementation. Use mock/local data wherever necessary so the entire application works as a convincing demo without requiring a database.

## 1. TECHNOLOGY

Use:

* React.js
* TypeScript
* Tailwind CSS
* Component-based architecture
* React Router for navigation
* Lucide React icons or another clean icon library
* Local/mock data for the prototype

Keep the code clean, modular and easy to extend later.

DO NOT spend time implementing:

* Supabase
* PostgreSQL
* Node.js backend
* Express API
* Real authentication
* Real file uploads
* Payment systems
* Subscriptions
* Premium features

The architecture should remain easy to connect to a Node.js + Express backend and database later.

---

# 2. GLORIX PRODUCT VISION

GLORIX is a professional platform where gamers can create a recognizable gaming identity.

Gamers should be able to:

* Create a professional gamer profile
* Showcase their gaming experience
* Display games and skills
* Share achievements
* Share certificates
* Share tournament results
* Upload/showcase gaming photos
* Showcase gaming videos/clips
* Publish normal text updates
* Discover other gamers
* Follow their activity
* Build a professional gaming presence

IMPORTANT:

Achievements, certificates, photos, videos, gaming accomplishments and normal text updates are NOT separate profile categories.

Everything must belong to ONE unified **POST / ACTIVITY SYSTEM**.

A user creates one post and can optionally attach:

* text
* image
* video
* achievement information
* certificate
* gaming accomplishment

Do NOT create separate navigation pages called:
"Achievements"
"Certificates"
"Videos"
"Photos"

Instead, show all of them through the unified post/activity system.

---

# 3. BRAND IDENTITY

Brand name:

GLORIX

Tagline:

"Your Game. Your Identity."

Alternative supporting phrase:

"Build your gaming identity. Showcase your journey."

Brand personality:

* Futuristic
* Professional
* Ambitious
* Immersive
* Premium-looking
* Gaming-focused
* Clean
* Modern

The design should NOT look like a childish gaming website.

Avoid:

* excessive neon
* cartoon graphics
* overly bright colors
* clutter
* unnecessary glowing effects

---

# 4. VISUAL DESIGN SYSTEM

Primary visual concept:

A dark futuristic galaxy environment.

Use:

* Deep black/purple background
* Dark violet
* Rich purple
* Silver
* Light gray
* Very subtle white stars
* Subtle nebula/galaxy effects

Suggested visual direction:

Background:
near-black with deep purple galaxy gradients.

Accent:
purple.

Secondary accent:
silver.

Text:
white/light gray.

Secondary text:
silver-gray.

Borders:
subtle translucent silver/purple.

Cards:
dark translucent surfaces with slight glassmorphism.

Use subtle:

* particles
* stars
* nebula gradients
* depth
* shadows
* blur
* gradients

Keep these effects elegant and controlled.

---

# 5. UNIQUE GLORIX DESIGN FEATURE — "GLORIX GALAXY"

The main activity/post experience should be visually different from a normal social-media feed.

Instead of displaying every post as a boring vertical list, create a visual space called:

"GLORIX GALAXY"

Posts should appear as floating media cards positioned around the galaxy environment.

Examples:

* one large gaming image
* one smaller tournament post
* one video card
* one certificate post
* one achievement post
* one text update

Cards should have:

* different sizes
* subtle depth
* slight rotation where appropriate
* controlled floating/parallax animation
* clear silver/light-gray text beneath the media

IMPORTANT:
The animation must be subtle.

Do NOT:

* randomly move cards aggressively
* make text unreadable
* constantly rearrange cards
* sacrifice usability for visual effects

The galaxy is the visual identity, but the application must still feel professional and usable.

On mobile devices, gracefully convert the floating layout into a cleaner responsive arrangement.

---

# 6. PROFILE PHOTO REQUIREMENT

The gamer profile photo MUST be displayed inside a:

**SEPTAGON / 7-SIDED SHAPE**

Do NOT use a normal circle.

Create the septagon using CSS clip-path or another reliable CSS technique.

The profile photo should appear visually integrated with the purple galaxy theme.

Add a subtle purple/silver glow around it.

---

# 7. REQUIRED APPLICATION PAGES

Create all of the following pages:

### 1. Landing Page

### 2. Login

### 3. Sign Up

### 4. Home / Discover

### 5. Gamer Profile

### 6. Edit Profile

### 7. Create Post

### 8. Explore Gamers

### 9. Notifications

### 10. Settings

All navigation should work.

Buttons should navigate to the appropriate pages.

Do not leave major buttons as dead buttons.

---

# 8. LANDING PAGE

Create a visually impressive landing page.

Hero section:

GLORIX

"Your Game. Your Identity."

Supporting text:

"Build your professional gaming identity, showcase your journey, and connect with the gaming community."

Primary CTA:

"Create Your Profile"

Secondary CTA:

"Explore Gamers"

Visual:
Create a futuristic galaxy gaming environment with floating profile/activity cards.

Show example gamer cards and activity floating around the hero area.

Include sections:

## Why Glorix?

* Build Your Gaming Identity
* Showcase Your Journey
* Share Your Achievements
* Discover Gamers

## How It Works

1. Create Your Profile
2. Showcase Your Gaming Journey
3. Connect & Discover

## Final CTA

"Your gaming journey deserves an identity."

Button:
"Join Glorix"

---

# 9. LOGIN PAGE

Create a clean futuristic login interface.

Fields:

* Email / Username
* Password

Buttons:

* Login
* Continue with Google — visual demo only

Links:

* Forgot password?
* Create account

Use the Glorix galaxy background.

For the prototype, login can simply navigate to Home.

---

# 10. SIGN UP PAGE

Fields:

* Full Name
* Gamer Username
* Email
* Password
* Confirm Password

Optional:

* Gaming specialization

Button:
"Create Gamer Profile"

After clicking, navigate to the gamer profile/home prototype.

---

# 11. HOME / DISCOVER PAGE

This is the main logged-in experience.

Create a professional dashboard containing:

Top navigation:

* GLORIX logo
* Home
* Explore
* Create Post
* Notifications
* Profile
* Settings

Main area:

## Welcome section

"Welcome back, Alex."

Subtitle:
"Continue building your gaming identity."

Then display:

## GLORIX GALAXY

Show floating activity cards.

Example posts:

1. Tournament Victory
   "Finished #1 in the Regional Valorant Championship."

2. Gaming Clip
   "Clutch round from last night's ranked match."

3. Certificate
   "Completed Advanced Competitive Gaming Workshop."

4. Achievement
   "Reached Immortal rank."

5. Text Update
   "Grinding toward the next tournament."

Each card should visually look different but remain part of the SAME post system.

---

# 12. GAMER PROFILE PAGE

Create a highly polished professional gamer profile.

Header:

Large galaxy cover/background.

Septagon profile image.

Information:

Alex Carter
@alexplays

"Competitive FPS Gamer | Valorant | Strategy Enthusiast"

Stats:

* 24 Posts
* 1.8K Followers
* 342 Following

Profile information:

## About

Professional gamer focused on competitive FPS titles and strategic gameplay.

## Gaming Specialization

Competitive FPS

## Games

* Valorant
* Counter-Strike
* Apex Legends

## Skills

* Team Communication
* Strategy
* Aim
* Game Analysis
* Competitive Gameplay

## Gaming Experience

3+ Years

## Inspiration / Quote

Create a dedicated elegant section:

"Every match is another opportunity to become better."

This quote section is important.

## Gaming Links

Add visual buttons for:

* Twitch
* YouTube
* Discord
* Steam
* X

Use mock links only.

---

# 13. PROFILE ACTIVITY

Under the profile information, display:

"Activity"

This must use the SAME unified post system.

Example activity:

### Tournament Achievement

Image + description

### Gaming Clip

Video thumbnail + description

### Certificate

Certificate image + description

### Gaming Update

Text-only post

### Gaming Photo

Image + description

Do NOT create separate sections for these categories.

---

# 14. CREATE POST PAGE

Create a polished post creation interface.

Heading:

"Create a Post"

Allow the user to enter:

* Text
* Add Image
* Add Video
* Add Certificate
* Add Achievement details

But internally treat everything as:

ONE POST.

Example interface:

"What's happening in your gaming journey?"

Text area.

Media attachment area.

Optional metadata:

* Game
* Tournament
* Achievement title

Button:

"Publish Post"

For the demo, publishing can add/display a mock post or show a success state.

---

# 15. EXPLORE GAMERS PAGE

Create a discovery page for gamers.

Heading:

"Explore Gamers"

Search bar:

"Search gamers, games or skills..."

Filters:

* Game
* Specialization
* Skill
* Experience

Display professional gamer profile cards.

Example:

Alex Carter
@alexplays
Competitive FPS Gamer
Valorant • CS2

Maya Singh
@mayagaming
Strategy Gamer
League of Legends • Valorant

Ryan Cole
@ryanclutch
FPS & Esports
Apex Legends • Valorant

Each card should have:

* septagon profile image
* username
* specialization
* games
* skills
* View Profile button

Make the cards feel like professional gaming resumes, not dating/social-media cards.

---

# 16. NOTIFICATIONS PAGE

Create a clean notification center.

Examples:

"Alex liked your post."

"Sarah started following you."

"Your tournament achievement received 24 reactions."

"Jordan commented on your gaming clip."

Use realistic timestamps.

---

# 17. SETTINGS PAGE

Create:

Profile Settings

* Edit profile

Appearance

* Galaxy Theme

Account

* Email
* Username

Privacy

* Profile visibility

About

* About Glorix
* Help

Use mock controls.

No real account functionality is necessary.

---

# 18. NAVIGATION

Create a consistent navigation system.

Desktop:
Left or top navigation.

Mobile:
Use a bottom navigation bar.

Important navigation items:

Home
Explore
Create
Notifications
Profile

Settings can be accessed from the profile/menu.

Make navigation functional across all pages.

---

# 19. MOCK DATA

Use realistic gaming data.

Create at least:

5 gamer profiles

10+ posts

Different post types should include:

* gaming photo
* gaming video
* tournament achievement
* certificate
* text update
* gaming milestone

Use realistic names and usernames.

Do not use lorem ipsum.

Make the prototype look like a real product.

---

# 20. COMPONENT STRUCTURE

Create reusable components such as:

* Navbar
* MobileNavigation
* GalaxyBackground
* FloatingPostCard
* GamerProfileCard
* SeptagonAvatar
* PostCard
* CreatePostForm
* NotificationItem
* GameTag
* SkillTag
* Button
* Modal
* SearchBar

Keep the code organized and reusable.

---

# 21. RESPONSIVE DESIGN

The entire application MUST work on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop:
Use the full galaxy/floating experience.

Tablet:
Reduce card sizes and spacing.

Mobile:
Use a clean stacked layout while preserving the galaxy aesthetic.

Never allow:

* horizontal overflow
* text clipping
* buttons going outside the screen
* overlapping important information

---

# 22. MICRO-INTERACTIONS

Add subtle interactions:

* hover effects
* button transitions
* profile card hover
* gentle card movement
* page transitions
* subtle glow
* smooth scrolling
* modal transitions

Do NOT over-animate.

Performance and readability are more important than effects.

---

# 23. ACCESSIBILITY & USABILITY

Make sure:

* text has sufficient contrast
* buttons have clear labels
* forms have labels
* interactive elements are obvious
* navigation is understandable
* mobile layout is usable

Do not sacrifice usability for aesthetics.

---

# 24. DEMO FLOW

The following demo journey must work:

Landing Page
↓
Create Your Profile
↓
Sign Up
↓
Home / Discover
↓
Explore Gamers
↓
Open Gamer Profile
↓
View Activity
↓
Create Post
↓
Publish / Success State
↓
Notifications
↓
Settings

All major transitions should work using frontend state/mock navigation.

---

# 25. PHASE 1 SCOPE — VERY IMPORTANT

THIS VERSION IS ONLY THE GAMER PROFILE PLATFORM.

DO NOT BUILD:

❌ Recruiter dashboard
❌ Company dashboard
❌ Game-company accounts
❌ Beta-testing marketplace
❌ Job marketplace
❌ Payments
❌ Subscriptions
❌ Premium plans
❌ Ads
❌ Paid verification
❌ AI gamer scoring
❌ Recruiter analytics
❌ Company analytics
❌ Monetization

Those may be future phases.

For now, Glorix is:

**A professional gaming identity and profile platform.**

---

# 26. PRODUCT POSITIONING

The UI should communicate this idea clearly:

"LinkedIn-style professional identity for gamers."

But do NOT copy LinkedIn's visual design.

Glorix should have its own identity through:

* Galaxy environment
* Purple + silver branding
* Septagon gamer profiles
* GLORIX GALAXY activity system
* Professional gaming profiles
* Unified gaming journey posts

---

# 27. FINAL QUALITY CHECK

Before finishing, verify:

* Every required page exists.
* Navigation works.
* Buttons work.
* Profile page looks complete.
* Septagon profile image works.
* Quote section exists.
* Unified post system works visually.
* Floating GLORIX GALAXY exists.
* Gaming mock content is populated.
* Explore page contains gamers.
* Create Post page exists.
* Notifications exists.
* Settings exists.
* Mobile layout works.
* No major console/runtime errors.
* No blank pages.
* No broken images.
* No unnecessary backend implementation.
* No premium/recruiter/company features.

MOST IMPORTANT:

Make this look like a convincing startup/product prototype that can be demonstrated to a college evaluator.

Prioritize:

1. Working navigation
2. Visual polish
3. Clear product concept
4. Complete pages
5. Responsive design
6. Glorix's unique visual identity

Do not spend the available build credits on unnecessary backend infrastructure.

Build the complete Phase 1 frontend prototype now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://glorix-galaxy-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6db50aad-f7f2-478b-b8cf-b3ffe4b8e441).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
