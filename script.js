
const snakes = [
    {
        name: "Black Mamba",
        scientific: "Dendroaspis polylepis",
        type: "Venomous",
        habitat: "Savannah, woodland and rocky areas",
        distribution: "Kenya, Tanzania, Uganda and other parts of East Africa",
        description: "A large, fast-moving snake known for its dark mouth lining and olive to grey body."
    },
    {
        name: "Eastern Green Mamba",
        scientific: "Dendroaspis angusticeps",
        type: "Venomous",
        habitat: "Coastal forests and woodland",
        distribution: "Coastal Kenya and Tanzania",
        description: "An arboreal green snake that spends much of its time in trees."
    },
    {
        name: "Jameson's Mamba",
        scientific: "Dendroaspis jamesoni",
        type: "Venomous",
        habitat: "Forests and wooded habitats",
        distribution: "Uganda and western parts of East Africa",
        description: "A slender green mamba with a long tail, adapted to life in trees."
    },
    {
        name: "Forest Cobra",
        scientific: "Naja melanoleuca",
        type: "Venomous",
        habitat: "Forest, woodland and riverine habitats",
        distribution: "Western parts of East Africa, including Uganda",
        description: "A large cobra capable of spreading a broad hood when threatened."
    },
    {
        name: "Egyptian Cobra",
        scientific: "Naja haje",
        type: "Venomous",
        habitat: "Savannah, grassland and semi-arid areas",
        distribution: "Parts of the Horn of Africa and northeastern East Africa",
        description: "A large cobra with a powerful hood and variable body coloration."
    },
    {
        name: "Mozambique Spitting Cobra",
        scientific: "Naja mossambica",
        type: "Venomous",
        habitat: "Savannah, woodland and areas near settlements",
        distribution: "Kenya and Tanzania",
        description: "A cobra capable of projecting venom towards perceived threats."
    },
    {
        name: "Red Spitting Cobra",
        scientific: "Naja pallida",
        type: "Venomous",
        habitat: "Dry savannah and semi-desert environments",
        distribution: "Kenya, Tanzania and parts of the Horn of Africa",
        description: "A reddish or pinkish cobra known for its defensive spitting behaviour."
    },
    {
        name: "Black-necked Spitting Cobra",
        scientific: "Naja nigricollis",
        type: "Venomous",
        habitat: "Savannah and woodland",
        distribution: "Parts of western and central East Africa",
        description: "A spitting cobra with variable coloration and a dark neck region."
    },
    {
        name: "Puff Adder",
        scientific: "Bitis arietans",
        type: "Venomous",
        habitat: "Grassland, savannah and woodland",
        distribution: "Kenya, Uganda, Tanzania and much of Africa",
        description: "A thick-bodied viper with distinctive chevron-shaped markings."
    },
    {
        name: "Gaboon Viper",
        scientific: "Bitis gabonica",
        type: "Venomous",
        habitat: "Moist forests",
        distribution: "Western Uganda and neighbouring Central African forest regions",
        description: "A heavily built viper with elaborate geometric patterns and long fangs."
    },
    {
        name: "East African Saw-scaled Viper",
        scientific: "Echis pyramidum",
        type: "Venomous",
        habitat: "Dry rocky areas and semi-arid environments",
        distribution: "Parts of northeastern Africa and the Horn of Africa",
        description: "A small viper known for producing a warning sound by rubbing its scales together."
    },
    {
        name: "Kenyan Horned Viper",
        scientific: "Bitis worthingtoni",
        type: "Venomous",
        habitat: "High-altitude grassland and rocky areas",
        distribution: "Central Kenya",
        description: "A distinctive viper with small horn-like scales above its eyes."
    },
    {
        name: "Ethiopian Mountain Adder",
        scientific: "Bitis parviocula",
        type: "Venomous",
        habitat: "Highland woodland and montane habitats",
        distribution: "Ethiopia",
        description: "A mountain-dwelling viper with a stout body and patterned scales."
    },
    {
        name: "Usambara Bush Viper",
        scientific: "Atheris ceratophora",
        type: "Venomous",
        habitat: "Montane forests",
        distribution: "Eastern Tanzania",
        description: "An arboreal viper with unusual raised scales above its eyes."
    },
    {
        name: "Great Lakes Bush Viper",
        scientific: "Atheris nitschei",
        type: "Venomous",
        habitat: "Montane forests and bamboo vegetation",
        distribution: "Uganda, Rwanda, Burundi and eastern Democratic Republic of Congo",
        description: "A tree-dwelling viper with keeled scales and variable green coloration."
    },
    {
        name: "Boomslang",
        scientific: "Dispholidus typus",
        type: "Venomous",
        habitat: "Woodland, forest edges and savannah",
        distribution: "Kenya, Tanzania and Uganda",
        description: "A slender, large-eyed tree snake with strongly rear-positioned fangs."
    },
    {
        name: "Twig Snake",
        scientific: "Thelotornis capensis",
        type: "Venomous",
        habitat: "Woodland and savannah vegetation",
        distribution: "Parts of Kenya, Tanzania and Uganda",
        description: "A slender, well-camouflaged snake resembling a small branch."
    },
    {
        name: "African Rock Python",
        scientific: "Python sebae",
        type: "Non-venomous",
        habitat: "Grassland, wetlands and woodland",
        distribution: "Kenya, Tanzania, Uganda and other African countries",
        description: "One of Africa's largest snakes. It kills prey by constriction."
    },
    {
        name: "Common Egg-eater",
        scientific: "Dasypeltis scabra",
        type: "Non-venomous",
        habitat: "Grassland, woodland and savannah",
        distribution: "Kenya, Tanzania and Uganda",
        description: "A specialised snake that feeds mainly on bird eggs."
    },
    {
        name: "Spotted Bush Snake",
        scientific: "Philothamnus semivariegatus",
        type: "Non-venomous",
        habitat: "Woodland, gardens and forests",
        distribution: "Kenya, Tanzania and Uganda",
        description: "A slender green snake with dark markings, often found in vegetation."
    }
];

