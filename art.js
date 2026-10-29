const artworks = [
  {
    "title": "Earth Day",
    "date": "2025",
    "theme": "school",
    "image": "Images/earth-day.jpg",
    "note": "Emmett holding the Earth."
  },
  {
    "title": "Mom, I Love You to Pieces",
    "date": "2025",
    "theme": "family",
    "image": "Images/mom-love-you-to-pieces.jpg",
    "note": "Mother's Day gift."
  },
  {
    "title": "Dr. Seuss Craft",
    "date": "2025",
    "theme": "school",
    "image": "Images/dr-seuss.jpg",
    "note": "Dr. Seuss week project."
  },
  {
    "title": "Happy St. Patrick's Day",
    "date": "2025",
    "theme": "holiday",
    "image": "Images/st-patricks-day.jpg",
    "note": "Rainbow and pot of gold."
  },
  {
    "title": "Frog Coloring Page",
    "date": "2025",
    "theme": "animals",
    "image": "Images/frog.jpg",
    "note": "A cheerful frog."
  },
  {
    "title": "Flower CVC Words",
    "date": "2025",
    "theme": "school",
    "image": "Images/cvc-flower.jpg",
    "note": "Learning word families."
  },
  {
    "title": "Free Drawing",
    "date": "2025",
    "theme": "drawing",
    "image": "Images/free-drawing.jpg",
    "note": "Original pencil drawing."
  },
  {
    "title": "Merry and Bright",
    "date": "December 2025",
    "theme": "holiday",
    "image": "Images/2025-12-merry-and-bright.jpg",
    "note": "Christmas project."
  },
  {
    "title": "Peppermint Collage",
    "date": "December 2025",
    "theme": "holiday",
    "image": "Images/2025-12-peppermint-collage.jpg",
    "note": "Holiday collage."
  },
  {
    "title": "Santa Coloring",
    "date": "December 2025",
    "theme": "holiday",
    "image": "Images/2025-12-santa-coloring.jpg",
    "note": "Santa Claus coloring page."
  },
  {
    "title": "Blue Abstract Drawing",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-blue-abstract-drawing.jpg",
    "note": "Blue abstract drawing."
  },
  {
    "title": "Blue House Drawing",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-blue-house-drawing.jpg",
    "note": "Blue house drawing."
  },
  {
    "title": "Blue Shape Drawing",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-blue-shape-drawing.jpg",
    "note": "Blue shape drawing."
  },
  {
    "title": "Blue Yoshi Coloring",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-blue-yoshi-coloring.jpg",
    "note": "Blue Yoshi coloring page."
  },
  {
    "title": "Bunny Pencil Drawing",
    "date": "2025–2026",
    "theme": "animals",
    "image": "Images/2025-2026-bunny-pencil-drawing.jpg",
    "note": "Bunny sketch."
  },
  {
    "title": "Color Stack Drawing",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-color-stack-drawing.jpg",
    "note": "Color stack artwork."
  },
  {
    "title": "Creature Pencil Drawing",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-creature-pencil-drawing.jpg",
    "note": "Creature sketch."
  },
  {
    "title": "Flying Mario",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-flying-mario-coloring.jpg",
    "note": "Flying Mario coloring page."
  },
  {
    "title": "Iguana Coloring",
    "date": "2025–2026",
    "theme": "animals",
    "image": "Images/2025-2026-iguana-coloring.jpg",
    "note": "Iguana coloring page."
  },
  {
    "title": "Mandala Coloring",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-mandala-coloring.jpg",
    "note": "Mandala coloring."
  },
  {
    "title": "Mario and Yoshi",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-mario-and-yoshi-coloring.jpg",
    "note": "Mario and Yoshi coloring page."
  },
  {
    "title": "My Name Flower Craft",
    "date": "2025–2026",
    "theme": "school",
    "image": "Images/2025-2026-my-name-flower-craft.jpg",
    "note": "Name flower craft."
  },
  {
    "title": "Orange Animal Drawing",
    "date": "2025–2026",
    "theme": "animals",
    "image": "Images/2025-2026-orange-animal-drawing.jpg",
    "note": "Orange animal drawing."
  },
  {
    "title": "SpongeBob Coloring",
    "date": "2025–2026",
    "theme": "drawing",
    "image": "Images/2025-2026-spongebob-coloring.jpg",
    "note": "SpongeBob coloring page."
  },
  {
    "title": "UG Bug Word Family",
    "date": "2025–2026",
    "theme": "school",
    "image": "Images/2025-2026-ug-bug-word-family.jpg",
    "note": "Word family activity."
  },
  {
    "title": "Number Strip 1–10",
    "date": "February 2026",
    "theme": "school",
    "image": "Images/2026-02-number-strip-1-to-10.jpg",
    "note": "Counting activity."
  },
  {
    "title": "Valentine Bee Craft",
    "date": "February 2026",
    "theme": "holiday",
    "image": "Images/2026-02-valentine-bee-craft.jpg",
    "note": "Valentine's Day bee craft."
  },
  {
    "title": "Valentine Mouse Story",
    "date": "February 2026",
    "theme": "school",
    "image": "Images/2026-02-valentine-mouse-story.jpg",
    "note": "Valentine mouse story."
  },
  {
    "title": "Kindergarten Graduate",
    "date": "May 2026",
    "theme": "school",
    "image": "Images/2026-05-kindergarten-graduate.jpg",
    "note": "Kindergarten graduation."
  },
  {
    "title": "Mom Portrait Craft",
    "date": "May 2026",
    "theme": "family",
    "image": "Images/2026-05-mom-portrait-craft.jpg",
    "note": "Portrait craft for Mom."
  },
  {
    "title": "Bee Flower Drawing",
    "date": "Spring 2026",
    "theme": "animals",
    "image": "Images/2026-spring-bee-flower-drawing.jpg",
    "note": "Bee and flower drawing."
  },
  {
    "title": "Birdhouse Coloring",
    "date": "Spring 2026",
    "theme": "animals",
    "image": "Images/2026-spring-birdhouse-coloring.jpg",
    "note": "Birdhouse coloring page."
  },
  {
    "title": "Flower Number Craft",
    "date": "Spring 2026",
    "theme": "school",
    "image": "Images/2026-spring-flower-number-craft.jpg",
    "note": "Flower number craft."
  },
  {
    "title": "Flower Pencil Drawing",
    "date": "Spring 2026",
    "theme": "drawing",
    "image": "Images/2026-spring-flower-pencil-drawing.jpg",
    "note": "Flower pencil drawing."
  },
  {
    "title": "Growing CVC Words",
    "date": "Spring 2026",
    "theme": "school",
    "image": "Images/2026-spring-growing-cvc-words.jpg",
    "note": "Growing CVC words activity."
  },
  {
    "title": "Pineapple Print",
    "date": "Spring 2026",
    "theme": "drawing",
    "image": "Images/2026-spring-pineapple-print.jpg",
    "note": "Pineapple print art."
  },
  {
    "title": "Torn Paper Flower",
    "date": "Spring 2026",
    "theme": "drawing",
    "image": "Images/2026-spring-torn-paper-flower.jpg",
    "note": "Torn paper flower craft."
  },
  {
    "title": "Pikachu Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/pikachu-drawing.jpg",
    "note": "Pikachu with yellow coloring and red cheeks."
  },
  {
    "title": "Cotton-Ball Sheep",
    "date": "",
    "theme": "animals",
    "image": "Images/cotton-ball-sheep.jpg",
    "note": "Cotton-ball sheep craft on a printed template."
  },
  {
    "title": "Ocean Scene",
    "date": "",
    "theme": "drawing",
    "image": "Images/ocean-scene.jpg",
    "note": "Colorful fish and underwater plants."
  },
  {
    "title": "Waves and Fish",
    "date": "",
    "theme": "drawing",
    "image": "Images/waves-and-fish.jpg",
    "note": "Three colorful fish beneath blue waves."
  },
  {
    "title": "Dragon Outline",
    "date": "",
    "theme": "drawing",
    "image": "Images/dragon-outline.jpg",
    "note": "A black dragon outline with an orange tail."
  },
  {
    "title": "Beetle Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/beetle-coloring.jpg",
    "note": "Beetle and leaf coloring page, colored by Emmy."
  },
  {
    "title": "Garden Critters Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/garden-critters-coloring.jpg",
    "note": "Garden Critters coloring page, colored by Emmy."
  },
  {
    "title": "Yellow-Headed Bird Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/yellow-headed-bird-coloring.jpg",
    "note": "Bird coloring page with yellow and black coloring."
  },
  {
    "title": "Donut Stress Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/donut-stress-coloring.jpg",
    "note": "Donut stress, try your best! Coloring page colored by Emmy."
  },
  {
    "title": "Red Barn Craft",
    "date": "",
    "theme": "drawing",
    "image": "Images/red-barn-craft.jpg",
    "note": "A red and brown paper barn craft."
  },
  {
    "title": "Autumn Camping Bear Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/autumn-camping-bear-coloring.jpg",
    "note": "Autumn camping coloring page with a bear and campfire."
  },
  {
    "title": "Bat Paper Craft",
    "date": "",
    "theme": "drawing",
    "image": "Images/bat-paper-craft.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Camping Day Puzzle",
    "date": "",
    "theme": "school",
    "image": "Images/camping-day-puzzle.jpg",
    "note": "Camping Day cut-and-paste worksheet completed by Emmy."
  },
  {
    "title": "Colorful Paper Cutout",
    "date": "",
    "theme": "drawing",
    "image": "Images/colorful-paper-cutout.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Mouth Volcano Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/mouth-volcano-coloring.jpg",
    "note": "My mouth is a volcano coloring and writing sheet."
  },
  {
    "title": "Green Ice Cream Collage",
    "date": "",
    "theme": "drawing",
    "image": "Images/green-ice-cream-collage.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Red Green Abstract",
    "date": "",
    "theme": "drawing",
    "image": "Images/red-green-abstract.jpg",
    "note": "Artwork by Emmy."
  },
  {
    "title": "Red White Blue Paint",
    "date": "",
    "theme": "drawing",
    "image": "Images/red-white-blue-paint.jpg",
    "note": "Artwork by Emmy."
  },
  {
    "title": "Ten Frame Collage",
    "date": "",
    "theme": "school",
    "image": "Images/ten-frame-collage.jpg",
    "note": "Colored ten-frame school collage."
  },
  {
    "title": "Hummingbird Red Flowers",
    "date": "",
    "theme": "animals",
    "image": "Images/hummingbird-red-flowers.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Multicolor Cutout",
    "date": "",
    "theme": "drawing",
    "image": "Images/multicolor-cutout.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Rainbow Bird Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/rainbow-bird-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Sunflower Hummingbirds",
    "date": "",
    "theme": "animals",
    "image": "Images/sunflower-hummingbirds.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Color The Insects",
    "date": "",
    "theme": "animals",
    "image": "Images/color-the-insects.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Dinosaur Volcano Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/dinosaur-volcano-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Dinosaurs Coloring Sheet",
    "date": "",
    "theme": "animals",
    "image": "Images/dinosaurs-coloring-sheet.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Green Dinosaur Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/green-dinosaur-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Hatching Dinosaur Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/hatching-dinosaur-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Paper Money Crafts",
    "date": "",
    "theme": "drawing",
    "image": "Images/paper-money-crafts.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Beach Ball Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/beach-ball-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Hatched Egg Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/hatched-egg-drawing.jpg",
    "note": "Drawing on a printed hatched-egg worksheet."
  },
  {
    "title": "Paper Pickaxe",
    "date": "",
    "theme": "drawing",
    "image": "Images/paper-pickaxe.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Purple Jagged Cutout",
    "date": "",
    "theme": "drawing",
    "image": "Images/purple-jagged-cutout.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Colorful Character Strip",
    "date": "",
    "theme": "drawing",
    "image": "Images/colorful-character-strip.jpg",
    "note": "Artwork by Emmy."
  },
  {
    "title": "Hatched Dinosaur Drawing",
    "date": "",
    "theme": "animals",
    "image": "Images/hatched-dinosaur-drawing.jpg",
    "note": "Drawing on a printed hatched-egg worksheet."
  },
  {
    "title": "House Tree Grid",
    "date": "",
    "theme": "drawing",
    "image": "Images/house-tree-grid.jpg",
    "note": "Artwork by Emmy."
  },
  {
    "title": "Red Line Character Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/red-line-character-drawing.jpg",
    "note": "Artwork by Emmy."
  },
  {
    "title": "Dinosaur Riders Coloring",
    "date": "",
    "theme": "animals",
    "image": "Images/dinosaur-riders-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Green Blue Paper Cutout",
    "date": "",
    "theme": "drawing",
    "image": "Images/green-blue-paper-cutout.jpg",
    "note": "Paper craft by Emmy."
  },
  {
    "title": "Welcome First Grade Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/welcome-first-grade-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Yellow Blue Tent Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/yellow-blue-tent-coloring.jpg",
    "note": "Printed coloring page, colored by Emmy."
  },
  {
    "title": "Dolphin Color by Number",
    "date": "",
    "theme": "animals",
    "image": "Images/dolphin-color-by-number.jpg",
    "note": "Dolphin color-by-number page, colored by Emmy."
  },
  {
    "title": "First Day Jitters",
    "date": "",
    "theme": "school",
    "image": "Images/first-day-jitters.jpg",
    "note": "First Day Jitters school worksheet completed by Emmy."
  },
  {
    "title": "Good Listener Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/good-listener-coloring.jpg",
    "note": "Good listener worksheet, colored by Emmy."
  },
  {
    "title": "Schoolbag Design",
    "date": "",
    "theme": "school",
    "image": "Images/schoolbag-design.jpg",
    "note": "Schoolbag coloring and design worksheet completed by Emmy."
  },
  {
    "title": "Pink Marks Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/pink-marks-drawing.jpg",
    "note": "Faint pink marks on paper."
  },
  {
    "title": "Folded Booklet — Partial View",
    "date": "",
    "theme": "drawing",
    "image": "Images/folded-booklet-drawing.jpg",
    "note": "Photograph of a partly folded booklet; some content is hidden by the fold."
  },
  {
    "title": "Campfire Collage",
    "date": "",
    "theme": "drawing",
    "image": "Images/campfire-collage.jpg",
    "note": "Paper campfire collage."
  },
  {
    "title": "Hello September Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/hello-september-coloring.jpg",
    "note": "September coloring page, colored by Emmy."
  },
  {
    "title": "Rainy Neighborhood",
    "date": "",
    "theme": "drawing",
    "image": "Images/rainy-neighborhood.jpg",
    "note": "A neighborhood scene with rain."
  },
  {
    "title": "Citizen Color Code",
    "date": "",
    "theme": "school",
    "image": "Images/citizen-color-code.jpg",
    "note": "Colored school worksheet."
  },
  {
    "title": "Basketball Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/basketball-drawing.jpg",
    "note": "A basketball-themed drawing."
  },
  {
    "title": "Art Book Cover",
    "date": "",
    "theme": "drawing",
    "image": "Images/art-book-cover.jpg",
    "note": "Decorated art book cover."
  },
  {
    "title": "Sketchbook — Yellow Circles",
    "date": "",
    "theme": "drawing",
    "image": "Images/open-sketchbook-yellow-circles.jpg",
    "note": "Open sketchbook spread with yellow circles and drawings."
  },
  {
    "title": "Sketchbook — Black Loops",
    "date": "",
    "theme": "drawing",
    "image": "Images/open-sketchbook-black-loops.jpg",
    "note": "Open sketchbook spread with black looping marks."
  },
  {
    "title": "Spiral Drawing",
    "date": "",
    "theme": "drawing",
    "image": "Images/spiral-drawing.jpg",
    "note": "A spiral drawing."
  },
  {
    "title": "Red Circle and Triangle Collage",
    "date": "",
    "theme": "drawing",
    "image": "Images/red-circle-triangle-collage.jpg",
    "note": "Paper collage with red circles and triangles."
  },
  {
    "title": "We All Belong Coloring",
    "date": "",
    "theme": "school",
    "image": "Images/we-all-belong-coloring.jpg",
    "note": "We All Belong coloring page, colored by Emmy."
  },
  {
    "title": "Dandelion Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/dandelion-coloring.jpg",
    "note": "Dandelion coloring page, colored by Emmy."
  },
  {
    "title": "Autumn Pumpkins Color by Number",
    "date": "",
    "theme": "holiday",
    "image": "Images/autumn-pumpkins-color-number.jpg",
    "note": "Autumn pumpkins color-by-number page, colored by Emmy."
  },
  {
    "title": "House Drawing",
    "date": "",
    "theme": "school",
    "image": "Images/house-rights-drawing.jpg",
    "note": "House drawing on a rights worksheet."
  },
  {
    "title": "Paper Wallet Craft",
    "date": "",
    "theme": "drawing",
    "image": "Images/paper-wallet-craft.jpg",
    "note": "Detail view of a paper wallet craft."
  },
  {
    "title": "Tree Writing and Drawing",
    "date": "",
    "theme": "school",
    "image": "Images/tree-writing-drawing.jpg",
    "note": "A tree drawing with handwriting on a worksheet."
  },
  {
    "title": "Bookshelf Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/bookshelf-coloring.jpg",
    "note": "Bookshelf coloring page, colored by Emmy."
  },
  {
    "title": "SpongeBob and Patrick Coloring",
    "date": "",
    "theme": "drawing",
    "image": "Images/spongebob-patrick-coloring.jpg",
    "note": "SpongeBob and Patrick coloring page, colored by Emmy."
  }
];
