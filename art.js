const artworks = [
  {
    title: "Earth Day",
    date: "2025",
    theme: "school",
    image: "Images/earth-day.jpg",
    note: "Emmett holding the Earth."
  },
  {
    title: "Mom, I Love You to Pieces",
    date: "2025",
    theme: "family",
    image: "Images/mom-love-you-to-pieces.jpg",
    note: "Mother's Day gift."
  },
  {
    title: "Dr. Seuss Craft",
    date: "2025",
    theme: "school",
    image: "Images/dr-seuss.jpg",
    note: "Dr. Seuss week project."
  },
  {
    title: "Happy St. Patrick's Day",
    date: "2025",
    theme: "holiday",
    image: "Images/st-patricks-day.jpg",
    note: "Rainbow and pot of gold."
  },
  {
    title: "Frog Coloring Page",
    date: "2025",
    theme: "animals",
    image: "Images/frog.jpg",
    note: "A cheerful frog."
  },
  {
    title: "Flower CVC Words",
    date: "2025",
    theme: "school",
    image: "Images/cvc-flower.jpg",
    note: "Learning word families."
  },
  {
    title: "Free Drawing",
    date: "2025",
    theme: "drawing",
    image: "Images/free-drawing.jpg",
    note: "Original pencil drawing."
  },

  {
    title: "Merry and Bright",
    date: "December 2025",
    theme: "holiday",
    image: "Images/2025-12-merry-and-bright.jpg",
    note: "Christmas project."
  },
  {
    title: "Peppermint Collage",
    date: "December 2025",
    theme: "holiday",
    image: "Images/2025-12-peppermint-collage.jpg",
    note: "Holiday collage."
  },
  {
    title: "Santa Coloring",
    date: "December 2025",
    theme: "holiday",
    image: "Images/2025-12-santa-coloring.jpg",
    note: "Santa Claus coloring page."
  },

  {
    title: "Blue Abstract Drawing",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-blue-abstract-drawing.jpg",
    note: "Blue abstract drawing."
  },
  {
    title: "Blue House Drawing",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-blue-house-drawing.jpg",
    note: "Blue house drawing."
  },
  {
    title: "Blue Shape Drawing",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-blue-shape-drawing.jpg",
    note: "Blue shape drawing."
  },
  {
    title: "Blue Yoshi Coloring",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-blue-yoshi-coloring.jpg",
    note: "Blue Yoshi coloring page."
  },
  {
    title: "Bunny Pencil Drawing",
    date: "2025–2026",
    theme: "animals",
    image: "Images/2025-2026-bunny-pencil-drawing.jpg",
    note: "Bunny sketch."
  },
  {
    title: "Color Stack Drawing",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-color-stack-drawing.jpg",
    note: "Color stack artwork."
  },
  {
    title: "Creature Pencil Drawing",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-creature-pencil-drawing.jpg",
    note: "Creature sketch."
  },
  {
    title: "Flying Mario",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-flying-mario-coloring.jpg",
    note: "Flying Mario coloring page."
  },
  {
    title: "Iguana Coloring",
    date: "2025–2026",
    theme: "animals",
    image: "Images/2025-2026-iguana-coloring.jpg",
    note: "Iguana coloring page."
  },
  {
    title: "Mandala Coloring",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-mandala-coloring.jpg",
    note: "Mandala coloring."
  },
  {
    title: "Mario and Yoshi",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-mario-and-yoshi-coloring.jpg",
    note: "Mario and Yoshi coloring page."
  },
  {
    title: "My Name Flower Craft",
    date: "2025–2026",
    theme: "school",
    image: "Images/2025-2026-my-name-flower-craft.jpg",
    note: "Name flower craft."
  },
  {
    title: "Orange Animal Drawing",
    date: "2025–2026",
    theme: "animals",
    image: "Images/2025-2026-orange-animal-drawing.jpg",
    note: "Orange animal drawing."
  },
  {
    title: "SpongeBob Coloring",
    date: "2025–2026",
    theme: "drawing",
    image: "Images/2025-2026-spongebob-coloring.jpg",
    note: "SpongeBob coloring page."
  },
  {
    title: "UG Bug Word Family",
    date: "2025–2026",
    theme: "school",
    image: "Images/2025-2026-ug-bug-word-family.jpg",
    note: "Word family activity."
  },

  {
    title: "Number Strip 1–10",
    date: "February 2026",
    theme: "school",
    image: "Images/2026-02-number-strip-1-to-10.jpg",
    note: "Counting activity."
  },
  {
    title: "Valentine Bee Craft",
    date: "February 2026",
    theme: "holiday",
    image: "Images/2026-02-valentine-bee-craft.jpg",
    note: "Valentine's Day bee craft."
  },
  {
    title: "Valentine Mouse Story",
    date: "February 2026",
    theme: "school",
    image: "Images/2026-02-valentine-mouse-story.jpg",
    note: "Valentine mouse story."
  },

  {
    title: "Kindergarten Graduate",
    date: "May 2026",
    theme: "school",
    image: "Images/2026-05-kindergarten-graduate.jpg",
    note: "Kindergarten graduation."
  },
  {
    title: "Mom Portrait Craft",
    date: "May 2026",
    theme: "family",
    image: "Images/2026-05-mom-portrait-craft.jpg",
    note: "Portrait craft for Mom."
  },

  {
    title: "Bee Flower Drawing",
    date: "Spring 2026",
    theme: "animals",
    image: "Images/2026-spring-bee-flower-drawing.jpg",
    note: "Bee and flower drawing."
  },
  {
    title: "Birdhouse Coloring",
    date: "Spring 2026",
    theme: "animals",
    image: "Images/2026-spring-birdhouse-coloring.jpg",
    note: "Birdhouse coloring page."
  },
  {
    title: "Flower Number Craft",
    date: "Spring 2026",
    theme: "school",
    image: "Images/2026-spring-flower-number-craft.jpg",
    note: "Flower number craft."
  },
  {
    title: "Flower Pencil Drawing",
    date: "Spring 2026",
    theme: "drawing",
    image: "Images/2026-spring-flower-pencil-drawing.jpg",
    note: "Flower pencil drawing."
  },
  {
    title: "Growing CVC Words",
    date: "Spring 2026",
    theme: "school",
    image: "Images/2026-spring-growing-cvc-words.jpg",
    note: "Growing CVC words activity."
  },
  {
    title: "Pineapple Print",
    date: "Spring 2026",
    theme: "drawing",
    image: "Images/2026-spring-pineapple-print.jpg",
    note: "Pineapple print art."
  },
  {
    title: "Torn Paper Flower",
    date: "Spring 2026",
    theme: "drawing",
    image: "Images/2026-spring-torn-paper-flower.jpg",
    note: "Torn paper flower craft."
  }
];
