/* https://greensock.com/gsap */

let warp = document.getElementById('petals'),
  w = window.innerWidth,
  h = window.innerHeight;

function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  TweenMax.to(elm, R(4, 8), {
    x: '+=100',
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}

// function R(min, max) {
//   return min + Math.random() * (max - min);
// }

/* https://mattboldt.com/typed.js/ */

const optionsText = {
  typeSpeed: 40,
  backSpeed: 0,
  fadeOut: true,
  loop: false,
  showCursor: false,
};

let typed = new Typed('#title', {
  strings: ['Для самой необыкновенной упраляющей и просто шикарной девушки!'],
  startDelay: 1100,
  ...optionsText,
});

let typed2 = new Typed('#text', {
  strings: ['Милая моя,'],
  startDelay: 4500,
  ...optionsText,
});

let typed3 = new Typed('#text2', {
  strings: [
    `       Поздравляю тебя с прекрасным праздником Международным женским днем - 8
        марта ! Сегодня я хочу напомнить тебе, как важна ты для меня. Ты делаешь
        мою жизнь ярче и счастливее каждый день. Ты – воплощение красоты,
        нежности и силы. Ты вдохновляешь меня на новые свершения, и я благодарен
        тебе за каждый день, что ты рядом со мной.`,
  ],
  startDelay: 5800,
  ...optionsText,
});

let typed4 = new Typed('#text3', {
  strings: [
    `         В этот особенный день, от всей души, хочу пожелать тебе ощущать себя
      по-настоящему любимой и ценной, оставаться такой же женственной, милой и
      красивой девушкой. Пусть твоя жизнь будет еще больше наполняться яркими
      красками и событиями, с множеством позитивных эмоций и самое главное
      помни, что ты особенная не только в этот день, но и во все 365 дней в
      году !`,
  ],
  startDelay: 28800,
  ...optionsText,
});
let typed5 = new Typed('#text4', {
  strings: [
    `        Ты замечательная! Я обещаю радовать тебя и стараться исполнить все твои
    желания и мечты. Пусть наши отношения становятся только крепче, а твоя
    улыбка всегда радует меня и дает мне силы!`,
  ],
  startDelay: 52800,
  ...optionsText,
  onComplete: function () {
    let author = document.getElementById('author');
    author.style.opacity = 1;
  },
});
