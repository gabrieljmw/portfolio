let skillTabs = document.querySelectorAll('.tabs li');


/* adding an event listener for each tab instead of just on <ul>
    allows for prevention of clicking the gap inbetween the tabs and
    triggering a removal of .selected styling.
*/

skillTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        let sel = document.querySelectorAll('.selected')

        sel.forEach(el => {
            el.classList.remove('selected')
        });
        e.target.classList.add('selected')

        let skillSets = document.querySelectorAll(".skills ul")
        skillSets.forEach(set => {
            set.classList.add("hide")
            if (e.target.dataset.type == set.classList[0]) {
                set.classList.remove("hide")
            }
        })

    })
})