// Get the hour
var today = new Date();
var hour = today.getHours();
console.log(today);

// Here you can change your name
var name = 'SallSa';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var gree2 = 'Hello there ! How are you today ? ';
var gree3 = 'Good morning! ';
var gree4 = 'Good afternoon, ';
var gree5 = '\nGood evening, ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 8) {
    document.getElementById('greetings').innerText = gree2;
} else if (hour >= 9 && hour < 12) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree4 + name;
} else  {
    document.getElementById('greetings').innerText = gree5 + name;
}
