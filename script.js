// Story data structure
const stories = [
    {
        id: 1,
        title: "The Enchanted Forest",
        description: "A magical tale of discovery and friendship in a mystical woodland.",
        emoji: "🌲",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        pages: [
            {
                title: "Chapter 1: The Beginning",
                content: "Once upon a time, in a land far, far away, there existed an enchanted forest. This forest was unlike any other - its trees whispered ancient secrets, and its streams sang melodious songs. Young Emma had heard tales of this magical place from her grandmother, but she never believed them to be true. That was until one foggy morning when she discovered a hidden path behind her cottage."
            },
            {
                title: "Chapter 2: First Steps",
                content: "Emma hesitated at the forest's edge. The morning mist swirled around her ankles like curious spirits. She could hear the gentle rustling of leaves, as if the trees were inviting her in. Taking a deep breath, she stepped forward. Immediately, the forest came alive with color. Flowers bloomed at her feet, and butterflies danced in spirals around her."
            },
            {
                title: "Chapter 3: The Guardian",
                content: "Deep in the forest, Emma encountered a magnificent creature - a silver stag with antlers that sparkled like starlight. 'Welcome, young one,' the stag spoke, its voice echoing in her mind. 'I am the Guardian of this forest. Few humans can see us, but your heart is pure and your intentions noble. What brings you to our realm?'"
            },
            {
                title: "Chapter 4: The Quest",
                content: "The Guardian told Emma of a great task. The forest's heart, a crystal of pure light, had been dimming. Without it, the magic would fade, and the forest would become ordinary. 'Will you help us?' the Guardian asked. Emma nodded without hesitation. She knew this was her destiny, the reason she had been drawn to this magical place."
            },
            {
                title: "Chapter 5: The Journey",
                content: "Armed with courage and guided by fireflies, Emma journeyed deeper into the forest. She crossed crystal streams, climbed ancient oaks, and navigated through caverns that glowed with bioluminescent moss. Each step brought new wonders and new challenges. But Emma pressed on, remembering the Guardian's trust in her."
            },
            {
                title: "Epilogue",
                content: "At the heart of the forest, Emma found the crystal, covered in shadow. With a touch of her hand and a wish from her heart, the shadows dispersed. The crystal blazed with renewed light, spreading magic throughout the forest once more. The Guardian appeared beside her, bowing deeply. 'You have saved us, brave Emma. This forest will forever be your sanctuary.' And so it was."
            }
        ]
    },
    {
        id: 2,
        title: "Journey to the Stars",
        description: "An astronaut's adventure beyond the known universe.",
        emoji: "🚀",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        pages: [
            {
                title: "Launch Day",
                content: "Captain Sarah Chen stood before the towering spacecraft, her heart pounding with anticipation. Today was the day she had trained her entire life for - humanity's first voyage beyond our solar system. The mission: to explore the mysterious signals coming from a distant star system. As the countdown began, Sarah took one last look at Earth, knowing she might never see it the same way again."
            },
            {
                title: "Into the Void",
                content: "The acceleration pressed Sarah into her seat as the spacecraft pierced through the atmosphere. Within hours, Earth was just a pale blue dot behind her. The void of space stretched endlessly in all directions. But Sarah felt no fear, only wonder. She was about to go where no human had gone before, to see sights no eyes had ever witnessed."
            },
            {
                title: "The Discovery",
                content: "After months of travel through the cosmic darkness, Sarah's instruments detected something extraordinary. A structure, massive and intricate, orbiting a distant star. It was artificial, there was no doubt. Someone - or something - had built it. As her ship approached, the structure came alive with lights, as if welcoming her."
            },
            {
                title: "First Contact",
                content: "Sarah's heart raced as she received the first transmission. It wasn't just noise or random signals - it was a message, a greeting in mathematics and physics. A universal language. Through her ship's AI translator, she began to understand. The builders of this structure were called the Architects, and they had been waiting for humanity to reach the stars."
            },
            {
                title: "The Exchange",
                content: "The Architects shared their knowledge - technologies that could heal worlds, energy sources that could power civilizations, and wisdom accumulated over millions of years. In return, they asked only for humanity's art, music, and stories. 'We have mastered science,' they communicated, 'but the beauty of individual experience, that is what we seek.'"
            },
            {
                title: "Return Home",
                content: "Sarah's journey home took just as long as the voyage out, but she didn't mind. She had time to process all she had learned and seen. When Earth finally came into view again, that pale blue dot growing larger, she smiled. Humanity was no longer alone in the universe, and she had been the bridge between worlds. The real adventure, she realized, was only just beginning."
            }
        ]
    },
    {
        id: 3,
        title: "The Last Dragon",
        description: "A tale of courage, friendship, and the end of an era.",
        emoji: "🐉",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        pages: [
            {
                title: "The Legend",
                content: "In the kingdom of Aethermoor, dragons were thought to be extinct. They had vanished centuries ago, their existence fading into legend and myth. But young Marcus, an apprentice blacksmith, never stopped believing. In his grandfather's old journals, he had read accounts of the last dragon sighting. The creature was said to have retreated to the Obsidian Mountains."
            },
            {
                title: "The Journey Begins",
                content: "Against the advice of everyone in the village, Marcus packed his supplies and set out for the mountains. The journey was treacherous - steep cliffs, freezing winds, and dangerous wildlife tested his resolve. But Marcus pressed on, driven by an inexplicable need to know the truth. Were dragons really gone, or was one still out there, alone?"
            },
            {
                title: "The Cave",
                content: "After weeks of searching, Marcus discovered a massive cave hidden behind a waterfall. Inside, the walls were scorched black, and piles of ancient gold and jewels lay scattered about. His heart thundering, Marcus ventured deeper. Then he heard it - a sound like thunder, but rhythmic. Breathing. Something massive was breathing in the darkness ahead."
            },
            {
                title: "The Meeting",
                content: "From the shadows emerged the dragon - ancient, magnificent, and utterly alone. Its scales shimmered like midnight stars, and its eyes held the wisdom of ages. 'I am Drakethor,' the dragon spoke, its voice resonating through Marcus's very bones. 'I am the last of my kind. Why have you sought me out, human child?'"
            },
            {
                title: "The Truth",
                content: "Drakethor told Marcus the truth about the dragons' disappearance. They hadn't been killed or driven away - they had chosen to leave, sensing that the age of magic was ending. But Drakethor had stayed, unable to abandon the world he loved. 'I have been so lonely,' the dragon admitted. 'I thought I would die here, forgotten, with no one to remember what dragons truly were.'"
            },
            {
                title: "A New Beginning",
                content: "Marcus promised Drakethor that dragons would never be forgotten. He would share the dragon's story, not as myth, but as history. The dragon taught Marcus the old language, shared ancient wisdom, and showed him magic that still lingered in the world. When Marcus finally returned to his village, he came not as a blacksmith's apprentice, but as the keeper of dragon lore. Drakethor was no longer alone, and the world would remember."
            }
        ]
    },
    {
        id: 4,
        title: "The Time Keeper's Clock",
        description: "A mysterious clockmaker who can manipulate time itself.",
        emoji: "⏰",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        pages: [
            {
                title: "The Shop",
                content: "On a narrow cobblestone street in Prague stood a clock shop that few people noticed. Those who did often walked past, for the shop seemed to exist in a state of perpetual twilight. But young Clara was different. She was drawn to the shop like a moth to flame. When she pushed open the door, hundreds of clocks ticked in perfect unison, creating a symphony of time."
            },
            {
                title: "The Clockmaker",
                content: "The shopkeeper was impossibly old, yet moved with the grace of youth. 'Welcome, Clara,' he said, though she had never told him her name. 'I am Chronos, keeper of time. I have been waiting for you.' He gestured to the walls lined with extraordinary clocks - some ran backwards, others showed impossible dates, and one seemed to display multiple times simultaneously."
            },
            {
                title: "The Gift",
                content: "Chronos presented Clara with a pocket watch unlike any other. 'This watch,' he explained, 'does not tell time. It commands it. But use it wisely, for every second you borrow must eventually be returned.' Clara held the watch, feeling its weight and warmth. She could sense the power within it, a power that both thrilled and terrified her."
            },
            {
                title: "The Temptation",
                content: "At first, Clara used the watch sparingly - an extra hour to study, a moment frozen to appreciate a sunset. But gradually, she began using it more. She paused time to avoid awkward conversations, rewound moments to correct mistakes, and fast-forwarded through boring classes. Life became perfect, controllable. But something felt wrong."
            },
            {
                title: "The Price",
                content: "One day, Clara noticed she couldn't remember certain events clearly. Her memories were fragmenting, fading like old photographs. She rushed back to Chronos's shop. 'You have borrowed too much time,' he explained gravely. 'Time is not a resource to be hoarded. It must flow naturally. Every moment you skip or repeat diminishes your connection to reality.'"
            },
            {
                title: "The Choice",
                content: "Chronos offered Clara a choice: keep the watch and eventually lose herself completely, or return it and let time flow as it should. The decision was agonizing, but Clara knew what she had to do. She placed the watch in Chronos's weathered hands. As she left the shop, she felt lighter, freer. Time was precious not because she could control it, but because each moment was fleeting and irreplaceable."
            }
        ]
    }
];

