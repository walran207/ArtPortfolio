// Sample art data - In a real application, this would come from a database or API
const artData = [
    {
        id: 1,
        title: "Bluebird Haven",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-1.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "18\" x 24\"",
        price: "₱2,500",
        description: "Two bluebirds rest on a cozy birdhouse surrounded by blooming pink flowers and lush greenery.",
        availability: "available" // "available" | "sold"
    },
    {
        id: 2,
        title: "Birds of Harmony",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-2.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "18\" x 24\"",
        price: "₱2,000",
        description: "Five colorful birds perch together on a branch beneath a bright, dreamy sky.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 3,
        title: "Pink Rose Trio",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-3.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱800",
        description: "Three soft pink roses bloom beautifully against a dark background with rich green leaves.",
        availability: "sold"
    },
    {
        id: 4,
        title: "Tulip Glow",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-4.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "Bright tulips rise gracefully with small blossoms, standing out against a deep black backdrop.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 5,
        title: "Garden Songbirds",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-5.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "18\" x 25\"",
        price: "₱2,500",
        description: "Two birds sit on flowering branches, framed by vibrant blossoms and a pastel sky.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 6,
        title: "Riverside Serenity",
        artist: "Krissha Pearl Dela Peña",
        category: "landscape",
        image: "assets/images/art-6.jpg",
        medium: "Digital Photography",
        year: "2025",
        dimensions: "18\" x 25\"",
        price: "₱2,400",
        description: "A peaceful countryside scene with a nipa hut, winding path, river, and mountain view.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 7,
        title: "Valley of Falls",
        artist: "Krissha Pearl Dela Peña",
        category: "landscape",
        image: "assets/images/art-7.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "18\" x 24\"",
        price: "₱2,500",
        description: "A scenic landscape of rolling fields, waterfalls, and mountains under dramatic skies.",
        availability: "available" // "available" | "sold"
    },
    {
        id: 8,
        title: "Crowned Pair",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-8.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "18\" x 25\"",
        price: "₱2,600",
        description: "Two elegant birds with crown-like crests perch on a branch beside bright floral accents.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 9,
        title: "Red Rose Beauty",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-9.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱900",
        description: "Three rich red roses bloom boldly among detailed green leaves.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 10,
        title: "Lotus Calm",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-10.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱700",
        description: "Pink lotus flowers and buds rise gently above broad green leaves in a calm, natural setting.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 11,
        title: "The Butterfly and the Bloom",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-11.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱600",
        description: "This painting features a vivid, multicolored butterfly hovering over a group of bright pink flowers, including a central open blossom. The background uses a striking diagonal gradient of teal and yellow to create a sense of movement and light.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 12,
        title: "Tulips in the Sun",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-12.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱600",
        description: "A graceful arrangement of five pink tulips reaches upward toward a monarch-style butterfly in the upper right. The soft, glowing yellow light in the corner suggests a warm morning in a garden.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 13,
        title: "Still Life with Patterned Vase",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-13.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱2,500",
        description: "A lush and colorful bouquet of various flowers—daisies, zinnias, and lilies—is arranged in an intricately detailed brown vase. The vase stands out with its traditional woven-style pattern, set against a calm, earthy green and gold background.",
        availability: "available" // "available" | "sold"
    },
    {
        id: 14,
        title: "Xeon & Agnus",
        artist: "Krissha Pearl Dela Peña",
        category: "abstract",
        image: "assets/images/art-14.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "",
        description: "This vibrant abstract painting is a meaningful gift from Meg (Agnus) to her high school friend Krissha (Xeon), the owner of this website. The artwork celebrates their long-standing friendship and the shared joy of playing the Roblox game Grow a Garden together.",
        availability: "collection" // "available" | "sold"
    },
    {
        id: 15,
        title: "Wildflowers in Glass Vase",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-15.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "An acrylic still life painting showing a cheerful bouquet of white, pink, purple, and yellow daisies and other wildflowers in a clear glass vase. The background is a gradient of green and yellow, with some fallen petals on the surface below.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 16,
        title: "Basket of Vibrant Roses",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-16.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "An acrylic painting depicting a woven basket overflowing with red, pink, and yellow roses and green leaves. The background is a soft, warm blend of yellow, orange, and pink hues with a bokeh effect.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 17,
        title: "Hydrangea and Lupine Arrangement",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-17.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "A still life painting featuring a lush arrangement of blue, pink, and white hydrangeas, along with tall stalks of purple, pink, and yellow lupines in a dark grey vase. The background is a soft blend of blue, green, and purple.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 18,
        title: "Acrylic Daisy Painting for Sale",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-18.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "A photograph of an acrylic painting displayed for sale, showing a bouquet of colorful daisies in a clear vase. A pink price tag attached to the top left corner indicates it is a 20x15 acrylic painting priced at 2,300.",
        availability: "sold" // "available" | "sold"
    },
            {
        id: 19,
        title: "Double Doghouse Delight",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-19.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱2000",
        description: "An acrylic painting featuring two dogs, a small terrier mix and a fluffy white dog, relaxing inside a large wooden doghouse with a blue roof. The doghouse is situated in a green, grassy field with wildflowers and a scenic landscape in the background.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 20,
        title: "Coco's Portrait",
        artist: "Krissha Pearl Dela Peña",
        category: "wildlife",
        image: "assets/images/art-20.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "₱1500",
        description: "A portrait painting of a large, fluffy white dog named COCO lying on a green lawn. Behind the dog is its personalized wooden doghouse with a black roof, under a blue sky with clouds.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 21,
        title: "Bouquet in a Blue Vase",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-21.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "A symphony of petals in every hue dancing from a deep blue vase, celebrating the wild and colorful energy of summer.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 22,
        title: "Roses and Butterfly",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-22.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "A delicate visitor pausing for a secret conversation with three radiant roses, frozen in a warm, sun-kissed afternoon.",
        availability: "sold" // "available" | "sold"
    },
        {
        id: 23,
        title: "Trio of Blooms with Butterfly",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-23.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "10\" x 15\"",
        price: "₱600",
        description: "Bold, rhythmic blooms in fiery yellow and deep magenta reach upward, inviting a passing butterfly into their vibrant world.",
        availability: "sold" // "available" | "sold"
    },
    {
        id: 24,
        title: "Sepia Dream of a Pegasus",
        artist: "Krissha Pearl Dela Peña",
        category: "classical",
        image: "assets/images/art-24.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "",
        description: "An ethereal scene where a mythic Pegasus gallops through a sky of coffee-toned clouds and shimmering stars.",
        availability: "collection" // "available" | "sold"
    },
        {
        id: 25,
        title: "Uncle Sam Recruitment",
        artist: "Krissha Pearl Dela Peña",
        category: "portrait",
        image: "assets/images/art-25.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "",
        description: "A vibrant, hand-painted tribute to iconic history, capturing the stern and unwavering spirit of an American classic.",
        availability: "collection" // "available" | "sold"
    },
     {
        id: 26,
        title: "Graphic Mona Lisa",
        artist: "Krissha Pearl Dela Peña",
        category: "classical",
        image: "assets/images/art-26.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "",
        description: "A modern, geometric reimagining of the world's most famous smile, framed by bold lines and a striking blue horizon.",
        availability: "collection" // "available" | "sold"
    },
    {
        id: 27,
        title: "The Spirit of Challe Fen Challe",
        artist: "Krissha Pearl Dela Peña",
        category: "classical",
        image: "assets/images/art-27.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "15\" x 20\"",
        price: "",
        description: "A high-energy anime portrait where the flash of a warrior's blade meets a whirlwind of glowing emerald energy.",
        availability: "collection" // "available" | "sold"
    },
    {
        id: 28,
        title: "Vibrant Echoes",
        artist: "Krissha Pearl Dela Peña",
        category: "floral",
        image: "assets/images/art-28.jpg",
        medium: "Acrylic on Canvas",
        year: "2025",
        dimensions: "20\" x 15\"",
        price: "₱2200",
        description: "A bold, high-contrast floral study featuring a vivid bouquet in a pink amphora, set against a deep midnight backdrop..",
        availability: "sold" // "available" | "sold"
    },







];

