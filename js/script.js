const indexContainer = document.getElementById('index-container');

function createCard(arrayData){
    let cardsUpComingEvents = '';
    let cardsPastEvents = '';
    for(const event of arrayData){
        if(parseInt(event.date) >= parseInt(currentDate)){
            cardsUpComingEvents += 
            `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top alt=${event.name}>
                <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <a href="details.html" class="btn btn-primary">Get Details</a>
            </div>
            <div class="card-footer pt-3 pb-3 d-flex justify-content-around align-items-xl-baseline">
                <p class="mb-0 d-flex flex-row flex-md-column flex-xl-row">
                    <span>
                        <i class="bi bi-tag"></i>
                        price:&nbsp;
                    </span>
                    $${event.price}
                </p>
            
            </div>
        </div>
            `
        }else{
            cardsPastEvents += `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${event.image}" alt=${event.name}>
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer pt-3 pb-3 d-flex justify-content-around align-items-xl-baseline">
                <p class="mb-0 d-flex flex-row flex-md-column flex-xl-row">
                    <span>
                        <i class="bi bi-tag"></i>
                        price:&nbsp;
                    </span>
                    ${event.price}
                </p>
                <a href="details.html">Details</a>
            </div>

            `
        }
    }

    return (cardsUpComingEvents + cardsPastEvents)
}

let cardElements = createCard(events);
indexContainer.innerHTML = cardElements;