// Global state
let currentStory = null;
let currentPageIndex = 0;

// Initialize the app
function init() {
    renderLibrary();
    setupEventListeners();
}

// Render the library of books
function renderLibrary() {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';
    
    stories.forEach((story, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.style.animationDelay = `${index * 0.1}s`;
        bookCard.onclick = () => openBook(story);
        
        bookCard.innerHTML = `
            <div class="book-thumbnail" style="background: ${story.gradient}">
                ${story.emoji}
            </div>
            <div class="book-info">
                <div class="book-title">${story.title}</div>
                <div class="book-description">${story.description}</div>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

// Open a book for reading
function openBook(story) {
    currentStory = story;
    currentPageIndex = 0;
    
    const bookReader = document.getElementById('bookReader');
    bookReader.classList.remove('hidden');
    
    updatePages();
}

// Close the book reader
function closeBook() {
    const bookReader = document.getElementById('bookReader');
    bookReader.classList.add('hidden');
    currentStory = null;
    currentPageIndex = 0;
}

// Update the displayed pages
function updatePages() {
    if (!currentStory) return;
    
    const leftPage = currentStory.pages[currentPageIndex];
    const rightPage = currentStory.pages[currentPageIndex + 1];
    
    const pageLeftContent = document.getElementById('pageLeftContent');
    const pageRightContent = document.getElementById('pageRightContent');
    const pageLeftNumber = document.getElementById('pageLeftNumber');
    const pageRightNumber = document.getElementById('pageRightNumber');
    const pageIndicator = document.getElementById('pageIndicator');
    
    // Update left page
    if (leftPage) {
        pageLeftContent.innerHTML = `
            <h2>${leftPage.title}</h2>
            <p>${leftPage.content}</p>
        `;
        pageLeftNumber.textContent = currentPageIndex + 1;
    } else {
        pageLeftContent.innerHTML = '';
        pageLeftNumber.textContent = '';
    }
    
    // Update right page
    if (rightPage) {
        pageRightContent.innerHTML = `
            <h2>${rightPage.title}</h2>
            <p>${rightPage.content}</p>
        `;
        pageRightNumber.textContent = currentPageIndex + 2;
    } else {
        pageRightContent.innerHTML = '';
        pageRightNumber.textContent = '';
    }
    
    // Update page indicator
    const totalPages = currentStory.pages.length;
    const currentDisplayStart = currentPageIndex + 1;
    const currentDisplayEnd = rightPage ? currentPageIndex + 2 : currentPageIndex + 1;
    pageIndicator.textContent = `${currentDisplayStart}${rightPage ? '-' + currentDisplayEnd : ''} of ${totalPages}`;
    
    // Update button states
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= totalPages - 2 && !rightPage;
}

// Navigate to previous page
function prevPage() {
    if (currentPageIndex > 0) {
        addPageTurnAnimation();
        currentPageIndex -= 2;
        if (currentPageIndex < 0) currentPageIndex = 0;
        setTimeout(updatePages, 300);
    }
}

// Navigate to next page
function nextPage() {
    if (currentStory && currentPageIndex < currentStory.pages.length - 1) {
        addPageTurnAnimation();
        currentPageIndex += 2;
        // Ensure we don't go beyond the last page
        if (currentPageIndex >= currentStory.pages.length) {
            currentPageIndex = currentStory.pages.length - 1;
        }
        setTimeout(updatePages, 300);
    }
}

// Add page turn animation
function addPageTurnAnimation() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('turning');
        setTimeout(() => page.classList.remove('turning'), 600);
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('closeBook').addEventListener('click', closeBook);
    document.getElementById('prevPage').addEventListener('click', prevPage);
    document.getElementById('nextPage').addEventListener('click', nextPage);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!currentStory) return;
        
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            prevPage();
        } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            nextPage();
        } else if (e.key === 'Escape') {
            closeBook();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
