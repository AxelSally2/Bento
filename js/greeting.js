// Get the hour
var today = new Date();
var hour = today.getHours();
console.log(today);

// Here you can change your name
var name = 'SallSa';

// Here you can change your greetings
var gree1 = 'Go to Sleep! \n';
var gree2 = 'Hello there ! How are you today ? ';
var gree3 = 'Good morning! ';
var gree4 = 'Good afternoon, ';
var gree5 = 'Good evening, ';

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
