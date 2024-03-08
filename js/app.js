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
  strings: ['Для самой лучшей Мамы!'],
  startDelay: 1100,
  ...optionsText,
});

let typed2 = new Typed('#text', {
  strings: ['Мамуля,'],
  startDelay: 3000,
  ...optionsText,
});

let typed3 = new Typed('#text2', {
  strings: [
    `       С праздником весны и красоты – 8 Марта! Пусть этот день принесет в твою жизнь море радости, улыбок и теплых объятий. 
    Ты – воплощение нежности, мудрости и безграничной любви. Твои забота и поддержка делают наш мир светлее и уютнее.`,
  ],
  startDelay: 3600,
  ...optionsText,
});

let typed4 = new Typed('#text3', {
  strings: [
    ` Пусть в этот день тебя окружают внимание, уважение и благодарность за все твои труды и заботу. 
    Пусть каждый момент наполнен красотой и радостью, а твои мечты сбываются, как волшебство.`,
  ],
  startDelay: 17800,
  ...optionsText,
});
let typed5 = new Typed('#text4', {
  strings: [
    ` Я тебя очень люблю, спасибо тебе за все что ты делаешь для меня`,
  ],
  startDelay: 28800,
  ...optionsText,
  onComplete: function () {
    let author = document.getElementById('author');
    author.style.opacity = 1;
  },
});
