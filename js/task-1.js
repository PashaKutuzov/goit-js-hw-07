console.dir(document)

const categoriesItem = document.querySelector("#categories")

console.dir(`Number of categories: ${categoriesItem.childElementCount}`);

const ulElement = document.querySelectorAll(".item")



ulElement.forEach((item) => {
  const categoriesName = item.querySelector("h2").textContent;
const itemsCount = item.querySelectorAll("ul li").length


  console.log(`Category: ${categoriesName }`)
  console.log(`Elements: ${itemsCount}`)
})
