const sections = document.querySelectorAll('.section'); //sections
const sectBtns = document.querySelectorAll('.controls'); //all buttons (parent)
const sectBtn = document.querySelectorAll('.control'); //each individual button
const allSections = document.querySelector('.main-content'); //the body


function PageTransitions() {

    //switch active class from one button to the next
    for(let i = 0; i < sectBtn.length; i++){ //loop through buttons
        sectBtn[i].addEventListener('click', function() {
            let curBtn = document.querySelectorAll('.active-btn'); //grab the current active button
            curBtn[0].className = curBtn[0].className.replace('active-btn', ' '); //remove active class
            this.className += ' active-btn'; //add active class to button clicked
        });
    }

    //sections active class
    allSections.addEventListener('click', (e) => {
        const btnid = e.target.dataset.id; //target the data for the specific button
        console.log(btnid);
        if(btnid) {
            //remove active from other buttons
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active'); //add active class ONLY to active button

            //hide the other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(btnid); //update active for element selected
            element.classList.add('active');
        }
    })


}

PageTransitions();