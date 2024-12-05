/* Requirements:
Star Rating Component must update the Rating count on click of Stars 

Must Have Features:
1. Star Rating Component must have 5 Stars
2. Star Rating Component must have a Rating count
3. Star Rating Component must handle hover states

Good to Have Features:

1. Star Rating Component can take decimal values
2. Star Rating Component can have slider for rating
3. Star Rating Component can show emojis based on rating instead of numbers


Approach:

1. Create a Star Rating Component with 5 Stars
2. Create a Rating count
3. Handle 3 events:
    a. Mouse Enter
       - Update Star color to Green on hover
    b. Mouse Leave
       - Update Star color to Gray on hover out
    c. Mouse Click
       - Update the Rating count on click of Stars
       - Update Stars that user has clicked to Green
*/

const container = document.querySelector(".container");
const starContainer = document.querySelector(".star-container");
const countElement = document.querySelector(".count");

const starArray = document.querySelectorAll(".star");

let selectedRating = 0;

const getStarIndex = (element) => {
    const idx = Array.from(starArray).indexOf(element);
    console.log("idx", idx);
    return Array.from(starArray).indexOf(element);
    // return element.hasAttribute("data-index")? parseInt(element.getAttribute("data-index")): getStarIndex(element.parentElement);
}

const updateRating = (selectedStar) => {
    const index = getStarIndex(selectedStar);
    if(index === -1) {
        return;
    }
    selectedRating = index + 1;
    starArray.forEach((star, i) => {
        if (i <= index) {
            star.classList.add("star-filled");
        } else {
            star.classList.remove("star-filled");
        }
    });
}

const resetStars = (selectedStar) => {
    const index = getStarIndex(selectedStar);
    let count = 0;
    if(index === -1) {
        return;
    }
    if (selectedRating != 0) {
        count = selectedRating;
    } else {
        count = index;
    }
    starArray.forEach((star, i) => {
        if (i < count) {
            star.classList.add("star-filled");
        } else {
            star.classList.remove("star-filled");
        }
    });
}

const handleClick = (event) => {
    updateRating(event.target);
    countElement.innerText = `Rating Count: ${selectedRating}`;
};

const handleStarHover = (event) => {
    const index = getStarIndex(event.target);
    if(index === -1) {
        return;
    }
    if(selectedRating != 0 && index <= selectedRating) {
        return;
    }
    starArray.forEach((star, i) => {
        if (i <= index) {
            star.classList.add("star-filled");
        } else {
            star.classList.remove("star-filled");
        }
    });
};

const handleStarLeave = (event) => {
    resetStars(event.target);
};

starContainer.addEventListener("click", handleClick);

starContainer.addEventListener("mouseover", handleStarHover);

starContainer.addEventListener("mouseleave", handleStarLeave);