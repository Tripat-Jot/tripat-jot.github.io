// import React from 'react';
// import './header.css';
// import BasicSpeedDial from './speeddail';

// const Header = () => {
//   return (
//     <>
//      <header id="home">
//       <h1>Hey, This is Tripatjot Singh</h1>
//       <p>Web Developer | Tech Enthusiast</p>
//       <div className="header-buttons">
//         <a href="#contact" className="button">Contact Me</a>
//         {/* <a href="/my-portfolio/src/assests/CV_TripatjotSingh.pdf" className="button" target="_blank" rel="noopener noreferrer">Download CV</a> */}
//         <a href="/my-portfolio/src/assets/CV_TripatjotSingh.pdf" className="button" target="_blank" rel="noopener noreferrer">Download CV</a>
//       </div>
//     </header>
//     <BasicSpeedDial/>
//     </>
    
//   );
// };

// export default Header;



// import React from 'react';
// import './header.css';
// import BasicSpeedDial from './speeddail'
// import data from './data.json'; // Assuming data.json is in the same directory

// const Header = () => {
//   return (
//     <>
//       <header id="home">
//         <h1>Hey, This is {data.name}</h1>
//         <p>{data.jobTitle}</p>
//         <div className="header-buttons">
//           {data.buttons.map((button, index) => (
//             <a
//               key={index}
//               href={button.link}
//               className="button"
//               target={button.target}
//               rel={button.rel}
//             >
//               {button.text}
//             </a>
//           ))}
//         </div>
//       </header>
//       <BasicSpeedDial />
//     </>
//   );
// };

// export default Header;



// import React from 'react';
// import { motion } from 'framer-motion';
// import './header.css';
// import BasicSpeedDial from './speeddail'
// import data from './data.json';

// const Header = () => {
//   return (
//     <>
//       <motion.header
//         id="home"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Hey, This is {data.name}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           {data.jobTitle}
//         </motion.p>
//         <div className="header-buttons">
//           {data.buttons.map((button, index) => (
//             <motion.a
//               key={index}
//               href={button.link}
//               className="button"
//               target={button.target}
//               rel={button.rel}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.3 + 1.5, duration: 1 }}
//             >
//               {button.text}
//             </motion.a>
//           ))}
//         </div>
//       </motion.header>
//       <BasicSpeedDial />
//     </>
//   );
// };

// export default Header;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter';
// import './header.css';
// import BasicSpeedDial from './speeddail';
// import data from './data.json';

// const Header = () => {
//   return (
//     <>
//       <motion.header
//         id="home"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <Typewriter
//             words={[`Hey, This is ${data.name}`]}
//             loop={Infinity}
//             cursor
//             cursorStyle='|'
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           {data.jobTitle}
//         </motion.p>
//         <div className="header-buttons">
//           {data.buttons.map((button, index) => (
//             <motion.a
//               key={index}
//               href={button.link}
//               className="button"
//               target={button.target}
//               rel={button.rel}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.3 + 1.5, duration: 1 }}
//             >
//               {button.text}
//             </motion.a>
//           ))}
//         </div>
//       </motion.header>
//       <BasicSpeedDial />
//     </>
//   );
// };

// export default Header;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter';
// import './header.css';
// import BasicSpeedDial from './speeddail';
// import data from './data.json';

// const Header = () => {
//   return (
//     <>
//       <motion.header
//         id="home"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="header-content"
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <Typewriter
//             words={['Hey,',`This is ${data.name}`, 'Welcome to my World of Code;']}
//             // words={[`Hey, This is ${data.name}`]}
//             loop={Infinity}
//             cursor
//             cursorStyle='|'
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           {data.jobTitle}
//         </motion.p>
//         <div className="header-buttons">
//           {data.buttons.map((button, index) => (
//             <motion.a
//               key={index}
//               href={button.link}
//               className="button"
//               target={button.target}
//               rel={button.rel}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.3 + 1.5, duration: 1 }}
//             >
//               {button.text}
//             </motion.a>
//           ))}
//         </div>
//       </motion.header>
//       <BasicSpeedDial />
//     </>
//   );
// };

