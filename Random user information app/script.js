const generateBtn = document.getElementById("generateBtn");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userLocation = document.getElementById("userLocation");

generateBtn.addEventListener("click", generateUser);

function generateUser() {

    // Arrays of random data
    const firstNames = ["John", "Emma", "Michael", "Sophia", "David", "Olivia"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Taylor"];
    const cities = ["New York", "London", "Paris", "Tokyo", "Sydney", "Toronto"];
    const countries = ["USA", "UK", "France", "Japan", "Australia", "Canada"];

    // Generate random index
    const randomIndex = Math.floor(Math.random() * firstNames.length);

    // Generate random number for phone/email
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    // Display data
    userImage.src = "https://via.placeholder.com/150";
    userName.textContent = firstNames[randomIndex] + " " + lastNames[randomIndex];
    userEmail.textContent = "Email: user" + randomNumber + "@example.com";
    userPhone.textContent = "Phone: +1 98765" + randomNumber;
    userLocation.textContent = "Location: " + cities[randomIndex] + ", " + countries[randomIndex];
}


    function displayUser(user) {
        userImage.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userEmail.textContent = `Email: ${user.email}`;
        userPhone.textContent = `Phone: ${user.phone}`;
        userLocation.textContent = `Location: ${user.location.city}, ${user.location.country}`;
    }

    function clearUserData() {
        userImage.src = "";
        userName.textContent = "";
        userEmail.textContent = "";
        userPhone.textContent = "";
        userLocation.textContent = "";
    }


