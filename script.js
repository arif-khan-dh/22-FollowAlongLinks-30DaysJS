const span = document.createElement('span');
const hrefs = document.querySelectorAll('a');

document.body.appendChild(span);

// document.body.addEventListener('mousemove', handleEvent);
window.addEventListener('resize', handleWindowResize);
hrefs.forEach(href => {
    href.addEventListener('mouseover', handleMouseOver)
});

function handleWindowResize(e) {
    if(lastHref) {        
        const top = lastHref.offsetTop - vPadding/2;
        const left = lastHref.offsetLeft - hPadding/2;
        span.style.top = top+ 'px';
        span.style.left = left + 'px';        
    }    
}

const hPadding = 16, vPadding = 10;
let lastHref = undefined;
function handleMouseOver() {
    if(lastHref) {
        lastHref.classList.remove('black');
    }
    lastHref = this;
    const {offsetWidth:width, offsetHeight:height, offsetTop:top, offsetLeft:left} = this;     
    span.style.width = (width + hPadding) + 'px';
    span.style.height = (height + vPadding) +'px';
    span.style.top = (top - vPadding/2)+ 'px';
    span.style.left = (left - hPadding / 2) + 'px';
    span.classList.add('highlight');
    this.classList.add('black');
}

// const hPadding = 16, vPadding = 10;
// function handleEvent(e) {
//     if(e.target.tagName === 'A') {
//         e.target.classList.add('black');
//         const {offsetWidth:width, offsetHeight:height, offsetTop:top, offsetLeft:left} = e.target;        
//         span.style.width = (width + hPadding) + 'px';
//         span.style.height = (height + vPadding) +'px';
//         span.style.top = (top - vPadding/2)+ 'px';
//         span.style.left = (left - hPadding / 2) + 'px';
//     }   
// }