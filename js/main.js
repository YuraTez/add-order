const categoryListItem = document.querySelectorAll(".category-list__item--pop-up");
const categoryBlockList = document.querySelectorAll(".category-content");


function removeActive(arr, active, data, dataName) {
    arr.forEach((el) => {
        let dataContentBlock = el.getAttribute(dataName);
        el.classList.remove(active)
        if (dataContentBlock === data) {
            el.classList.add("is-active")
        }
    })
}

if (categoryListItem) {
    categoryListItem.forEach((el) => {
        el.addEventListener("click", () => {
            event.preventDefault()
            let dataValue = el.getAttribute("data-category")

            removeActive(categoryListItem, "is-active");
            removeActive(categoryBlockList, "is-active", dataValue,"data-category");
            el.classList.add("is-active")


        })
    })
}

const categoryForm = document.querySelectorAll(".category-selection-main .category-list__item");
const categoryFormSelected = document.querySelectorAll(".category-selection-content__item");
const categoryFormSelectedContent = document.querySelector(".category-selection-content");
const categorySelectionReady = document.querySelector(".category-selection-ready")
let formCategorySelectedItem = document.querySelector(".category-selection-ready__main")

if (categoryForm) {
    categoryForm.forEach((el) => {
        el.addEventListener("click", () => {
            event.preventDefault()
            let dataValue = el.getAttribute("data-announcement-category")

            removeActive(categoryForm, "is-active");
            removeActive(categoryFormSelected, "is-active", dataValue, "data-announcement-category");
            el.classList.add("is-active")

        })
    })


    if(categoryFormSelectedContent){
        categoryFormSelectedContent.addEventListener("click",(event)=>{
            event.preventDefault()
            let target = event.target;
            let numberTab = target.closest(".category-selection-content__item").getAttribute("data-announcement-category");
            let categoryItem = document.querySelector(`.category-list__item[data-announcement-category="${numberTab}"]`);

            if(target.closest(".category-selection-list__item")){
                $(".category-selection-list__item").removeClass("active");
                let text = target.closest(".category-selection-list__item").innerText;
                $(".category-selection").hide(600)
                $('html, body').animate({
                    scrollTop: $("#categorySelection").offset().top - 120
                }, 1000);
                categorySelectionReady.classList.add("active")
                formCategorySelectedItem.innerText = categoryItem.innerText + ' - '+  text;
                target.classList.add("active");
            }
        })
    }

    $(".category-selection-ready-btn").on("click", (event)=>{
        categorySelectionReady.classList.remove("active")
        $(".category-selection").show(600)
    })
}


$("#productName").on("input" , function (){
    if($(this).val().length > 2){
        $(".categories").slideDown()
    }else{
        $(".categories").slideUp()
    }
})

$(".categories-list__el").on("click" , function (){
    let text = $(this).text();
    formCategorySelectedItem.innerText = text;
    $(".category-selection").hide(600)
    categorySelectionReady.classList.add("active")
})