export const readStatus = {
  READ: "read",
  READING: "reading",
  TO_READ: "to-read",
}

export const readingListData = [
  {
    title: "Eureka",
    subtitle: "A Prose Poem",
    description: `The last of Edgar Allan Poe’s books to be published during
      his lifetime, Eureka, A Prose Poem is a strange book indeed...`,
    author: "Edgar Allan Poe",
    genres: ["Poetry", "Science", "Philosophy"],
    url: "https://www.goodreads.com/book/show/62440.Eureka",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347947414i/62440.jpg",
    visible: true,
    readYear: "2025",
    readStatus: readStatus.TO_READ,
  },
  {
    title: "America's Great Depression",
    subtitle: null,
    description: `A staple of modern economic literature and crucial for understanding
      a pivotal event in American and world history...`,
    author: "Murray N. Rothbard",
    genres: ["Economics", "American History"],
    url: "https://www.goodreads.com/book/show/81980.America_s_Great_Depression",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568753869i/81980.jpg",
    visible: false,
    readYear: "2025",
    readStatus: readStatus.TO_READ,
  },
  {
    title: "Frames of Mind",
    subtitle: "The Theory of Multiple Intelligences",
    description: `A revolutionary challenge to the widely held notion that
      intelligence is a single general capacity possessed by every individual...`,
    author: "Howard Gardner",
    genres: ["Psychology", "Education"],
    url: "https://www.goodreads.com/book/show/294035.Frames_Of_Mind",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442332553i/294035.jpg",
    visible: true,
    readYear: "2025",
    readStatus: readStatus.TO_READ,
  },
  {
    title: "Patriot Battles",
    subtitle: "How the War of Independence Was Fought",
    description: `Drawing on hundreds of specialist sources, the comprehensive
      one-volume study of the military aspects of the War of Independence...`,
    author: "Michael Stephenson",
    genres: ["Psychology", "Education"],
    url: "https://www.goodreads.com/book/show/678657.Patriot_Battles",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528723105i/678657.jpg",
    visible: false,
    readYear: "2025",
    readStatus: readStatus.TO_READ,
  },
  {
    title: "Thomas Jefferson and the Tripoli Pirates",
    subtitle: "The Forgotten War that Changed American History",
    description: `Only weeks after President Jefferson's, he decided to confront
      the Tripoli pirates who had been kidnapping American ships and sailors...`,
    author: "Brian Kilmeade, Don Yaeger",
    genres: ["American History", "War"],
    url: "https://www.goodreads.com/book/show/24611888-thomas-jefferson-and-the-tripoli-pirates",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434569443i/24611888.jpg",
    visible: true,
    readYear: "2025",
    readStatus: readStatus.READ,
  },
  {
    title: "The Indifferent Stars Above",
    subtitle: "The Harrowing Saga of the Donner Party",
    description: `In April of 1846, twenty-one-year-old Sarah Graves, intent on a
      better future, set out west from Illinois with her new husband, ...`,
    author: "Daniel James Brown",
    genres: ["American History", "Survival"],
    url: "https://www.goodreads.com/book/show/36589918-the-indifferent-stars-above",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510605517i/36589918.jpg",
    visible: true,
    readYear: "2025",
    readStatus: readStatus.READ,
  },
  {
    title: "Endurance",
    subtitle: "Shackleton's Incredible Voyage",
    description: `The harrowing tale of British explorer Ernest Shackleton's 1914
      attempt to reach the South Pole, one of the greatest adventure stories of
      the modern age.`,
    author: "Alfred Lansing",
    genres: ["History", "Adventure", "Survival"],
    url: "https://www.goodreads.com/book/show/139069.Endurance",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391329559i/139069.jpg",
    visible: true,
    readYear: "2024",
    readStatus: readStatus.READ,
  },
  {
    title: "The Staff Engineer's Path",
    subtitle: "Guide for Individual Contributors Navigating Growth and Change",
    description: `The staff engineer's path allows engineers to contribute at a
      high level as role models, driving big projects, determining technical
      strategy, and raising everyone's skills...`,
    author: "Tanya Reilly",
    genres: ["Career", "Engineering"],
    url: "https://www.goodreads.com/book/show/61058107-the-staff-engineer-s-path",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661205628i/61058107.jpg",
    visible: true,
    readYear: "2024",
    readStatus: readStatus.READ,
  },
  {
    title: "Growth Mindset",
    subtitle: "Skyrocket Your Confidence and Destroy Your Fear",
    description: `Achieve massive success today by mastering your emotions,
      increasing your confidence, overcoming your fears, and being happier...`,
    author: "Brian Cagneey",
    genres: ["Life Coaching", "Psychology"],
    url: "https://www.goodreads.com/book/show/33670327-growth-mindset",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483417316i/33670327.jpg",
    visible: true,
    readYear: "2024",
    readStatus: readStatus.READ,
  },
  {
    title: "Forever",
    subtitle: null,
    description: `Through the eyes of Cormac O'Connor -- granted immortality as
      long as he never leaves the island of Manhattan -- we watch New York grow
      from a tiny settlement to the thriving metropolis of today...`,
    author: "Pete Hamill",
    genres: ["Fiction", "Fantasy", "Time Travel"],
    url: "https://www.goodreads.com/book/show/148465.Forever",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442120422i/148465.jpg",
    visible: true,
    readYear: "2024",
    readStatus: readStatus.READ,
  },
  {
    title: "Zero to One",
    subtitle: "Notes on Startups, or How to Build the Future",
    description: `The great secret of our time is that there are still uncharted
      frontiers to explore and new inventions to create. ...`,
    author: "Peter Thiel, Blake Masters",
    genres: ["Entrepreneurship", "Technology"],
    url: "https://www.goodreads.com/book/show/18050143-zero-to-one",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg",
    visible: true,
    readYear: "2024",
    readStatus: readStatus.READ,
  },
]
