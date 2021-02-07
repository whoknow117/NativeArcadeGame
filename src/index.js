

const randomPrize = (space) => {

    let x =  Math.floor(Math.random() * window.innerWidth);
    for(let j = 0; j < 4; j++) {
        let enemy = document.createElement('span');
        enemy.className = "random-enemy";
        space.appendChild(enemy);

        enemy.style.left = x + 'px';
    }

}


function getStars(){
    let space = document.querySelector('#space');
    let count = 50;
    let i = 0;
    randomPrize(space);
    let rocket = document.querySelector('.rocket');
    space.addEventListener('mousemove', function(e) {
        let xOffset = e.clientX - e.target.offsetLeft;
        let yOffset = e.clientY - e.target.offsetTop;

        rocket.style.left = xOffset + 'px';
        rocket.style.top = yOffset + 'px';

        while( i < count ) {
            let star = document.createElement('i');
            let x = Math.floor(Math.random() * window.innerWidth);

            let duration= Math.random() * 1;
            let h = Math.random() * 1;
            let left = 0;
            star.style.left = x + 'px';
            star.style.width = 1 + 'px';
            star.style.height = 150 + h + 'px';
            star.style.animationDuration = duration + 's';
            space.appendChild(star);
            i++
        }
        let left = 50;
        let top = 0;


    } )



    rocket.addEventListener('click', function(event){
        let laserRay = document.createElement('span');
        laserRay.className = "laser-ray";

        let xOffset = event.clientX - event.target.offsetLeft;
        let yOffset = event.clientY - event.target.offsetTop;
        space.appendChild(laserRay);
        laserRay.style.left =  xOffset + 'px';
        laserRay.style.top =  yOffset + 'px';
        setTimeout(function(){
            laserRay.remove()
        },1300);
    })
}

getStars();