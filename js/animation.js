// tabs pens 

const tabsContainer = document.querySelector('.tabs');
const info = document.getElementById('info');
const triangle = document.querySelector('.triangle');
const tabInfo = [
    {
        title: "Ingredients, Flavours & Fragrances",
        items: [
            "Active ingredients", "Additives / Algae", "Amino Acids / Anti-allergens",
            "Anti-Inflammatory /", "Anti-Irritants", "Soothing", "Agents",
            "Ayurveda Ingredients", "Bactericides", "Binderseq", "Bioactives",
            "Botanical Extracts", "Collagen", "Colours", "De-Scalers And Degreasers",
            "Dietary Fibres", "Emulsifiers", "Essential Oils", "Fat Replacers",
            "Flavour Enhancers", "Floor Cleaning Agents", "Formulations",
            "Fragrances", "Gelatin", "Hemp Extracts", "Humectants",
            "Leavening Agents", "Natural & Plant Extracts", "Nutraceuticals",
            "Nutrients", "Preservatives", "Stabilizers & Thickeners", "Waxes",
            "Yeast Nutrients"
        ],
        image: "/img/segment1.png"
    },
    {
        title: "Active Pharma Ingredient",
        items: [
            "Consultancy Services", "Logistics & Forwarding", "Manufacturer",
            "Packaging Machinery", "Packaging Supplies", "Processing Machinery",
            "Research & Development {Pharmaceutical}"
        ],
        image: "/img/segment2.png"
    },
    {
        title: "Food beverages & Nutraceuticals",
        items: [
            "Atta, Flour & Sooji", "Ayurveda & Herbal", "Biscuits, Baked Goods & Cakes",
            "Breads & Buns", "Breakfast & Cereals", "Chocolates & Candies",
            "Coffee / Tea", "Dairy", "Dals & Pulses", "Dry Fruits, Nuts & Seeds",
            "Edible Oil & Ghee", "Energy & Soft Drinks", "Frozen Food",
            "Fruit Juices & Syrups", "Fruits & Vegetables", "Health & Safety",
            "Health Drink & Supple", "Masalas & Spices", "Mineral Water",
            "Noodles, Pasta & Vermicelli", "Organic Staples",
            "Organic, Nutritional & Health Food", "Pickles & Chutney",
            "Ready To Cook & Eat", "Rice & Rice Products", "Salt, Sugar & Jaggery",
            "Snacks & Namkeen", "Sports Nutrition", "Spreads, Sauces & Ketchup",
            "Tinned & Processed Food", "Weight Management", "Health Supplements",
            "Indian Mithai", "Ingredients"
        ],
        image: "/img/segment3.png"
    },
    {
        title: "Cosmetics",
        items: [
            "Permanent makeup", "Face", "Perfume", "Cosmeceutical", "Eye shadow",
            "Human body", "Sunscreen", "Concealer", "Foundation", "Mascara",
            "Eye liner", "Skin", "Lipstick", "Airbrush makeup", "Skin whitening",
            "Nail polish", "Face powder", "Highlighter", "Lip gloss",
            "Color cosmetics", "False eyelashes", "Brow Pencil", "Makeup",
            "Styling permanent wave products"
        ],
        image: "/img/segment4.png"
    },
    {
        title: "Ayurveda & Herbal",
        items: [
            "Ayush Industry Manufacturers", "Cosmetic Manufacturers",
            "Extracts and Essential Oil", "Manufacturers ~ Hemp and Organic product",
            "Manufacturers ~ Unani and Ayurveda product Manufacturers",
            "Herbal product Manufacturers", "Certifying Agencies"
        ],
        image: "/img/segment5.png"
    },
    {
        title: "Dairy Products",
        items: [
            "Dairy Farming Technology", "Food Processing Technology",
            "Dairy Processing & Milk", "Manufacturing Technology",
            "Processing Equipment", "Packaging Equipment & Material",
            "Quality Testing", "Printing & Coding", "Refrigeration Technology",
            "Automation", "Energy Generation & Allied Technology",
            "Waste Management System"
        ],
        image: "/img/segment6.png"
    },
    {
        title: "Wine",
        items: [
            "Spirits", "Fruits & Other Ingredients", "Yeast", "Calcium carbonate",
            "Flavours", "Grape juice concentrate", "Non-vegan material",
            "Powdered tannins", "Potassium sorbate and potassium metabisulfite",
            "Sulfur dioxide", "Sugar", "Glass Packaging", "Metal Packaging",
            "Machineries", "Filling"
        ],
        image: "/img/segment7.png"
    },
    {
        title: "Pet Care & Pets",
        items: [
            "Food", "Treats", "Pharma", "Functional", "Beds", "Petcare", "Luxury",
            "Toys", "Hygiene", "Grooming", "Resin ornaments", "Lights", "Filters",
            "Corals and stones", "Air stones", "Aquarium thermometers", "Fish net",
            "Tubing", "Granel cleaners", "Food timers", "Bird feed", "Cages",
            "Supplements", "Seeds and treats"
        ],
        image: "/img/segment8.png"
    },
    {
        title: "Packaging",
        items: [
            "Processing & Packaging technology", "Printing Labeling & Coding",
            "Logistics packaging technology", "Packaging materials & product",
            "Confectionary & Bakery equipment", "Packaging materials & products",
            "Flexible packaging", "Industrial robots & automation",
            "PET & plastic packaging", "Food safety", "Paper & Corrugated Carton",
            "Glass Packaging"
        ],
        image: "/img/segment9.png"
    },
    {
        title: "Consumer Packaged Goods (CPGs)",
        items: [
            "Food", "Clothes", "Beverages", "Cosmetics", "Cleaning products"
        ],
        image: "/img/segment10.png"
    },
    {
        title: "Durable Goods (DGs)",
        items: [
            "Appliances", "Furniture", "Automobiles", "Books",
            "Household goods (tools, etc.)", "Sports equipment", "Jewellery",
            "Medical equipment", "Toys"
        ],
        image: "/img/segment11.png"
    },
    {
        title: "Mom & Baby Care",
        items: [
            "Mother & Baby Accessories", "Feeding Accessories",
            "Diapering/ Kids Accessories", "Bathing Accessories",
            "Mother & Baby Cosmetics", "Mother & Baby Apparel & Footwear",
            "Baby Health & Safety", "Baby Food & Nutrition", "Baby Safety Products",
            "Baby Medicine & Droppers", "Mom & Baby Health Care Products",
            "Maternity Products", "Maternity & Pregnancy Personal Care",
            "Maternity Wear", "Parenting Books", "Health & hospital ivf",
            "Stem cell Banks", "Yoga Institutes", "Maternity & Pediatric Hospitals",
            "Toys & Games", "Soft Toys", "Indoor & Outdoor Toys",
            "Electronic & Remote Controlled Toys", "Fun & Learn books, CD & DVD"
        ],
        image: "/img/segment12.png"
    }
];