// export default Header;
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './header.css';
import BasicSpeedDial from './speeddail';
import data from './data.json';
import { blue } from '@mui/material/colors';


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
        1+,    // Experience years
        ["Django REST Framework", "MySQL", "MongoDB"],
        ["System design", "Data structures and algorithms", "C++"]
    );

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
        1+,    // Experience years
        ["Django REST Framework", "MySQL", "MongoDB"],
        ["System design", "Data structures and algorithms", "C++"]
    );



  from enum import Enum
from abc import ABC

class Book:
    def __init__(self, title, author, publisher, genre, copies):
        self.title = title
        self.author = author
        self.publisher = publisher
        self.genre = genre
        self.copies = copies
    
    def get_title(self):
        return self.title
    
    def get_copies(self):
        return self.copies
    
    def get_author(self):
        return self.author
    
    def get_genre(self):
        return self.genre

    def update_copy(self, cnt: int):
        self.copies += cnt
        if self.copies < 0:
            self.copies = 0
    
    def __str__(self):
        return f"Title: {self.title}, Author: {self.author}, Publisher: {self.publisher}, Genre: {self.genre}, Copies: {self.copies}"

class ROLE(Enum):
    Admin = 1 
    Librarian = 2 
    Member = 3 

class User(ABC):
    users = dict()
    def __init__(self, name, email, contact, active = True) -> None:
        self.name = name
        self.email = email
        self.contact = contact
        self.role = None
        self.is_active = active
        self.users[self.name] = self

    def get_role(self):
        return self.role.name
    
    def get_name(self):
        return self.name

    def get_user(self):
        return f"{self.name} - {self.email} -{self.role.name} - {self.is_active}"
    
    def change_status(self):
        self.is_active = False

    @classmethod
    def get_all_users(self):
        return self.users

class Admin(User):
    def __init__(self, name, email, contact):
        super().__init__(name, email, contact)
        self.role = ROLE.Admin

class Librarian(User):
    def __init__(self, name, email, contact):
        super().__init__(name, email, contact)
        self.role = ROLE.Librarian

class Member(User):
    borrowed_books = dict()
    reserved_books = []

    def __init__(self, name, email, contact):
        super().__init__(name, email, contact)
        self.role = ROLE.Member
    
    def borrow_book(self, borrow_date, return_date, user: User, book: Book):
        if user.get_name() not in self.borrowed_books:
            self.borrowed_books[user.get_name()] = []
        
        self.borrowed_books[user.get_name()].append({
            "book": book,
            "issued": borrow_date,
            "return": return_date,
            "trans_closed": False
        })
    
    def changestatus(self, user: User, book: Book):
        if user.get_name() in self.borrowed_books:
            for entry in self.borrowed_books[user.get_name()]:
                if entry["book"].get_title() == book.get_title():
                    entry['trans_closed'] = True
                    break
            else:
                raise ValueError("Book not found in borrowed books for this user")
        else:
            raise ValueError("User not found in borrowed books")

class BookManagement:
    books = dict()
    def add_book(self, book : Book, user : User):
        
        if not isinstance(user, (Admin, Librarian)):
            raise PermissionError("Not Authorized")
        
        title = book.get_title()
        if title not in self.books:
            self.books[book.get_title()] = book
        else:
            return f"Book '{title}' already exists!"
        
    def update_copies(self, book, count):
        title = book.get_title()
        print(isinstance(self.books[title], Book))
        if title in self.books:
            self.books[title].update_copy(count)
            print('Library updated Successfully')
        else:
            return f"Book '{title}' does not exist!"
    
    def remove_book(self, book : Book, user : User):
        title = book.get_title()
        if title in self.books:
            del self.books[title]
        else:
            return f"Book '{title}' does not exists!"
    
    def search(self, keyword):
        for title, book in self.books.items():
            if keyword in title or keyword in book.get_author() or keyword in book.get_genre():
                print(book)

    
    @classmethod
    def get_all_books(self):
        return self.books

from datetime import datetime, timedelta

