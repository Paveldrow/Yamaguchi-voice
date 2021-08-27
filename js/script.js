const round = document.querySelector('.animation__portal');
const woman = document.querySelector('.animation__woman');

gsap.fromTo(round, {width: 0, height: 0}, {duration: 3, x: -145, y: -30, width: 290, height: 61});
gsap.fromTo(round, {width: 290, height: 61}, {delay: 5, duration: 3, x: -97, y: -30, width: 194, height: 61});
gsap.fromTo(woman, {height: 0, x: 5, y: -70}, {delay: 3, duration: 3, y: -60, width: 290, height: 751});
gsap.fromTo(woman, {x:-20}, {delay: 8, duration: 3, x: 20, repeat: -1, yoyo: true});
