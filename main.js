
//sideOverlay Example
//adding the Event Listeners
const openBtn = document.querySelector('span');


//opening the sideOverlay
function openNav(){ 
    document.querySelector('.sidenav').style.width = "100%";
    //document.querySelector('#main').style.marginLeft = "250px";
    document.body.style.background.color = "rgba(0,0,0,0.4);"
    
    
};



openBtn.onclick =openNav;
//for close the sideNav
const closeBtn = document.querySelector('.closebtn');
function closeNav(){
    document.querySelector('.sidenav').style.width = "0";
    //document.querySelector('#main').style.marginLeft = "0";
    document.body.style.background = "background:linear-gradient(to right, rgb(255, 0, 0), rgb(255, 10, 235));"

};
closeBtn.onclick = closeNav;