class BorrowReturnManagement():
    def lendbook(self, user : User, book : Book, borrow_date, return_date):
        if not isinstance(user, Member) and  book.get_title() not in BookManagement.get_all_books():
            return ValueError('Either user not authorized or book is not available')
        
        if book.get_copies() > 0 :
            user.borrow_book(borrow_date, return_date, user, book)
            BookManagement().update_copies(book, -1)
            print(f"{book.get_title()} lent to {user.get_name()}------------------------------------------------------------")

        else :
            return 'Not enough copies!!!'

    def returnbookinfo(self, book: Book, user: User, return_date: datetime) -> int:
        if user.get_name() not in Member.borrowed_books:
            raise ValueError('User has not borrowed any books')
        
        for entry in Member.borrowed_books[user.get_name()]:
            if entry["book"].get_title() == book.get_title():
                issued_date = entry["issued"]
                borrowed_days = (return_date - issued_date).days
                amt_due = borrowed_days * 10
                return amt_due
        else:
            raise ValueError('User did not borrow this book')


    def cleardue(self, book : Book, user : User) -> bool:
        book_mgmt = BookManagement()
        book_mgmt.update_copies(book, 1)
        user.changestatus(user, book)
        print("Transaction Successful!")
        return True


from datetime import datetime, timedelta
import time

