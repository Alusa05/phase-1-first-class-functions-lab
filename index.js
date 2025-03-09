// Code your solution in this file!
 // Deliverable 1: returnFirstTwoDrivers
 const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Deliverable 2: returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Deliverable 3: selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Deliverable 4: createFareMultiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Deliverable 5: fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // Deliverable 6: fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // Deliverable 7: selectDifferentDrivers
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  