// Get the hour
const currentDay = new Date();
const hour = currentDay.getHours();
console.log(today);

// Here you can change your name
const name = 'Sally';

// Here you can change your greetings
const gree1 = 'Go to Sleep! ';
const gree2 = 'Hello there ! How are you today ? ';
const gree3 = 'Good morning! ';
const gree4 = 'Good afternoon, ';
const gree5 = 'Good evening, ';

// Define the hours of the greetings
if (hour >= 0 && hour < 6) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 9) {
    document.getElementById('greetings').innerText = gree2;
} else if (hour >= 9 && hour < 13) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (hour >= 13 && hour < 17) {
    document.getElementById('greetings').innerText = gree4 + name;
} else  {
    document.getElementById('greetings').innerText = gree5 + name;
}
