function slideUp(id) {
    anime({
        targets: id,
        translateY: '-2000px',
        easing: 'easeInOutQuad',
        duration: '1000',
        complete: () => {
            $(id).hide();
        }
    })
    anime({
        targets: '.main-content',
        opacity: [0, 1],
        duration: '2000',
        delay: '500',
        begin: () => {
            $('.main-content').show();
        }
    })

}

function slideRight(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate,
        easing: 'easeInOutQuad',
        duration: '800',
    })
}

function slideLeft(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate,
        easing: 'easeInOutQuad',
        duration: '800',
    })
}

function slideUpCards(id, yTranslate) {
    anime({
        targets: id,
        translateY: yTranslate,
        easing: 'easeInOutQuad',
        duration: '800'
    })
}

function hideCards(idOne, idTwo) {
    anime({
        targets: idOne,
        opacity: 0,
        duration: '300',
        complete: () => {
            $(idOne).hide();
        }
    })
    anime({
        targets: idTwo,
        opacity: 0,
        duration: '300',
        complete: () => {
            $(idTwo).hide();
        }
    })
}

// Show portfolio info.
function showInfoPortfolio(infoId, delay, height) {
    anime({
        targets: infoId,
        height: ['0px', height],
        delay: delay,
        easing: 'easeInOutQuad',
        complete: () => {
            $(infoId + ' .port-info-content').show();
            anime({
                targets: infoId + ' .port-info-content',
                opacity: ['0', '1'],
                duration: 500
            })
        }
    })
}

function hideInfo(id) {
    anime({
        targets: id,
        opacity: 0,
        duration: '300',
        easing: 'easeInOutQuad',
        complete: () => {
            $(id).hide();
        }
    })
}
function showInfo(id) {
    anime({
        targets: id,
        opacity: 1,
        duration: '300',
        delay: '500',
        easing: 'easeInOutQuad',
    })
    setTimeout(() => $(id).show(), 500);
}