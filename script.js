function calculateSavings() {
    // Get the input values
    const shopName = document.getElementById('shopName').value.trim();
    const businessType = document.getElementById('businessType').value.trim();
    const weeklyPurchases = parseFloat(document.getElementById('weeklyPurchases').value);
    const weeklyDeliveries = parseInt(document.getElementById('weeklyDeliveries').value);
    
    // Validate inputs
    if (shopName === "") {
        alert("Please enter a shop name.");
        return;
    }
    
    if (businessType === "") {
        alert("Please enter a business type.");
        return;
    }

    if (isNaN(weeklyPurchases) || weeklyPurchases <= 0) {
        alert("Please enter a valid positive number for weekly purchases.");
        return;
    }

    if (isNaN(weeklyDeliveries) || weeklyDeliveries <= 0) {
        alert("Please enter a valid positive number for weekly deliveries.");
        return;
    }

    // Fixed savings rate
    const savingsRate = 0.08;  // 8%

    // Calculate the Annual Purchases
    const annualPurchases = weeklyPurchases * 52;

    // Calculate the Total Savings
    const totalSavings = annualPurchases * savingsRate;

    // Calculate the Weekly Savings
    const weeklySavings = totalSavings / 52;

    // Display the results
    document.getElementById('results').style.display = 'block';
    document.getElementById('annualPurchases').innerHTML = `Annual Purchases: <b>£${annualPurchases.toFixed(2)}</b>`;
    document.getElementById('totalSavings').innerHTML = `Total Savings: <b>£${totalSavings.toFixed(2)}</b>`;
    document.getElementById('weeklySavings').innerHTML = `Weekly Savings: <b>£${weeklySavings.toFixed(2)}</b>`;
    document.getElementById('note').innerHTML = `<b>Note</b>: The Total Savings and Weekly Savings shown above are estimated based on your weekly purchases. `;
    
    
}