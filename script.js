function showSubcategories(category) {
    // Ocultar la página principal
    document.getElementById("main-page").style.display = "none";

    // Ocultar todas las subcategorías antes de mostrar la correspondiente
    const allSubcategories = document.querySelectorAll('.subcategory-page');
    allSubcategories.forEach(subcategory => subcategory.style.display = "none");

    // Mostrar las subcategorías correspondientes
    document.getElementById(`${category}-subcategories`).style.display = "block";
}

function showElements(subcategory) {
    // Ocultar todas las subcategorías antes de mostrar los elementos
    const allSubcategories = document.querySelectorAll('.subcategory-page');
    allSubcategories.forEach(subcategory => subcategory.style.display = "none");

    // Mostrar los elementos correspondientes
    document.getElementById(subcategory).style.display = "block";
}

function backToCategories() {
    // Volver a la página principal
    document.getElementById("main-page").style.display = "block";

    // Ocultar todas las subcategorías y elementos
    const allSubcategories = document.querySelectorAll('.subcategory-page');
    allSubcategories.forEach(subcategory => subcategory.style.display = "none");
    const allElements = document.querySelectorAll('.element-page');
    allElements.forEach(element => element.style.display = "none");
}

function backToSubcategories(subcategoryId) {
    // Volver a las subcategorías correspondientes
    document.getElementById(subcategoryId).style.display = "block";

    // Ocultar todos los elementos
    const allElements = document.querySelectorAll('.element-page');
    allElements.forEach(element => element.style.display = "none");
}
