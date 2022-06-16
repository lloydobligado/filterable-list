let filterInput = document.querySelector('#filterInput');
filterInput.addEventListener('keyup', filterNames = () => {
    let filterValue = document.querySelector('#filterInput').value.toUpperCase();
    console.log(filterValue)
    // get ul
    let ul = document.querySelector('#names');
    // get li
    let li = ul.querySelectorAll('li.collection-item');
    //loop through li
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
});