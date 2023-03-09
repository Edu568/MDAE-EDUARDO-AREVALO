
// const currentContainer = document.getElementById('current-date-p')
// const currentDate = new Date( currentDate + "T00:00:00.000-05:00").toDateString();

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const eventDetail = events.find(card => card._id == id);
const cardContent = document.getElementById('index-container')
// const eventContainer = document.getElementsById("cards-container");
// const eventDate = new Date( eventDetail.date + "T00:00:00.000-05:00").toDateString();
// currentDateContainer.innerHTML = eventContainer;

  cardContent.innerHTML = ` 
  
  <div class="col-6 col-md-4 col-lg-2 col-x1-2">
        <div class="card" style="width: 18rem;">
                <img src="${eventDetail.image}" class="card-img-top alt=${eventDetail.name}>
                <div class="card-body">
                <h5 class="card-title">${eventDetail.name}</h5>
                <p class="card-text">${eventDetail.description}</p>
                <a href="details.html?id=${eventDetail._id}" class="btn btn-primary">Compra</a>
        </div>
        <div class="card-footer pt-3 pb-3 d-flex justify-content-around align-items-xl-baseline">
                <p class="mb-0 d-flex flex-row flex-md-column flex-xl-row">
                    <span>
                        <i class="bi bi-tag"></i>
                        price:&nbsp;
                    </span>
                    $${eventDetail.price}
                </p>
            
        </div>
    </div>
    `
    console.log(cardContent)
//   cardsContainer.innerHTML = `
//     <div class="col">
//         <div class="card" style="width: 18rem;">
//             <img src="${eventDetail.image}" alt=${eventDetail.name}>
//             <div class="card-body">
//                 <h5 class="card-title">${eventDetail.name}</h5>
//                 <p class="card-text">${eventDetail.description}</p>
//             </div>
//         </div>
//     </div>
//     <div class="card-footer pt-3 pb-3 d-flex justify-content-around align-items-xl-baseline">
//         <p class="mb-0 d-flex flex-row flex-md-column flex-xl-row">
//             <span>
//                 <i class="bi bi-tag"></i>
//                 price:&nbsp;
//             </span>
//             ${eventDetail.price}
//         </p>
//         <a href="./details.html?id=${eventDetail._id}">Details</a>
//     </div>

//     `


