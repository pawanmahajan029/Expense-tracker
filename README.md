# Expense Tracker

This is a simple web-based Expense Tracker built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to manage their expenses by adding items, calculating totals, and storing data locally in the browser.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Features

- Add expenses with name and amount
- Delete individual expense entries
- Reset all data at once
- Automatically calculates total amount
- Saves data using localStorage (persists after reload)
- Displays total in Indian Rupees (₹)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- LocalStorage API
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Function Overview

### DOMContentLoaded
Initializes the app after the HTML page is fully loaded.

### Form Submit Event
Handles the addition of a new expense:
- Takes name and amount from input
- Validates the data
- Adds it to the list
- Saves it to localStorage
- Updates the total

### Reset Event
Resets the entire app:
- Clears the list
- Removes data from localStorage
- Resets total to zero

### renderExpenses()
Displays the current list of expenses on the screen.

### calculateTotal()
Calculates the sum of all expense amounts.

### saveExpensesToLocal()
Stores the updated expenses array in the browser's local storage.

### updateTotal()
Updates the total display based on current expenses.

### Expense Deletion
Deletes an individual expense when the delete button is clicked:
- Removes from the array
- Updates localStorage
- Re-renders list and total

### formatCurrency(amount)
Formats numbers as Indian Rupees using JavaScript’s `Intl.NumberFormat`.


