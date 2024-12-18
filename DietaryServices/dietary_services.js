let userRole = "Employee";
let accessLevel;

if (userRole === "Employee") {
    accessLevel = "Dietary Services";
} else if (userRole === "Enrolled Member") {
    accessLevel = "Dietary Services";
    accessLevel = "One-on-one with a dietitian";
} else if (userRole === "Subscriber") {
    accessLevel = "Partial Dietary Services";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let userType = "Enrolled Member";
let userCategory;

switch (userType) {
    case "Employee":
        userCategory = "Employee - Eligible for Dietary Services";
        break;
    case "Enrolled Member":
        userCategory = "Enrolled Member - Eligible for Dietary Services and one-on-one with a dietitian";
        break;
    case "Subscriber":
        userCategory = "Subscriber - Eligible for Partial Dietary Services";
        break;
    default:
        userCategory = "Non-Subscriber - Please enroll or subscribe to avail services";
}

console.log("User Category:", userCategory);
