// Function to find matching driver names
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export the functions if needed
module.exports = { findMatching, fuzzyMatch, matchName };

