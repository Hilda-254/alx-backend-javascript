export default function createReportObject(employeesList) {
  // Initialize an empty object to store the department-wise employee lists
  const allEmployees = {};

  // Iterate through the employeesList and populate the allEmployees object
  employeesList.forEach((employee) => {
    const { name, department } = employee;
    
    if (!allEmployees[department]) {
      // If the department does not exist in allEmployees, create an empty array for it
      allEmployees[department] = [];
    }
    
    // Push the employee's name to the corresponding department's array
    allEmployees[department].push(name);
  });

  // Create the getNumberOfDepartments method
  const getNumberOfDepartments = () => {
    // Use Object.keys to get an array of all department names and return its length
    return Object.keys(allEmployees).length;
  };

  // Return the report object
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
