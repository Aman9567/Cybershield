
let threats = 0;
let servers = 0;
let users = 0;

let threatInterval = setInterval(() => {

  threats += 5;

  let threatElement = document.getElementById("threats");

  if(threatElement){
    threatElement.innerText = threats;
  }

  if(threats >= 1250){
    clearInterval(threatInterval);
  }

}, 10);


let serverInterval = setInterval(() => {

  servers += 1;

  let serverElement = document.getElementById("servers");

  if(serverElement){
    serverElement.innerText = servers;
  }

  if(servers >= 320){
    clearInterval(serverInterval);
  }

}, 20);


let userInterval = setInterval(() => {

  users += 2;

  let userElement = document.getElementById("users");

  if(userElement){
    userElement.innerText = users;
  }

  if(users >= 540){
    clearInterval(userInterval);
  }

}, 20);


const chartCanvas = document.getElementById('myChart');

if(chartCanvas){

  new Chart(chartCanvas, {

    type: 'line',

    data: {

      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

      datasets: [{
        label: 'Cyber Attacks',

        data: [12, 19, 8, 15, 22, 30],

        borderWidth: 3,
        borderColor: '#22c55e'
      }]
    },

    options: {
      responsive: true
    }

  });

}

function showMessage(){

  let messages = [

    "Use strong passwords for cloud accounts.",

    "Enable two-factor authentication for better security.",

    "Monitor suspicious cloud activities regularly.",

    "Avoid clicking unknown phishing links.",

    "Keep your firewall enabled at all times.",

    "Update security patches regularly."

  ];

  let randomMessage =
  messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("reply").innerText =
  randomMessage;

}
function searchThreat(){

  let input =
  document.getElementById("searchInput").value.toLowerCase();

  let table =
  document.getElementById("threatTable");

  let rows = table.getElementsByTagName("tr");

  for(let i = 1; i < rows.length; i++){

    let text =
    rows[i].innerText.toLowerCase();

    if(text.includes(input)){
      rows[i].style.display = "";
    }
    else{
      rows[i].style.display = "none";
    }

  }

}

function updateClock(){

  const now = new Date();

  const time = now.toLocaleTimeString();

  const clockElement = document.getElementById("clock");

  if(clockElement){
    clockElement.innerText = time;
  }

}

setInterval(updateClock, 1000);