function createTabs() {
    tabInfo.forEach((tab, index) => {
        const tabElement = document.createElement('div');
        tabElement.className = 'tab';
        tabElement.textContent = tab.title.split(',')[0];
        tabElement.setAttribute('data-tab', index);
        tabsContainer.insertBefore(tabElement, triangle);
    });
}

function updateTrianglePosition(tab) {
    const tabRect = tab.getBoundingClientRect();
    const tabsRect = tabsContainer.getBoundingClientRect();
    triangle.style.left = `${tabRect.left - tabsRect.left + tabRect.width / 2 - 10}px`;
    triangle.style.borderTopColor = getComputedStyle(tab).backgroundColor;
}

function updateInfo(index) {
    info.classList.remove('active');
    setTimeout(() => {
        const content = tabInfo[index];
        info.innerHTML = `
            <h2 class="gradient-text">${content.title}</h2>
            <div class="info-content">
                <ul>
                    ${content.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <div class="info-image wow fadeIn" data-wow-delay="0.5s">
                    <img src="${content.image}" alt="${content.title}" />
                </div>
            </div>
        `;
        info.style.background = `linear-gradient(to bottom right, ${getComputedStyle(tabs[index]).backgroundColor}, white)`;
        info.classList.add('active');
    }, 300);
}

createTabs();
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const tabIndex = tab.getAttribute('data-tab');
        updateInfo(tabIndex);
        updateTrianglePosition(tab);

        // Scroll the clicked tab into view
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
});

// Initialize first tab
tabs[0].classList.add('active');
updateInfo(0);
updateTrianglePosition(tabs[0]);

// Add touch scroll for mobile devices
let isDown = false;
let startX;
let scrollLeft;

tabsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - tabsContainer.offsetLeft;
    scrollLeft = tabsContainer.scrollLeft;
});

tabsContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

tabsContainer.addEventListener('mouseup', () => {
    isDown = false;
});

tabsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainer.scrollLeft = scrollLeft - walk;
});


