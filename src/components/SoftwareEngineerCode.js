// SoftwareEngineerCode.js

const SoftwareEngineerCode = `
// Define a class for representing a software engineer
class SoftwareEngineer {
  string name;
  int graduationYear;
  int experienceYears;
  string[] techStack;
  string[] interests;

  // Constructor to initialize the engineer's details
  constructor(name, graduationYear, experienceYears, techStack, interests) {
    this.name = name;
    this.graduationYear = graduationYear;
    this.experienceYears = experienceYears;
    this.techStack = techStack;
    this.interests = interests;
  }

  // Method to display work experience, tech stack, and C++ interest
  method displayDetails() {
    print("Name: " + this.name);
    print("Graduation Year: " + this.graduationYear);
    print("Experience Years: " + this.experienceYears);
    print("Tech Stack:");
    foreach (tech in this.techStack) {
      print("- " + tech);
    }
    print("Interests:");
    foreach (interest in this.interests) {
      print("- " + interest);
    }
    // Example of C++ specific interest
    if (this.interests.contains("C++")) {
      print("I have a strong interest in C++ and enjoy working with its features.");
    }
  }
}

// Example usage
function main() {
  // Define a software engineer instance
  engineer = new SoftwareEngineer(
    "User",
    2023, // Graduation year
    1,    // Experience years
    ["Django REST Framework", "MySQL", "MongoDB"],
    ["System design", "Data structures and algorithms", "C++"]
  );

  // Display details using the method
  engineer.displayDetails();
}
`;

export default SoftwareEngineerCode;
