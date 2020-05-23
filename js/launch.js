const apiURL = "https://api.spacexdata.com/v3/launches/upcoming";
const noroffUrl = "https://noroffcors.herokuapp.com/" + apiURL;

async function launchFetch() {
  try {
    const response = await fetch(noroffUrl);

    const json = await response.json();

    allLaunches(json);

    console.log(json.results);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("sucsess");
  }
}

launchFetch();

function allLaunches(rockets) {
  console.log(rockets);

  const rocketDetails = document.querySelector(".spacex-rockets");

  let html = "";

  for (let i = 0; i < 3; i++) {
    html += `<div class="spacex-rockets-launch">

    <div 
    class="rocket-img"></div><h3> ${rockets[i].mission_name}</h3>
    <p><span>Launch#:</span> ${rockets[i].flight_number}</p>
    <p><span>Rocket:</span> ${rockets[i].rocket.rocket_name}</p> 
    <p><span>Payload:</span> ${rockets[i].rocket.second_stage.payloads[0].payload_type}</p>                  
    <p><span>Station:</span> ${rockets[i].launch_site.site_name_long}</p>
    </div>`;
    
  }
  rocketDetails.innerHTML = html;
}
