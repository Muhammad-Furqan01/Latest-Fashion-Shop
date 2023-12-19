function sub1drop() {
    let firstdrop = document.getElementsByClassName("sub1")[0];
    if (firstdrop.style.display === 'none' || firstdrop.style.display === '') {
        firstdrop.style.display = 'block';
    } 
    else {
        firstdrop.style.display = 'none';
    }
}
function sub2drop() {
    let seconddrop = document.getElementsByClassName("sub2")[0];
    if (seconddrop.style.display === 'none' || seconddrop.style.display === '') {
        seconddrop.style.display = 'block';
    } 
    else {
        seconddrop.style.display = 'none';
    }
}