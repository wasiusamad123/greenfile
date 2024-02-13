function openNav(){
    const sidebar = document.getElementById('sidebar');
    if(sidebar.style.display === 'none'){
        sidebar.style.display = "block";
    }else{
        sidebar.style.display = "none";
    }
}
var modal = document.getElementById("myModal");
var modalToggle = document.getElementById("modalToggle");
var span = document.getElementsByClassName("close")[0];

modalToggle.onclick = function() {
    if (modalToggle.checked) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modalToggle.checked = false;
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalToggle.checked = false;
    }
}
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        radioButtons.forEach(rb => {
            if (rb !== this) {
                rb.checked = false;
            }
        });
    });
});
function changeTheme(theme) {
    document.body.className = `${theme}-theme`;
}
function move() {
var elem = document.getElementById("myBar");   
var width = 40;
var id = setInterval(frame, 10);
function frame() {
    if (width >= 100) {
    clearInterval(id);
    } else {
    width++; 
    elem.style.width = width + '%'; 
    }
}
}

$(document).ready(function() {
    $(".dash-link").click(function() {
        // Remove the 'active' class from all li elements
        $("ul li").removeClass("active");
        
        // Add the 'active' class to the parent li element of the clicked link
        $(this).parent().addClass("active");
    });
});