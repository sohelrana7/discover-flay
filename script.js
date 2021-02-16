// get ticket information
document.getElementById('booking-button').addEventListener('click', function(){
    const mainContent = document.getElementById('ticket-information');
    mainContent.style.display = "block";
    const departureInfo = document.getElementById('departure-info').value;
    const reachingInfo = document.getElementById('reaching-info').value;
    const finalAmount = document.getElementById('grant-total').innerText;

    document.getElementById('final-amount').innerText = finalAmount;
    document.getElementById('reaching-information').innerText = reachingInfo;
    document.getElementById('departure-information').innerText = departureInfo;

    
    document.getElementById('reaching-info').value = "";
    document.getElementById('departure-info').value = "";
})

// calculate amount
function calculateTotal(){
    const economyTicketInput = document.getElementById('economy-class-ticket');
    const economyTicketCount = parseInt(economyTicketInput.value);

    const firstTicketInput = document.getElementById('first-class-ticket');
    const firstTicketCount = parseInt(firstTicketInput.value);
    
    const totalPrice = economyTicketCount * 100 + firstTicketCount * 150;
    document.getElementById('subtotal').innerText = totalPrice;
    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('grant-total').innerText = totalPrice + tax;
}

//  economy class ticket
function handleEconomyTicketChange(isIncrease){
    const economyClassTicket = document.getElementById('economy-class-ticket');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);
    let newEconomyClassTicket = economyClassTicketNumber;
    if(isIncrease == true){
        newEconomyClassTicket = economyClassTicketNumber + 1;
    }
    if(isIncrease == false && newEconomyClassTicket > 0){
        newEconomyClassTicket = economyClassTicketNumber - 1;
    }
    economyClassTicket.value = newEconomyClassTicket;
    const economyClassTicketPrice = newEconomyClassTicket * 100;
    calculateTotal();
}



//  first class ticket
function handleTicketChange(isIncrease){
    const firstClassTicket = document.getElementById('first-class-ticket');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);
    let newFirstClassTicket = firstClassTicketNumber;
    if(isIncrease == true){
        newFirstClassTicket = firstClassTicketNumber + 1;
    }
    if(isIncrease == false && newFirstClassTicket > 0){
        newFirstClassTicket = firstClassTicketNumber - 1;
    }
    firstClassTicket.value = newFirstClassTicket;
    const firstClassTicketPrice = newFirstClassTicket * 150;
    calculateTotal()
}

