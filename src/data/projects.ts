export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  intro: string;
  approach: string;
  hero: string;
  gallery: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'packaging', number: '01', title: 'Kitchen de Brazil', category: 'Packaging',
    summary: 'Packaging system for a Brazilian steakhouse brand, designed to stay cohesive across trays, bags, boxes and cups.',
    intro: 'Packaging brings design and production together. The goal was a recognizable system that could flex across very different physical formats without forcing one layout onto every surface.',
    approach: 'Scale, logo placement and pattern density change by format while the illustrated toucan, palette and typography keep the family connected. The result is expressive on the table and practical in production.',
    hero: 'graphic-design/kitchen-brazil-tray.webp',
    gallery: ['graphic-design/kitchen-brazil-bag.webp','graphic-design/kitchen-brazil-box.webp','graphic-design/apex-toothpaste.webp','graphic-design/hair-serum.webp','graphic-design/sleep-support.webp'],
    tags: ['Packaging','Print','Production-aware design']
  },
  {
    slug: 'branding', number: '02', title: 'Brand Identity & Logos', category: 'Branding',
    summary: 'Identity work built to stay recognizable beyond the presentation board, across signage, print and everyday brand applications.',
    intro: 'A useful identity has to work after the concept presentation ends. I start with the personality of the business and the places the mark actually needs to live.',
    approach: 'The work ranges from restrained service brands to more illustrative lifestyle identities. Each system is designed around clarity, distinctiveness and practical application rather than a single house style.',
    hero: 'graphic-design/work-smart-media.webp',
    gallery: ['graphic-design/sip-burn-logo.webp','graphic-design/mirin-medical.webp','graphic-design/cedar-hvac.webp','graphic-design/fitness-studio.webp','graphic-design/colored-bakery.webp'],
    tags: ['Identity','Logo systems','Brand applications']
  },
  {
    slug: 'marketing-editorial', number: '03', title: 'Marketing & Editorial', category: 'Marketing',
    summary: 'Campaign, editorial and promotional design shaped around hierarchy, audience and the realities of print production.',
    intro: 'Marketing pieces often have a lot to say in very little space. I focus first on what needs to be noticed, then use type, image, colour and spacing to guide everything else.',
    approach: 'The visual tone shifts with the audience, from corporate promotions to event graphics and editorial pieces. The common thread is information that remains clear without flattening the personality of the work.',
    hero: 'graphic-design/rangeen-by-mirza.webp',
    gallery: ['graphic-design/pickleball-flyer.webp','graphic-design/google-cloud-golfers.webp','graphic-design/pink-table-talk.webp','graphic-design/canada-hajj-service.webp','graphic-design/nourish-book-mockup.webp'],
    tags: ['Marketing','Editorial','Campaign design']
  },
  {
    slug: 'print-prepress', number: '04', title: 'Print & Prepress', category: 'Production',
    summary: 'Practical production thinking across bleed, trim, safe areas, colour, finishing, cut paths, proofing and release control.',
    intro: 'This is the less glamorous part of design that prevents expensive mistakes. Files need to survive the press, finishing equipment, folding, trimming and the inevitable last-minute revision.',
    approach: 'I check the artwork at final output conditions, separate technical layers clearly, protect critical content, confirm fold and cut logic, and make sure the approved revision is the one that actually goes to production.',
    hero: 'print-prepress/print-file-anatomy.webp',
    gallery: ['print-prepress/packaging-prepress-layer-map.webp','print-prepress/large-format-output-map.webp','graphic-design/rangeen-by-mirza.webp'],
    tags: ['Prepress','Print production','Quality control']
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);