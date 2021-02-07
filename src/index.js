

const randomPrize = (space) => {

    let x =  Math.floor(Math.random() * window.innerWidth);
    for(let j = 0; j < 4; j++) {
        let enemy = document.createElement('span');
        enemy.className = "random-enemy";
        space.appendChild(enemy);
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration= Math.random() * 1;
        let h = Math.random() * 1;
        let left = 0;
        enemy.style.left = x + 'px';
        enemy.style.top = 0 + 'px';
        enemy.style.width = 140 + 'px';
        enemy.style.background = "url( https://lh3.googleusercontent.com/proxy/IKxh5Fb4ntxUdKQ5XvXb6Fcit8yd9LQrT5vzX536dGi1LFrhcGe0p3-izPk6cEG9ZeztqeWErAb6dte86dZqvQz1PS2aXIQs)"
        enemy.style.height = 150 + h + 'px';
        enemy.style.backgroundSize = "cover";
        enemy.style.animationDuration = duration + 's';
        enemy.style.left = x + 'px';
        enemy.style.transform = 'rotate(180deg)';
        enemy.style.animation = 'move 2s infinite linear';

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