/**global variables goes here */

//here is a constant variable to count the number of sections
const section_numbers = document.querySelectorAll("section");

//get the element needed to add a the dynamic links to it t
const UnorderedList = document.getElementById("navbar__list");

/** create a function needed to add all the new list of links to the un-ordered list */
function NavBarBuild() {
  for (let i = 0; i < section_numbers.length; i++) {
    //create the link text and element
    let linkname = section_numbers[i].getAttribute("data-nav");

    //here is the variable needed to create a link to access each of the needed section
    let link = document.createElement("a");

    //here is the varibal eneeded to create a list item for the newely added section
    let list_of_links = document.createElement("li");

    //here we will needed to append the needed element as a child
    //this line of code desicribes as show:-
    /**
     * <li>
     * <a></a>
     * </li>
     */
    //this means append the link to the needed section inside the parent one which is the listed item tag <li></li>
    list_of_links.appendChild(link);

    //the second part needed to add the child as the previous <li></li> to it's parent <ul></ul>
    //so , the final sturcture will be like this:-
    /**
     * <ul>
     * <li>
     * <a>
     * </a>
     * </li>
     * </ul>
     */
    UnorderedList.appendChild(list_of_links);

    //create the text content for the needed elements , by creating a text nodes
    let TextNodes = document.createTextNode(linkname);
    link.appendChild(TextNodes);

    //add event that by clicking to each link navigate by scrolling to the corresponding section
    list_of_links.addEventListener("click", (event) => {
      section_numbers[i].scrollIntoView({ behavior: "smooth" });
    });

    //function call needed to determine the active section
    ActiveSection();
  }
}

/** create a function needed to find the active section */
function ActiveSection() {
  //add an event listenr of type scroll
  window.addEventListener("scroll", () => {
    //loop through all the added sections to get the top of height for each section
    //to return the size of an element and its position relative to the viewport
    for (let i = 0; i < section_numbers.length; i++) {
      let rect = section_numbers[i].getBoundingClientRect();

      //determine if the user scrolling to the top for each section or not
      //by adding a condition needed to determine if the top of the needed section is greater than zero
      // or if the top is smaller than the needed height corrseponding to the view port
      if (rect.top > 0 && rect.top < 400) {
        //declare a variable that catch the data nav
        let DataNav = section_numbers[i].getAttribute("data-nav");
        //if active section is found , remove the active class from the rest sections

        for (let j = 0; j < section_numbers.length; j++) {
          section_numbers[j].classList.remove("your-active-class");
        }
        section_numbers[i].classList.add("your-active-class");
        //declare a new varibale to collect all the added links to the list

        let Attached_links = document.querySelectorAll("a");

        for (let k = 0; k < Attached_links.length; k++) {
          if (Attached_links[k] == DataNav) {
            for (let z = 0; z < Attached_links.length; k++) {
              Attached_links[z].classList.add("link-active-class");
            }
            Attached_links[k].classList.add("link-active-class");
          }
        }
      }
    }
  });
}

//function call goes here
NavBarBuild();
