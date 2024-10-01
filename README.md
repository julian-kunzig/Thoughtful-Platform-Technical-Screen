# Robotic Package Sorting

This repository contains a solution for sorting packages in Thoughtful's robotic automation factory. 

The function sorts packages based on their volume and dimensions and dispatches them to the appropriate stack.

## Problem Statement

Packages are classified into two categories:
1. **Bulky Packages**: Volume >= 1,000,000 cm³ or any dimension >= 150 cm.
2. **Regular Packages**: All packages that do not meet the criteria for being bulky.

The function `sortPackage` determines which stack a package belongs to based on these criteria.

## Project Structure

- **src/**: Contains the main sorting function (`sortPackage.js`).
- **tests/**: Contains the test suite (`sortPackage.test.js`).

## Running the Code

To run the sorting function, ensure you have **Node.js** installed.

1. Clone the repository:
   git clone 
   cd thoughtfulAiAssessment
   
   ## Install dependencies:
   npm install

 ## Run the sorting function:
 node src/sortPackage.js

  ## Running the Tests

This project uses Jest for testing.

To run the tests, run the following command:

npm test