// CREATE SEARCH AND FILTER CONTROLS

const gallery = document.getElementById("snake-gallery");

if (gallery) {
    const controls = document.createElement("div");
    controls.className = "gallery-controls";

    controls.innerHTML = `
        <input
            type="search"
            id="snake-search"
            placeholder="Search for a snake..."
            aria-label="Search snake species"
        >

        <select id="snake-filter" aria-label="Filter snake species">
            <option value="All">All Snakes</option>
            <option value="Venomous">Venomous</option>
            <option value="Non-venomous">Non-venomous</option>
        </select>
    `;

    gallery.parentNode.insertBefore(controls, gallery);

    const search = document.getElementById("snake-search");
    const filter = document.getElementById("snake-filter");

    function displaySnakes() {
        const searchText = search.value.toLowerCase();
        const selectedType = filter.value;

        const results = snakes.filter(snake => {
            const matchesSearch =
                snake.name.toLowerCase().includes(searchText) ||
                snake.scientific.toLowerCase().includes(searchText);

            const matchesType =
                selectedType === "All" ||
                snake.type === selectedType;

            return matchesSearch && matchesType;
        });

        gallery.innerHTML = "";

        if (results.length === 0) {
            gallery.innerHTML = "<p>No matching snake species found.</p>";
            return;
        }

        results.forEach(snake => {
            const card = document.createElement("article");
            card.className = "snake-card";

            card.innerHTML = `
                <div class="snake-placeholder" aria-hidden="true">
                    🐍
                </div>

                <div class="snake-info">
                    <span class="snake-type">${snake.type}</span>

                    <h3>${snake.name}</h3>

                    <p class="scientific">
                        ${snake.scientific}
                    </p>

                    <p><strong>Habitat:</strong> ${snake.habitat}</p>

                    <p><strong>Distribution:</strong> ${snake.distribution}</p>

                    <details>
                        <summary>Read identification information</summary>
                        <p>${snake.description}</p>
                    </details>
                </div>
            `;

            gallery.appendChild(card);
        });
    }

    search.addEventListener("input", displaySnakes);
    filter.addEventListener("change", displaySnakes);

    displaySnakes();
}
