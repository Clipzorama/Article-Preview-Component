const writerDiv = document.querySelector(".writer");
const profile = document.querySelector(".writer-profile");
const socials = document.querySelector(".socials");

const iconContainer = document.querySelector(".share-container");
const sharePop = document.querySelector(".share-popup");
const iconPath = document.querySelector(".iconer path");


iconContainer.addEventListener("click", () => {

    if(iconPath.getAttribute("fill") === "#6E8098" && window.innerWidth < 1024) {
        writerDiv.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
        iconContainer.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
        iconPath.setAttribute("fill", "var(--Light-Grayish-Blue)");
        profile.classList.add("hidden");
        socials.classList.remove("hidden");
    } else if (iconPath.getAttribute("fill") !== "#6E8098" && window.innerWidth < 1024) {
        writerDiv.style.backgroundColor = "white";
        iconContainer.style.backgroundColor = "var(--Light-Grayish-Blue)";
        iconPath.setAttribute("fill", "#6E8098");
        profile.classList.remove("hidden");
        socials.classList.add("hidden");
    } else if (iconPath.getAttribute("fill") === "#6E8098" && window.innerWidth > 1024) {
        iconContainer.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
        iconPath.setAttribute("fill", "var(--Light-Grayish-Blue)");
        sharePop.classList.remove("hidden")
    } else {
        iconPath.setAttribute("fill", "#6E8098");
        iconContainer.style.backgroundColor = "var(--Light-Grayish-Blue)";
        sharePop.classList.add("hidden")


    }
});