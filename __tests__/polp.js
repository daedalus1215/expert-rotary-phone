/**

* You are tasked with designing a function-based access control system. 
 * The system manages user access levels for different resource types based on the Principle of Least Privilege (PoLP). 
 * This means each type should only have the minimum level of access required.

* Requirements:
** Input:
*** You will be given an array of strings, where each string follows the pattern:
```
    {Type}_Management_{AccessLevel}
        {Type}: Represents a resource type (e.g., Case, Transcript, Exhibit, etc.).
        {AccessLevel}: Represents the access level (e.g., ReadAccess, ModifyAccess, or FullAccess).
        FullAccess > ModifyAccess > ReadAccess (in terms of privilege).
```

** Output: 
```
    [
    "Case_Management_ReadAccess",
    "Transcript_Management_ReadAccess",
    "Exhibit_Management_ReadAccess"
    ];
```
* Part 1:
** Write a function getLeastPrivilegeSubset(inputArray) that takes in the array of access strings and returns a subset of the original list. This subset should include only the lowest privilege access level for each type, ensuring compliance with PoLP.
**/



function getLeastPrivilegeSubset(strings) {
    const accessPriority = {
      ReadAccess: 1,
      ModifyAccess: 2,
      FullAccess: 3
    };
  
    const accessMap = {};
  
    strings.forEach((str) => {
      const [type, , accessLevel] = str.split('_');
      const currentLevel = accessPriority[accessLevel];
  
      if (!accessMap[type] || currentLevel > accessPriority[accessMap[type]]) {
        accessMap[type] = accessLevel;
      }
    });
  
    return strings.filter((str) => {
      const [type, , accessLevel] = str.split('_');
      return accessLevel === accessMap[type];
    });
  }
  
  function hasAccess(subset, typeToCheck, requiredAccess) {
    const accessPriority = {
      ReadAccess: 1,
      ModifyAccess: 2,
      FullAccess: 3
    };
  
    // Find the access level for the given type in the subset
    const typeAccess = subset.find((str) => str.startsWith(`${typeToCheck}_Management`));
    if (!typeAccess) return false; // If the type is not in the subset, no access
  
    const [, , userAccessLevel] = typeAccess.split('_');
    
    // Check if the user's access level is sufficient
    return accessPriority[userAccessLevel] >= accessPriority[requiredAccess];
  }
  
  // Example usage
  const input = [
    "Case_Management_ReadAccess",
    "Case_Management_FullAccess",
    "Transcript_Management_ReadAccess",
    "Exhibit_Management_ModifyAccess",
    "Exhibit_Management_ReadAccess"
  ];
  
  const subset = getLeastPrivilegeSubset(input);
  
  // Check access
  console.log(hasAccess(subset, "Case", "ModifyAccess")); // true
  console.log(hasAccess(subset, "Case", "FullAccess"));   // true
  console.log(hasAccess(subset, "Transcript", "ModifyAccess")); // false
  console.log(hasAccess(subset, "Exhibit", "ReadAccess")); // true
  