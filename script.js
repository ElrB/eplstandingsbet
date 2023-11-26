// Team names
const teams = [
    "Arsenal", "Man City", "Liverpool", "Tottenham", "Aston Villa",
    "Newcastle", "Brighton", "Man United", "West Ham", "Chelsea",
    "Brentford", "Wolves", "Crystal Palace", "Nottm Forest", "Fulham",
    "Bournemouth", "Luton Town", "Sheffield United", "Everton", "Burnley"
];

// Reference number generation function (You can replace this with a more secure method)
function generateReferenceNumber() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to initialize the form with team dropdowns
function initializeForm() {
    const form = document.getElementById('bettingForm');
    const referenceNumberField = document.getElementById('referenceNumber');

    // Set reference number
    referenceNumberField.innerText = generateReferenceNumber();

    // Create dropdowns for each team
    teams.forEach((team, index) => {
        const teamContainer = document.createElement('div');
        teamContainer.classList.add('team-container');

        const label = document.createElement('label');
        label.setAttribute('for', team.toLowerCase());
        label.innerText = `${team}:`;

        const select = document.createElement('select');
        select.setAttribute('id', team.toLowerCase());
        select.setAttribute('name', team.toLowerCase());

        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }

        teamContainer.appendChild(label);
        teamContainer.appendChild(select);
        form.insertBefore(teamContainer, form.lastChild);
    });
}

// Function to handle form submission
function submitForm() {
    const form = document.getElementById('bettingForm');
    const email = document.getElementById('email').value;

    // You can add validation logic here

    // Example: Log the selected positions
    teams.forEach((team) => {
        const selectedPosition = document.getElementById(team.toLowerCase()).value;
        console.log(`${team}: ${selectedPosition}`);
    });

    // Example: Log the entered email
    console.log(`Email: ${email}`);

    // Here, you can send the form data to your server for further processing
}

// Initialize the form on page load
initializeForm();
