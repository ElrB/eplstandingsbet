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
    const referenceNumberField = document.getElementById('referenceNumber');
    const teamsTableBody = document.getElementById('teamsTableBody');

    // Set reference number
    referenceNumberField.innerText = generateReferenceNumber();

    // Create rows for each team in the table
    teams.forEach((team, index) => {
        const row = document.createElement('tr');

        const teamNameCell = document.createElement('td');
        teamNameCell.innerText = team;

        const positionCell = document.createElement('td');
        const select = document.createElement('select');
        select.setAttribute('id', team.toLowerCase());
        select.setAttribute('name', team.toLowerCase());

        for (let i = 1; i <= 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }

        positionCell.appendChild(select);

        row.appendChild(teamNameCell);
        row.appendChild(positionCell);

        teamsTableBody.appendChild(row);
    });
}

// Function to handle form submission
function submitForm() {
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
