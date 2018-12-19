let ball1 = document.querySelector('.ball1');
let ball2 = document.querySelector('.ball2');
let ball3 = document.querySelector('.ball3');

const animation = (ball, distance) => {
    return new Promise((resolve, reject) => {
        const _animation = () => setTimeout(function() {
            let marginLeft = parseInt(ball.style.marginLeft, 10);
            if(marginLeft === distance) {
                resolve('end');
            } else {
                if (marginLeft <= distance) {
                    marginLeft++
                } else {
                    marginLeft--
                }
                ball.style.marginLeft = marginLeft;
                _animation();
            }
        }, 13)
        _animation()
    })
}

animation(ball1, 100)
    .then(function(info){
        console.log(info);
        return animation(ball2, 140)
    })
    .then(function(info) {
        console.log(info);
        animation(ball3, 50)
    })