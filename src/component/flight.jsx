
function Flight(){


  function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
  
  // Function to update the displayed day when the date changes
  function updateDay(inputType) {
    const startDateInput = document.getElementById('dateInput');
    const endDateInput = document.getElementById('dateInputReturn');
    
    const startResultElement = document.getElementById('day');
    const endResultElement = document.getElementById('returnDay');
    console.log(endDateInput.value);
  
    const startDate = startDateInput.value ? new Date(startDateInput.value) : new Date();
    const endDate = endDateInput.value ? new Date(endDateInput.value) : new Date();
  
    // Get the days of the week
    const startDayOfWeek = getDayOfWeek(startDate);
    const endDayOfWeek = getDayOfWeek(endDate);
  
   
    startResultElement.textContent = `${startDayOfWeek}`;
    endResultElement.textContent = `${endDayOfWeek}`;
  }
  
  
  // Set the default dates and update the days on page load
  document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('dateInput');
    const endDateInput = document.getElementById('dateInputReturn');
  
    const today = new Date().toISOString().split('T')[0];
    
  
    startDateInput.value = today;
    endDateInput.value = today;
  
    const start= updateDay('startDate');
    const end=updateDay('endDate');
    // console.log(start,end);
    
  });
  
  function change(){
    const departLocation= document.getElementById("departLocation");
    const departAirport= document.getElementById("departAirport");
    
    
    const destinationLocation= document.getElementById("destinationLocation");
    const destinationAirport= document.getElementById("destinationAirport");
    const DLval=destinationLocation.textContent;
    const DAval=destinationAirport.value;
  
    destinationLocation.textContent=departLocation.textContent;
    departLocation.textContent=DLval;
  
    destinationAirport.value=departAirport.value;
    departAirport.value=DAval;
    console.log('change clicked');
  }

    return (
      <div className="flightDetails">

      <div className="flight-container">
        <div id="button-align">
          <div className="flight btnBorder">
            <div className="flight-box ">
              <i className="fa-solid fa-plane-departure"></i>&nbsp;
              <span className=""> Flights</span>
            </div>
          </div>
          <div className="flight btnBorder" id="hotel-box">
            <div className="flight-box">
              <i className="fa-sharp fa-solid fa-hotel"></i> &nbsp;
              <span>Hotels</span>
            </div>
          </div>
        </div>
  
        <div>
          <div>
            <ul className="trip" id="content-align">
              <li>One Way</li>
              <li>Roundtrip</li>
              <li>Multi City</li>
            </ul>
          </div>
        </div>
      </div>
  
  
      <div className="flight-location-laining">
  
  
  
        <div className="flight-check depart">
  
  
  
  
          <span className="flightInputTop">From</span>
          <span>
            <i className="fa-solid fa-plane-departure logo-align"></i>
  
          </span>
          <input className="flightInputMid" type="text" name="departAirport " value="New York" id="departAirport"/>
  
          <div>
            <p className="flightInputBottom" id="departLocation">JFK-john F.kennedy international</p>
          </div>
  
        </div>
        <div>
        
  
          <i className="fa fa-exchange direction-logo" aria-hidden="true" onClick="change()"></i>
        </div>
        <div className="flight-check arrive">
          <span className="flightInputTop">To</span>
          <span>
            <i className="fa-solid fa-plane-arrival logo-align"></i>
  
          </span>
          <input className="flightInputMid" type="text" name="" id="destinationAirport" value="London" />
          <div>
            <p className="flightInputBottom flightInputBottomLeft" id="destinationLocation">LCY,London city airport</p>
          </div>
  
        </div>
        <div className="date">
          <div className="day">
  
            <p className="flightInputTop">Journey date </p>
            <input className="flightInputMid dateInput" type="date" id="dateInput" name="dateInput" onChange="updateDay()" />
            <p id="day" className="flightInputBottom "> Friday</p>
          </div>
          <div className="day">
            <p className="flightInputTop  ">Journey date</p>
            <input className="flightInputMid dateInput" type="date" id="dateInputReturn" name="dateInput"
              onChange="updateDay()" />
            <p id="returnDay" className="flightInputBottom ">Friday</p>
          </div>
  
  
  
  
  
  
        </div>
        <div className="passenger">
          <p className="flightInputTop">Passenger,className</p>
          <p className="flightInputMid ">0 Passenger</p>
          <p className="flightInputBottom"> Economy</p>
        </div>
  
  
      </div>
      <div className="searchButton">
        <button className="btn2 bg ">Search</button>
      </div>
    </div>
  
    )
}
export default Flight