class LibraryManagementSystemDemo:
    _admin = None
    _librarian = None
    _members = dict()

    @staticmethod
    def login():
        while True:
            print("\n===== Library Management System =====")
            print("1. Admin Login")
            print("2. Librarian Login")
            print("3. Member Login")
            print("4. Exit")
            choice = input("Enter your choice (1-4): ")

            if choice == '1':
                if LibraryManagementSystemDemo._admin is None:
                    name = input("Enter admin name: ")
                    email = input("Enter admin email: ")
                    password = input("Enter admin password: ")
                    LibraryManagementSystemDemo._admin = Admin(name, email, password)
                    LibraryManagementSystemDemo.run_admin()
                elif LibraryManagementSystemDemo._admin is not None:
                    LibraryManagementSystemDemo.run_admin()
                else:
                    print("Admin is already logged in.")
            elif choice == '2':
                if LibraryManagementSystemDemo._librarian is not None:
                    LibraryManagementSystemDemo.run_librarian()
                elif LibraryManagementSystemDemo._librarian is None:
                    print("Librarian is not registered.")
                else:
                    print("Librarian is already logged in.")
            elif choice == '3':
                LibraryManagementSystemDemo.run_member(email)
                del LibraryManagementSystemDemo._members[email] 
            elif choice == '4':
                print("Exiting Library Management System...\n \n")
                time.sleep(3)
                print("System closed!!! \n")
                break
            else:
                print("Invalid choice. Please enter a number from 1 to 4.")

    @staticmethod
    def run_admin():
        while True:
            print("\n===== Admin Panel =====")
            print("1. Add User")
            print("2. View All Users")
            print("3. Logout")
            print("0. Exit")
            choice = input("Enter your choice (0-3): ")

            if choice == '1':
                # Add User
                user_type = input("Enter user type (Librarian/Member): ").lower()
                name = input("Enter name: ")
                email = input("Enter email: ")
                password = input("Enter password: ")

                if user_type == 'librarian':
                    LibraryManagementSystemDemo._librarian = Librarian(name, email, password)
                elif user_type == 'member':
                    LibraryManagementSystemDemo._members[email] = Member(name, email, password)
                else:
                    print("Invalid user type. Please try again.")

            elif choice == '2':
                # View All Users
                all_users = User.get_all_users()
                for user in all_users.values():
                    print(user.get_user())

            elif choice == '3':
                # Logout
                LibraryManagementSystemDemo._admin = None
                print("Admin logged out successfully.")
                break

            elif choice == '0':
                print("Exiting admin panel...")
                break

            else:
                print("Invalid choice. Please enter a number from 0 to 3.")

    @staticmethod
    def run_librarian():
        while True:
            print("\n===== Librarian Panel =====")
            print("1. Add Book")
            print("2. View All Books")
            print("3. Lend Book")
            print("4. Return Book")
            print("5. Logout")
            print("0. Exit")
            choice = input("Enter your choice (0-5): ")
            book_mgmt = BookManagement()
            br_mgnt = BorrowReturnManagement()

            if choice == '1':
                # Add Book
                title = input("Enter book title: ")
                author = input("Enter author name: ")
                publisher = input("Enter publisher: ")
                genre = input("Enter genre: ")
                copies = int(input("Enter number of copies: "))
                book = Book(title, author, publisher, genre, copies)
                book_mgmt.add_book(book, LibraryManagementSystemDemo._librarian)

            elif choice == '2':
                # View All Books
                print("\nAll Books:")
                for title, book in book_mgmt.get_all_books().items():
                    print(book)

            elif choice == '3':
                # Lend Book
                email = input("Enter member email to lend book: ")
                if email in LibraryManagementSystemDemo._members:
                    member = LibraryManagementSystemDemo._members[email]
                    title = input("Enter book title to lend: ")
                    if title in book_mgmt.get_all_books():
                        book_to_lend = book_mgmt.get_all_books()[title]
                        lend_date = datetime.today()
                        return_date = lend_date + timedelta(days=10)
                        br_mgnt.lendbook(member, book_to_lend, lend_date, return_date)
                    else:
                        print("Book not found.")
                else:
                    print("Member not found.")

            elif choice == '4':
                # Return Book
                email = input("Enter member email to return book: ")
                if email in LibraryManagementSystemDemo._members:
                    member = LibraryManagementSystemDemo._members[email]
                    title = input("Enter book title to return: ")
                    if title in book_mgmt.get_all_books():
                        book_to_return = book_mgmt.get_all_books()[title]
                        amount_due = br_mgnt.returnbookinfo(book_to_return, member, datetime.today())
                        print(f"Amount due: {amount_due}")
                        amount_paid = float(input('Enter amount paid: '))
                        print("\nInitiating transaction ...\n")
                        br_mgnt.cleardue(book_to_return, member)
                    else:
                        print("Book not found.")
                else:
                    print("Member not found.")

            elif choice == '5':
                # Logout
                LibraryManagementSystemDemo._librarian = None
                print("Librarian logged out successfully.")
                break

            elif choice == '0':
                print("Exiting librarian panel...")
                break

            else:
                print("Invalid choice. Please enter a number from 0 to 5.")

    @staticmethod
    def run_member(email):
        while True:
            print(f"\n===== Member Panel ({email}) =====")
            print("1. View My Borrowed Books")
            print("2. Return Book")
            print("3. Logout")
            print("0. Exit")
            choice = input("Enter your choice (0-3): ")
            book_mgmt = BookManagement()
            br_mgnt = BorrowReturnManagement()

            if choice == '1':
                # View My Borrowed Books
                member = LibraryManagementSystemDemo._members[email]
                # borrowed_books = br_mgnt.get_borrowed_books(member)
                borrowed_books = Member.borrowed_books
                print("\nMy Borrowed Books:")
                for book in borrowed_books:
                    print(book)

            elif choice == '2':
                # Return Book
                member = LibraryManagementSystemDemo._members[email]
                title = input("Enter book title to return: ")
                if title in book_mgmt.get_all_books():
                    book_to_return = book_mgmt.get_all_books()[title]
                    amount_due = br_mgnt.returnbookinfo(book_to_return, member, datetime.today())
                    print(f"Amount due: {amount_due}")
                    amount_paid = float(input('Enter amount paid: '))
                    print("\nInitiating transaction ...\n")
                    br_mgnt.cleardue(book_to_return, member)
                else:
                    print("Book not found.")

            elif choice == '3':
                # Logout
                print(f"{email} logged out successfully.")
                break

            elif choice == '0':
                print("Exiting member panel...")
                break

            else:
                print("Invalid choice. Please enter a number from 0 to 3.")

if __name__ == "__main__":
    LibraryManagementSystemDemo.login()

`;





const Header = () => {
  return (
    <>
      <motion.header
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header-content"
      >
       <h1
          style={{
            color: "blue",
            fontFamily: "Arial, sans-serif", 
            textAlign: "center", 
            borderRadius: "10px",
            fontSize: "120px",
            textShadow: "0 0 20px blue"
          }}
        >
            Hi,
        </h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typewriter
            words={[`This is ${data.name}`, 'Welcome to my World of Code ;']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {data.jobTitle}
        </motion.p>
        <div className="header-buttons">
          {data.buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.link}
              className="button"
              target={button.target}
              rel={button.rel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 1.5, duration: 1 }}
            >
              {button.text}
            </motion.a>
          ))}
        </div>
      </motion.header>
      <motion.pre
        className="background-text"
        initial={{ opacity: 0.4 }} // Adjust opacity as needed
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <Typewriter
          words={[`${SoftwareEngineerCode}`]}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={1} // Adjust speed for typing effect
          deleteSpeed={0}
          delaySpeed={0}
        />
      </motion.pre>
    </>
  );
};

export default Header;
