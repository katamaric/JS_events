// Functionality 1 - Footer click counter
let footer = document.querySelector('footer');
let footerClickCounter = 1

footer.addEventListener('click', function() {
  console.log("click number " + footerClickCounter);
  footerClickCounter += 1
});

// Functionality 2 - Hamburger menu toggle
let hamburgerMenu = document.querySelector('.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

hamburgerMenu.addEventListener('click', function() {
  navbarHeader.classList.toggle('show');
});

// Functionality 3 - Edit in red
let card = document.getElementsByClassName('card-body')[0];
let editButton = card.getElementsByClassName('btn-outline-secondary')[0];

editButton.addEventListener('click', function() {
  card.style.color = 'red';
});

// Functionality 4 - Edit in green + toggle
let secondCard = document.getElementsByClassName('card-body')[1];
let secondEditButton = secondCard.getElementsByClassName('btn-outline-secondary')[0];

secondEditButton.addEventListener('click', function() {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = 'black';
    
    }else {
      secondCard.style.color = 'green';
    }
});

// Functionality 5 - CSS boom ! 
let header = document.querySelector('header');

header.addEventListener('dblclick', function() {
  let link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
  let head = document.querySelector('head');

  if (link) {
    link.remove();
  } else {
    let newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    newLink.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
    newLink.crossOrigin = 'anonymous';
    head.appendChild(newLink);
  }
});

// Functionality 6 - Lil magic cards
let cards = document.querySelectorAll('.col-md-4');

for (let i = 0 ; i < cards.length ; i++) {
  let buttonView = cards[i].querySelectorAll("button")[0];
  let cardText = cards[i].querySelector(".card-text");
  let cardImage = cards[i].querySelector(".card-img-top");

  buttonView.addEventListener("mouseover", lilCard);

  function lilCard() {
    cardText.classList.toggle("collapse");

    if (cardImage.style.width != "20%") {
      cardImage.style.width = "20%";
    } else if (cardImage.style.width == "20%") {
      cardImage.style.width = "";
    }
  }
}

// Functionality 7 - To the right




