const currentDateContainer = document.getElementById('current-date-p');
const currentDateElement = new Date(currentDate + "T00:00:00.000-05:00").toDateString();
currentDateContainer.innerHTML = currentDateElement;




const indexContainer = document.getElementById('index-container');

const createCard = (arrayData) => {

    let cardsUpComingEvents = '';
    let cardsPastEvents = '';

    arrayData.forEach((event) => {
        if(event.date >= currentDate){
            cardsUpComingEvents += 
            `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top alt=${event.name}>
                <div class="card-header bg-dark text-danger bg-gradient">
                    Past Event
                </div>
                <div class="card-body">
                <p class="card-text fs-6 p-0 mb-1 text-white-50">${event.category}</p>
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <a href="details.html?id=${event._id}" class ="btn btn-primary">Get Details</a>
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
                    <p class="card-text fs-6 p-0 mb-1 text-white-50">${event.category}</p>
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
    });

    indexContainer.innerHTML = cardsUpComingEvents + cardsPastEvents
}

createCard(events)

//categorias

const categoryContainer = document.getElementById('categoryContainer');

const filterCategories = (arrayData) => {
    let categoriesUnique = [];

    arrayData.forEach(event => {
        if (!categoriesUnique.includes(event.category)) {
            categoriesUnique.push(event.category);
        }
    });

    return categoriesUnique.sort();
}

const createCategories = (arrayCat) => {
    let categories = '';

    arrayCat.forEach(cat => {
        categories += `
        <label class="d-flex align-items-center">
            <input type="checkbox" class="custom-checkbox check" name="category" value="${cat}">
            <span>${cat}</span>
        </label>
        `
    });

    categoryContainer.innerHTML = categories
}

const arrCategories = filterCategories(events);
createCategories(arrCategories);

const arrCategorySelected = (() => {
    searchInput.value = ''
    let selection = []
    
    arrCategories.forEach(category => {
        let selector = document.getElementById(category);
        if (selector.checked) {
            selection.push(category)
        }
    })

    if (selection.length != 0) {
        createCardsHome(filterEventsByCategory(selection))
    } else {
        indexContainer.innerHTML = ''
    }

    let checkedForSearch = filterEventsByCategory(selection)
    ultimateArr = checkedForSearch.map(event => event)
})

const checkbox = document.querySelectorAll(".check")


const checkBoxArr = Array.from(checkbox)

let filterSavedByCategory = []

let categoriesFilter = []
checkBoxArr.forEach(check => {
    check.addEventListener("change", () => {

        filterSavedByCategory = []
        
        if(check.checked){
            categoriesFilter.push(check.value)
            
        } else{
            let index = categoriesFilter.indexOf(check.value)
            if(index !== -1){
                categoriesFilter.splice(index, 1)
            }

        }
        
        filterbyCategory(events, categoriesFilter)

        let crossFilter = []

        if(searchSave == ''){
            createCard(filterSavedByCategory)
        }else {

            for(let i = 0; i < filterSavedByCategory.length; i++){
                if(filterSavedByCategory[i].name.toLowerCase().includes(searchSave.toLocaleLowerCase())){
                    crossFilter.push(filterSavedByCategory[i])
                }
            } 
            createCard(crossFilter)
        }   
        console.log(crossFilter)
    })

    

    function filterbyCategory(eventos, checkedCategories){
        for(let i = 0; i < eventos.length;i++){
             for(let j = 0; j < checkedCategories.length; j++){
                 if(eventos[i].category==checkedCategories[j]){
                     filterSavedByCategory.push(eventos[i])
                 }
                 
             }
         }
         console.log(filterSavedByCategory)
    }
} )

//buscador
let searchSave = '';

const searchInput = document.getElementById('mySearch')
const noResultsMessage = document.getElementById('no-result-message')

searchInput.addEventListener("keyup", () => {
    let filteredCards = events.filter((event) => event.name.toLowerCase().includes(searchInput.value.trim().toLowerCase()))

    searchSave = searchInput.value;
    

    // 
    if(filterSavedByCategory.length == 0){
        createCard(filteredCards)
    } else{

        let crossFilter = []


        for(let i = 0; i < categoriesFilter.length;i++ ){
            for(let j = 0; j < filteredCards.length; j++){
                if(categoriesFilter[i] == filteredCards[j].category){
                    crossFilter.push(filteredCards[j])
                }
            }
        }

        console.log(crossFilter)
        createCard(crossFilter)
    }

    // if (Object.keys(filteredCards).length === 0) {
    //     noResultsMessage.innerHTML = `
    //     <h1>Page not found </h1>`
    // } else {
    //     noResultsMessage.innerHTML = '';
    // }
})