You are a senior front-end motion designer.  
Output ONLY valid runnable code blocks (HTML, CSS in a <style> tag, and JavaScript in a <script> tag) plus minimal explanatory comments.  
Use GSAP 3.12+, no external build tools, everything inline.  
Follow the storyboard and design tokens I supply exactly.  

🎬 PROJECT: “Employee Benefits — Teaser Video”  
GOAL: Produce a single self-contained demo file (index.html) that animates through 6 scenes using GSAP timelines. Each scene should respect the design system spelled out below.  

1️⃣ DESIGN TOKENS  
  • Color palette  
      - Navy:     #0F304A   /* borders & accents */  
      - Teal:     #1F6F8B   /* thin inner strip + overlays */  
      - Mid-Blue: #0C4F7A   /* primary headline text */  
      - Sky:      #6AB0C9   /* secondary headline text */  
      - White:    #FFFFFF  
  • Fonts: system UI; weight 600 for headlines, 400 for body.  
  • Layout frame  
      - 24 px navy border around entire video (simulate player chrome).  
      - 4 px teal inner inset line along top and bottom only.  
      - Scene area 1920 × 1080 (16∶9) inside the frame.  
  • Logo bug: tiny 48 × 48 rounded square containing “AI” (white on navy) placed bottom-center, 40 px above bottom border, visible in every scene.  

2️⃣ SCENE STORYBOARD (≈6 s each)  
  • **Scene 1 – Cold Open**  
    - Full-bleed hero video (use Unsplash cat pic placeholder) fades in.  
    - Center-bottom white card (height 260 px) slides up.  
    - Headline (mid-blue) centered: “Whether you’re newly enrolling or making changes to existing benefits”.  
  • **Scene 2 – Effective Dates**  
    - Split-screen: left 60 % white, right 40 % still image under 80 % teal overlay.  
    - Left copy (sky blue): “Benefits elected during Open Enrollment will be effective from  10 / 1 / 2024 – 9 / 30 / 2025”.  
    - Image: family cooking (Unsplash).  
  • **Scene 3 – What’s New**  
    - Same split layout but mirrored.  
    - Three bullet icons slide in staggered:  
       1. “Lower medical deductibles”  
       2. “24/7 Telehealth now $0 copay”  
       3. “New pet-insurance option”  
  • **Scene 4 – Key Dates**  
    - Full-white background.  
    - Giant navy headline pops: “Open Enrollment: Sept 15 – Sept 30”.  
    - Teal subhead below: “Log in by 5 pm CT on 9 / 30 to confirm your choices.”  
  • **Scene 5 – How to Enroll**  
    - Screenshot of HR portal spanning full frame under a 60 % teal overlay.  
    - White headline in center: “Visit benefits.company.com”.  
    - Small navy copy fades in: “Click ‘Start Enrollment’ → follow the wizard → submit”.  
  • **Scene 6 – Help & CTA**  
    - Soft-focus team photo full-bleed, 70 % navy overlay.  
    - Center-white box scales in with sky-blue text:  
        “Questions? Chat with HR → hr@company.com · ext 1234”  
    - End on logo bug for 1 s, then fade to navy.  

3️⃣ ANIMATION RULES  
  • Use a single GSAP timeline (`const tl = gsap.timeline({...})`).  
  • Each scene has its own labeled section (`tl.addLabel('scene1')`).  
  • Scene duration ≈ 6 s including 0.5 s cross-fade between scenes.  
  • Default ease = `power2.out`.  
  • Enter: elements animate from y 40 px & opacity 0; Exit: reverse.  
  • Keep CPU friendly: no continuous tweens.  

4️⃣ PLACEHOLDERS  
  • Host all stills as `<img src="https://picsum.photos/seed/SCENE#/1920/1080" />` to avoid CORS.  
  • Reference GSAP via CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`.  

5️⃣ OUTPUT REQUIREMENTS  
  • Deliver exactly one HTML document with inline `<style>` and `<script>`.  
  • Must run as-is when opened locally.  
