document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount = calculateTotal();

    renderExpenses();
    updateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount,
            };
            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            // Clear inputs
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    const resetButton = expenseForm.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default reset behavior

        expenses = []; // clear in-memory array
        localStorage.removeItem('expenses'); // clear localStorage
        renderExpenses(); // clear UI list
        updateTotal(); // reset total display

        // Clear input fields
        expenseNameInput.value = "";
        expenseAmountInput.value = "";
    });

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.name} - ${formatCurrency(expense.amount)}
                <button data-id="${expense.id}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function updateTotal() {
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = formatCurrency(totalAmount);
    }

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId);

            saveExpensesToLocal();
            renderExpenses();
            updateTotal();
        }
    });

    // 💸 Currency formatter for Indian Rupees
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2
        }).format(amount);
    }
});

