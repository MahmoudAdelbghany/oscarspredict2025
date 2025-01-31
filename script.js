const nominees = {
    actor: [
        "Adrien Brody: The Brutalist",
        "Timothée Chalamet: A Complete Unknown",
        "Colman Domingo: Sing Sing",
        "Ralph Fiennes: Conclave",
        "Sebastian Stan: The Apprentice"
        ],
    actress: [
        "Cynthia Erivo: Wicked",
        "Karla Sofía Gascón: Emilia Pérez",
        "Mikey Madison: Anora",
        "Demi Moore: The Substance",
        "Fernanda Torres: I'm Still Here"
        ],
    director:[
        "Sean Baker: Anora",
        "Brady Corbet: The Brutalist",
        "James Mangold: A Complete Unknown",
        "Jacques Audiard: Emilia Pérez",
        "Coralie Fargeat: The Substance"
        ],
        picture: [
        "Anora",
        "The Brutalist",
        "A Complete Unknown",
        "Conclave",
        "Dune: Part Two",
        "Emilia Pérez",
        "I'm Still Here",
        "Nickel Boys",
        "The Substance",
        "Wicked"
    ],
    other: {
        "Actor in a Supporting Role": [
            "Yura Borisov: Anora",
            "Kieran Culkin: A Real Pain",
            "Edward Norton: A Complete Unknown",
            "Guy Pearce: The Brutalist",
            "Jeremy Strong: The Apprentice"
    ],
        "Actress in a Supporting Role": [
            "Monica Barbaro: A Complete Unknown",
            "Ariana Grande: Wicked",
            "Felicity Jones: The Brutalist",
            "Isabella Rossellini: Conclave",
            "Zoe Saldaña: Emilia Pérez"
    ],
        "Cinematography": [
            "Lol Crawley - The Brutalist",
            "Greig Fraser - Dune: Part Two",
            "Paul Guilhaume - Emilia Pérez",
            "Ed Lachman - Maria",
            "Jarin Blaschke - Nosferatu"
        ],
        "Costume Design": [
            "Arianne Phillips - A Complete Unknown",
            "Lisy Christl - Conclave",
            "Janty Yates, Dave Crossman - Gladiator II",
            "Linda Muir - Nosferatu",
            "Paul Tazewell - Wicked"
        ],
        "Film Editing": [
            "Sean Baker - Anora",
            "David Jancso - The Brutalist",
            "Nick Emerson - Conclave",
            "Juliette Welfling - Emilia Pérez",
            "Myron Kerstein - Wicked"
        ],
        "International Feature": [
            "Brazil: I'm Still Here",
            "Denmark: The Girl with the Needle",
            "France: Emilia Pérez",
            "Germany: The Seed of the Sacred Fig",
            "Latvia: Flow"
        ],
        "Music (Original Score)": [
            "Daniel Blumberg - The Brutalist",
            "Volker Bertelmann - Conclave",
            "Clément Ducol, Camille - Emilia Pérez",
            "John Powell, Stephen Schwartz - Wicked",
            "Kris Bowers - The Wild Robot"
        ],
        "Music (Original Song)": [
            "El Mal - Emilia Pérez",
            "The Journey - The Six Triple Eight",
            "Like A Bird - Sing Sing",
            "Mi Camino - Emilia Pérez",
            "Never Too Late - Elton John: Never Too Late"
        ],
        "Production Design": [
            "Judy Becker, Patricia Cuccia - The Brutalist",
            "Suzie Davies, Cynthia Sleiter - Conclave",
            "Patrice Vermette, Shane Vieau - Dune: Part Two",
            "Craig Lathrop, Beatrice Brentnerová - Nosferatu",
            "Nathan Crowley, Lee Sandales - Wicked"
        ],
        "Sound": [
            "A Complete Unknown",
            "Dune: Part Two",
            "Emilia Pérez",
            "Wicked",
            "The Wild Robot"
        ],
        "Visual Effects": [
            "Alien: Romulus",
            "Better Man",
            "Dune: Part Two",
            "Kingdom of the Planet of the Apes",
            "Wicked"
        ],
        "Writing (Adapted Screenplay)": [
            "James Mangold, Jay Cocks - A Complete Unknown",
            "Peter Straughan - Conclave",
            "Jacques Audiard & team - Emilia Pérez",
            "RaMell Ross & Joslyn Barnes - Nickel Boys",
            "Clint Bentley & team - Sing Sing"
        ],
        "Writing (Original Screenplay)": [
            "Sean Baker - Anora",
            "Brady Corbet & Mona Fastvold - The Brutalist",
            "Jesse Eisenberg - A Real Pain",
            "Moritz Binder & Tim Fehlbaum - September 5",
            "Coralie Fargeat - The Substance"
        ]
    }
};

        // Initialize main categories
        function initializeCategories() {
            ['actor', 'actress', 'director', 'picture'].forEach(category => {
                const select = document.getElementById(category);
                nominees[category].forEach(nominee => {
                    const option = document.createElement('option');
                    option.textContent = nominee;
                    option.value = nominee;
                    select.appendChild(option);
                });
            });
        }

        // Add additional category dropdowns
        function addCategory() {
            const container = document.getElementById('additionalCategories');

            // Create a wrapper div
            const categoryGroupDiv = document.createElement('div');
            categoryGroupDiv.className = 'category-group';

            // Create category select
            const categorySelect = document.createElement('select');
            categorySelect.className = 'category-select';
            categorySelect.required = true;

            // Add accessible name using a label
            const categoryLabel = document.createElement('label');
            categoryLabel.textContent = 'Select Category';
            categoryLabel.style.display = 'block';
            categoryLabel.style.marginTop = '10px';

            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select Category';
            defaultOption.value = '';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            categorySelect.appendChild(defaultOption);

            Object.keys(nominees.other).forEach(category => {
                // Check if the category has already been added
                const existingCategories = document.querySelectorAll('.category-select');
                let alreadyAdded = false;
                existingCategories.forEach(select => {
                    if (select.value === category) {
                        alreadyAdded = true;
                    }
                });
                if (!alreadyAdded) {
                    const option = document.createElement('option');
                    option.textContent = category;
                    option.value = category;
                    categorySelect.appendChild(option);
                }
            });

            // Create nominee select
            const nomineeSelect = document.createElement('select');
            nomineeSelect.className = 'nominee-select';
            nomineeSelect.required = true;
            nomineeSelect.disabled = true; // Disable until category is selected

            // Add accessible name using a label
            const nomineeLabel = document.createElement('label');
            nomineeLabel.textContent = 'Select Nominee';
            nomineeLabel.style.display = 'block';
            nomineeLabel.style.marginTop = '10px';

            // Add default option to nominee select
            const defaultNomineeOption = document.createElement('option');
            defaultNomineeOption.textContent = 'Select Nominee';
            defaultNomineeOption.value = '';
            defaultNomineeOption.disabled = true;
            defaultNomineeOption.selected = true;
            nomineeSelect.appendChild(defaultNomineeOption);

            // Append elements to the wrapper div
            categoryGroupDiv.appendChild(categoryLabel);
            categoryGroupDiv.appendChild(categorySelect);
            categoryGroupDiv.appendChild(nomineeLabel);
            categoryGroupDiv.appendChild(nomineeSelect);

            // Append the wrapper div to the container
            container.appendChild(categoryGroupDiv);

            // When category is selected, populate nominees
            categorySelect.addEventListener('change', function () {
                const selectedCategory = categorySelect.value;

                // Get the nominees for the selected category
                const nomineesForCategory = nominees.other[selectedCategory] || [];

                // Clear previous options
                nomineeSelect.innerHTML = '';
                nomineeSelect.disabled = false;

                // Add default option
                const defaultNomineeOption = document.createElement('option');
                defaultNomineeOption.textContent = 'Select Nominee';
                defaultNomineeOption.value = '';
                defaultNomineeOption.disabled = true;
                defaultNomineeOption.selected = true;
                nomineeSelect.appendChild(defaultNomineeOption);

                // Populate nominee select
                nomineesForCategory.forEach(nominee => {
                    const option = document.createElement('option');
                    option.textContent = nominee;
                    option.value = nominee;
                    nomineeSelect.appendChild(option);
                });
            });
        }

        // Generate the prediction card
        function generateDesign() {
            const predictions = {
                actor: document.getElementById('actor').value,
                actress: document.getElementById('actress').value,
                director: document.getElementById('director').value,
                picture: document.getElementById('picture').value,
                additional: []
            };

            // Validate main categories
            if (!predictions.actor || !predictions.actress || !predictions.director || !predictions.picture) {
                alert('Please make selections for all main categories.');
                return;
            }

            // Collect additional categories
            const categoryGroups = document.querySelectorAll('#additionalCategories .category-group');

            for (let group of categoryGroups) {
                const categorySelect = group.querySelector('.category-select');
                const nomineeSelect = group.querySelector('.nominee-select');

                if (categorySelect.value && nomineeSelect.value) {
                    predictions.additional.push({
                        category: categorySelect.value,
                        choice: nomineeSelect.value
                    });
                } else {
                    alert('Please select both a category and a nominee for all additional categories.');
                    return;
                }
            }

            // Build output
            const output = document.getElementById('predictionsList');
            output.innerHTML = `
                <p><strong>Actor:</strong> ${predictions.actor}</p>
                <p><strong>Actress:</strong> ${predictions.actress}</p>
                <p><strong>Director:</strong> ${predictions.director}</p>
                <p><strong>Best Picture:</strong> ${predictions.picture}</p>
                ${predictions.additional.map(p => `
                    <p><strong>${p.category}:</strong> ${p.choice}</p>
                `).join('')}
            `;

            // Add user name if provided
            const userName = document.getElementById('userName').value;
            if (userName) {
                output.innerHTML += `<p style="text-align: center; margin-top: 20px;">Predicted by: ${userName}</p>`;
            }

            // Hide the form and show the output
            document.getElementById('formSection').classList.add('hidden');
            document.getElementById('output').style.display = 'block';
            window.scrollTo(0, 0);
        }

        // Download the prediction card 
        function downloadCard() {
            const outputElement = document.getElementById('output');
            document.querySelectorAll('#output button').forEach(button => button.style.display = 'none');
            html2canvas(outputElement).then(canvas => {
                document.querySelectorAll('#output button').forEach(button => button.style.display = '');
                const link = document.createElement('a');
                link.download = 'Oscar2025_Predictions.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }

        // Reset the application to start over
        function startOver() {
            // Clear selections
            document.getElementById('actor').value = '';
            document.getElementById('actress').value = '';
            document.getElementById('director').value = '';
            document.getElementById('picture').value = '';
            document.getElementById('userName').value = '';

            // Remove additional categories
            document.getElementById('additionalCategories').innerHTML = '';

            // Hide output and show form
            document.getElementById('output').style.display = 'none';
            document.getElementById('formSection').classList.remove('hidden');

            window.scrollTo(0, 0);
        }

        // Initialize on load
        window.onload = initializeCategories;