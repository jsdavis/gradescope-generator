# Gradescope Attendance Submission Generator

Quick Node.js server that reads attendance grades from a `grades.csv` file (must be provided by the user) and generates a webpage to print for Gradescope's PDF submission

## Usage

 - Install via `git clone` and `npm install`
 - Make sure to have a `grades.csv` file in the repo's directory
 - Start the server with `npm start`
 - Visit `localhost:3000` to see your generated webpage. Print it to PDF for Gradescope submissions

### Grades.csv

The recommended format of `grades.csv` is as follows:

| Name | Discussion | Monday | Wednesday |
---
| Student1 | x | x | x |
| Student2 |   | x | E |

Where `x` means `present`, blank cells mean `absent`, and `E` means `excused`