// DOM elements
const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("artModal");
const closeModal = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const carouselContainer = document.querySelector(".carousel-container");
let carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const themeToggle = document.getElementById("checkbox");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

let currentSlide = 0;
let isCarouselAnimating = false;
let carouselInterval;

// Initialize the gallery
document.addEventListener("DOMContentLoaded", function() {
    initClientCarousel();
    displayArtworks(artData);
    setupEventListeners();
    setupCarousel();
    startCarousel();
    setActiveNavLink();
    loadTheme();
});


// Display artworks in the gallery sorted by availability
function displayArtworks(artworks) {
    galleryGrid.innerHTML = "";
    
    // Sort artworks: "available" comes before "sold"
    const sortedArtworks = [...artworks].sort((a, b) => {
        const statusA = getAvailabilityStatus(a);
        const statusB = getAvailabilityStatus(b);
        
        const priority = { "collection": 1, "available": 2, "sold": 3 };
        return priority[statusA] - priority[statusB];
    });

    sortedArtworks.forEach(artwork => {
        const artItem = createArtworkElement(artwork);
        galleryGrid.appendChild(artItem);
    });

    addImageLoadingEffect();
}

// Create individual artwork element
function createArtworkElement(artwork) {
    const artItem = document.createElement("div");
    artItem.className = "art-item";
    artItem.dataset.category = artwork.category;
    artItem.dataset.id = artwork.id;

    const availability = getAvailabilityStatus(artwork);
    if (availability === "sold") {
        artItem.classList.add("is-sold");
    }
     
    artItem.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}" class="art-image">
        <span class="category-tag">${capitalizeFirst(artwork.category)}</span>
        <div class="art-info">
            <div class="art-title-row">
                <h3 class="art-title">${artwork.title}</h3>
                <span class="availability-pill availability-pill--${availability}">${getAvailabilityLabel(availability)}</span>
            </div>
            <p class="art-description">${artwork.description}</p>
            <div class="art-details-bottom">
                <p class="art-medium-year">${artwork.medium}, ${artwork.year}</p>
                <p class="price">${artwork.price}</p>
            </div>
        </div>
    `;
     
    // Add click event to open modal
    artItem.addEventListener("click", () => openModal(artwork));
     
    return artItem;
}

// Filter artworks by category
function filterArtworks(category) {
    const filteredArtworks = category === "all" 
        ? artData 
        : artData.filter(artwork => artwork.category === category);
    
    displayArtworks(filteredArtworks);
}

// Open modal with artwork details
function openModal(artwork) {
    document.getElementById("modalImage").src = artwork.image;
    document.getElementById("modalTitle").textContent = artwork.title;
    document.getElementById("modalArtist").textContent = `by ${artwork.artist}`;
    document.getElementById("modalCategory").textContent = capitalizeFirst(artwork.category);
    document.getElementById("modalMedium").textContent = artwork.medium;
    document.getElementById("modalYear").textContent = artwork.year;
    document.getElementById("modalDimensions").textContent = artwork.dimensions;

    const availability = getAvailabilityStatus(artwork);
    const modalPrice = document.getElementById("modalPrice");
    modalPrice.textContent = artwork.price;

    const modalAvailability = document.getElementById("modalAvailability");
    if (modalAvailability) {
        modalAvailability.textContent = getAvailabilityLabel(availability);
        
        // REMOVE ALL THREE potential status classes to prevent color "leaking"
        modalAvailability.classList.remove(
            "availability-tag--sold", 
            "availability-tag--available", 
            "availability-tag--collection"
        );
        
        // Add the correct new class
        modalAvailability.classList.add(`availability-tag--${availability}`);
    }

    document.getElementById("modalDescription").textContent = artwork.description;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close modal
function closeModalFunction() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");
            // Filter artworks
            const category = button.dataset.filter;
            filterArtworks(category);
        });

         // --- Fullscreen Image Logic ---
        const fsOverlay = document.getElementById("imageFullscreenOverlay");
        const fsImage = document.getElementById("fullscreenImage");
        const modalImg = document.getElementById("modalImage");
        const fsClose = document.querySelector(".fullscreen-close");

        // Open Fullscreen
        modalImg.addEventListener("click", () => {
            fsImage.src = modalImg.src;
            fsOverlay.style.display = "flex";
        });

        // Close Fullscreen (Clicking 'X' or the background)
        const closeFullscreen = () => {
            fsOverlay.style.display = "none";
        };

        fsClose.addEventListener("click", closeFullscreen);
        fsOverlay.addEventListener("click", (e) => {
            if (e.target !== fsImage) {
                closeFullscreen();
            }
        });

        // Close Fullscreen with Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && fsOverlay.style.display === "flex") {
                closeFullscreen();
            }
        });
    });
    
    // Modal close events
    closeModal.addEventListener("click", closeModalFunction);
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModalFunction();
        }
    });
    
    // Mobile navigation
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector(".navbar");
                const navbarOffset = (navbar ? navbar.offsetHeight : 0) + 16; // Account for fixed navbar
                const offsetTop = targetSection.offsetTop - navbarOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener("scroll", updateNavbarBackground);

    // Carousel navigation buttons
    prevBtn.addEventListener("click", () => {
        transitionCarousel("prev");
        resetCarouselInterval();
    });

    nextBtn.addEventListener("click", () => {
        transitionCarousel("next");
        resetCarouselInterval();
    });

    // Theme toggle
    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        updateThemeIcons();
        updateNavbarBackground(); // Call to update navbar immediately on theme change
    });
}

// Function to update navbar background based on theme and scroll
function updateNavbarBackground() {
    const navbar = document.querySelector(".navbar");
    if (document.body.classList.contains("dark-mode")) {
        navbar.style.background = "#000000"; // Always black in dark mode
    } else if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
    }
    setActiveNavLink();
}

// Carousel functionality
function setupCarousel() {
    if (!carouselContainer) return;

    carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
    if (carouselSlides.length === 0) return;

    carouselSlides.forEach((slide, index) => {
        slide.classList.remove("is-active", "is-animating", "from-left", "from-right", "to-center");
        if (index === 0) slide.classList.add("is-active");
    });

    currentSlide = 0;
    isCarouselAnimating = false;
}

function startCarousel() {
    if (!carouselContainer || carouselSlides.length <= 1) return;
    carouselInterval = setInterval(() => {
        transitionCarousel("next");
    }, 5000); // Change image every 5 seconds
}

function transitionCarousel(direction) {
    if (!carouselContainer || carouselSlides.length <= 1) return;
    if (isCarouselAnimating) return;

    const isNext = direction !== "prev";
    const delta = isNext ? 1 : -1;
    const nextIndex =
        (currentSlide + delta + carouselSlides.length) % carouselSlides.length;

    const current = carouselSlides[currentSlide];
    const next = carouselSlides[nextIndex];

    isCarouselAnimating = true;

    next.classList.remove("is-active", "is-animating", "from-left", "from-right", "to-center");
    next.classList.add("is-animating", isNext ? "from-right" : "from-left");

    // Force reflow so the transition starts reliably.
    void next.offsetHeight;

    next.classList.add("to-center");
    next.classList.remove(isNext ? "from-right" : "from-left");

    let settled = false;
    const settle = () => {
        if (settled) return;
        settled = true;

        next.classList.remove("is-animating", "to-center");
        next.classList.add("is-active");
        current.classList.remove("is-active");
        currentSlide = nextIndex;
        isCarouselAnimating = false;
    };

    const onEnd = (e) => {
        if (e.target !== next || e.propertyName !== "transform") return;
        next.removeEventListener("transitionend", onEnd);
        settle();
    };

    next.addEventListener("transitionend", onEnd);
    setTimeout(settle, 1100); // fallback in case transitionend doesn't fire
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarousel();
}

// Set active navigation link based on scroll position
function setActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navbar = document.querySelector(".navbar");
    const navbarOffset = (navbar ? navbar.offsetHeight : 0) + 16;
    const probeY = window.scrollY + navbarOffset;

    let currentActive = sections[0]?.getAttribute("id") || "home";

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (probeY >= sectionTop && probeY < sectionBottom) {
            currentActive = section.getAttribute("id");
            break;
        }
    }

    const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (nearBottom && sections.length) {
        currentActive = sections[sections.length - 1].getAttribute("id");
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentActive)) {
            link.classList.add("active");
        }
    });
}

// Load theme from local storage
function loadTheme() {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        savedTheme = "dark";
        localStorage.setItem("theme", savedTheme);
    }
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        themeToggle.checked = false;
    }
    updateThemeIcons();
    updateNavbarBackground(); // Apply navbar background on initial load based on theme
}

// Update theme icons based on current mode
function updateThemeIcons() {
    if (document.body.classList.contains("dark-mode")) {
        sunIcon.style.opacity = "0";
        moonIcon.style.opacity = "1";
    } else {
        sunIcon.style.opacity = "1";
        moonIcon.style.opacity = "0";
    }
}

// Utility function to capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getAvailabilityStatus(artwork) {
    const raw = artwork?.availability ?? artwork?.status ?? artwork?.availabilityStatus ?? "";
    const normalized = String(raw).trim().toLowerCase();

    if (artwork?.sold === true) return "sold";
    // Add check for collection
    if (normalized === "collection") return "collection"; 
    if (normalized === "sold" || normalized === "unavailable" || normalized === "not available") return "sold";
    return "available";
}

function getAvailabilityLabel(status) {
    if (status === "sold") return "Sold";
    if (status === "collection") return "Collection"; // New Label
    return "Available";
}

// Add loading animation for images
function addImageLoadingEffect() {
    const images = document.querySelectorAll(".art-image");
    
    images.forEach(img => {
        img.style.transition = "opacity 0.3s ease";

        if (img.complete) {
            img.style.opacity = "1";
            return;
        }

        img.style.opacity = "0";
        const onLoad = () => {
            img.style.opacity = "1";
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onError);
        };
        const onError = () => {
            img.style.opacity = "1";
            img.removeEventListener("load", onLoad);
            img.removeEventListener("error", onError);
        };

        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
    });
}

// Search functionality (bonus feature)
function addSearchFunctionality() {
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search artworks...";
    searchInput.className = "search-input";
    
    const filterContainer = document.querySelector(".filter-container");
    filterContainer.insertBefore(searchInput, filterContainer.firstChild);
    
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredArtworks = artData.filter(artwork => 
            artwork.title.toLowerCase().includes(searchTerm) ||
            artwork.artist.toLowerCase().includes(searchTerm) ||
            artwork.category.toLowerCase().includes(searchTerm)
        );
        displayArtworks(filteredArtworks);
    });
}

// ==========================================
// CLIENTS 3D CAROUSEL LOGIC
// ==========================================

// 1. Client Data (Replace placeholder images with real client images)
// Using placeholder.com for demonstration so it works immediately.
const clientData = [
    { id: 1, image: "assets/images/client-2.jpg" },
    { id: 2, image:  "assets/images/client-3.jpg" },
    { id: 3, image: "assets/images/client-1.jpg" },
    { id: 3, image: "assets/images/client-4.jpg" },
    { id: 3, image: "assets/images/client-5.jpg" },
    { id: 3, image: "assets/images/client-6.jpg" }

];

const clientTrack = document.getElementById('clientTrack');
const clientPrevBtn = document.querySelector('.client-nav.prev');
const clientNextBtn = document.querySelector('.client-nav.next');
let currentClientIndex = 2; // Start in the middle (index 2 out of 5 items)

// 2. Initialize Carousel
function initClientCarousel() {
    if (!clientTrack || clientData.length === 0) return;

    // Clear existing content
    clientTrack.innerHTML = '';

    // Generate slides
    clientData.forEach((client, index) => {
        const slide = document.createElement('div');
        slide.className = 'client-slide';
        // Store index for easy reference later
        slide.dataset.index = index; 
        slide.innerHTML = `<img src="${client.image}" alt="Client ${client.id}">`;
        clientTrack.appendChild(slide);
    });

    // Apply initial 3D positions
    updateClientCarouselPositions();
}

// 3. Update Positions (The Core 3D Logic)
function updateClientCarouselPositions() {
    const slides = document.querySelectorAll('.client-slide');
    const totalSlides = slides.length;

    slides.forEach((slide) => {
        const slideIndex = parseInt(slide.dataset.index);

        // Remove all positioning classes first
        slide.classList.remove('is-center', 'is-left', 'is-right', 'is-hidden-left', 'is-hidden-right');

        // Calculate positions using modulo arithmetic for wrap-around logic
        const prevIndex = (currentClientIndex - 1 + totalSlides) % totalSlides;
        const nextIndex = (currentClientIndex + 1) % totalSlides;

        if (slideIndex === currentClientIndex) {
            slide.classList.add('is-center');
        } 
        else if (slideIndex === prevIndex) {
            slide.classList.add('is-left');
        } 
        else if (slideIndex === nextIndex) {
            slide.classList.add('is-right');
        } 
        // Decide where the other slides hide based on relative position
        else {
             // Complex logic to determine if it should hide left or right
             // Calculate distance considering wrap-around
             let distance = slideIndex - currentClientIndex;
             if (distance > totalSlides / 2) distance -= totalSlides;
             if (distance < -totalSlides / 2) distance += totalSlides;

             if (distance < 0) {
                 slide.classList.add('is-hidden-left');
             } else {
                 slide.classList.add('is-hidden-right');
             }
        }
    });
}

// 4. Event Listeners for Navigation
if (clientPrevBtn && clientNextBtn) {
    clientPrevBtn.addEventListener('click', () => {
        currentClientIndex = (currentClientIndex - 1 + clientData.length) % clientData.length;
        updateClientCarouselPositions();
    });

    clientNextBtn.addEventListener('click', () => {
        currentClientIndex = (currentClientIndex + 1) % clientData.length;
        updateClientCarouselPositions();
    });
}

// Initialize additional features
addImageLoadingEffect();

// Add some CSS for search input via JavaScript
const searchStyles = `
    .search-input {
        padding: 0.8rem 1.5rem;
        border: 2px solid #e0e0e0;
        border-radius: 25px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s ease;
        margin-bottom: 1rem;
        width: 100%;
        max-width: 300px;
    }
    
    .search-input:focus {
        border-color: #3498db;
    }
    
    @media (max-width: 768px) {
        .search-input {
            margin-bottom: 1.5rem;
        }
    }
`;

// Add search styles to head
const styleSheet = document.createElement("style");
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Initialize search functionality
// addSearchFunctionality(); // Uncomment to enable search


