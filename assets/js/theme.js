document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

var x = document.getElementsByClassName("blankbox");
var i;

for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = sessionStorage.getItem('dc', '#687466');
}

function theme() {
     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

            sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
            sessionStorage.setItem('cc', '#777');
            for (i = 0; i < x.length; i++) {
              x[i].style.backgroundColor = sessionStorage.setItem('dc', '#687466'); //#D8EBB5
            }


     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');
        for (i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = sessionStorage.setItem('dc', '#687466');
        }

    }
    else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {

        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');
        for (i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = sessionStorage.setItem('dc', '#D8EBB5'); //#687466
        }


    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = sessionStorage.getItem('dc');
}

}
