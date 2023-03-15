function loadedstyling() {
  document.getElementById('main').style.opacity = '1';
}

function Function1() {
  document.getElementById('button1').style.marginTop = '30px';
}

function Function2() {
  document.getElementById('button1').style.marginTop = '50px';
}

function Toggle1() {
  const x = document.getElementById('one-wrap');
  const x2 = document.getElementById('two');
	const x3 = document.getElementById('three');
	const x4 = document.getElementById('four');
	const x5 = document.getElementById('five');
  const btn1 = document.getElementById('button1');
  if (x.style.opacity === '1' || x3.style.opacity === '1' || x4.style.opacity === '1' || x5.style.opacity === '1') {
    x.style.transitionDelay = '0s';
    x2.style.transitionDelay = '1s';
    x3.style.transitionDelay = '0s';
		x4.style.transitionDelay = '0s';
		x5.style.transitionDelay = '0s';
		x4.style.pointerEvents = "none";
		x5.style.pointerEvents = "none";
    x.style.opacity = '0';
    x2.style.opacity = '1';
		x3.style.opacity = '0';
		x4.style.opacity = '0';
		x5.style.opacity = '0';
    x.style.zIndex = '0';
    x2.style.zIndex = '1';
    x3.style.zIndex = '0';
    x4.style.zIndex = '0';
		x5.style.zIndex = '0';
		btn1.style.marginTop = '-2px';

  } else {
    x.style.transitionDelay = '1s';
    x2.style.transitionDelay = '0s';
    x3.style.transitionDelay = '0s';
		x4.style.transitionDelay = '0s';
		x4.style.pointerEvents = "none";
		x5.style.pointerEvents = "none";
    x.style.opacity = '1';
    x2.style.opacity = '0';
		x3.style.opacity = '0';
		x4.style.opacity = '0';
		x5.style.opacity = '0';
    x.style.zIndex = '1';
    x2.style.zIndex = '0';
    x3.style.zIndex = '0';
		x4.style.zIndex = '0';
		x5.style.zIndex = '0';
		btn1.style.marginTop = '-2px';
  }
}

function ShowPage1() {
  const x = document.getElementById('one-wrap');
  const x2 = document.getElementById('two');
	const x3 = document.getElementById('three');
	const x4 = document.getElementById('four');
	const x5 = document.getElementById('five');
  const btn1 = document.getElementById('button1');
    x.style.transitionDelay = '1s';
    x2.style.transitionDelay = '0s';
    x3.style.transitionDelay = '0s';
		x4.style.transitionDelay = '0s';
		x5.style.transitionDelay = '0s';
		x4.style.pointerEvents = "none";
		x5.style.pointerEvents = "none";
    x.style.opacity = '1';
    x2.style.opacity = '0';
		x3.style.opacity = '0';
		x4.style.opacity = '0';
		x5.style.opacity = '0';
    x.style.zIndex = '1';
    x2.style.zIndex = '0';
    x3.style.zIndex = '0';
		x4.style.zIndex = '0';
		x5.style.zIndex = '0';
		btn1.style.marginTop = '-2px';
}

function ShowPage2() {
  const x = document.getElementById('one-wrap');
  const x2 = document.getElementById('two');
	const x3 = document.getElementById('three');
	const x4 = document.getElementById('four');
	const x5 = document.getElementById('five');
  const btn1 = document.getElementById('button1');
    x.style.transitionDelay = '0s';
    x2.style.transitionDelay = '0s';
    x3.style.transitionDelay = '1s';
		x4.style.transitionDelay = '0s';
		x5.style.transitionDelay = '0s';
		x4.style.pointerEvents = "none";
		x5.style.pointerEvents = "none";
    x.style.opacity = '0';
    x2.style.opacity = '0';
		x3.style.opacity = '1';
		x4.style.opacity = '0';
		x5.style.opacity = '0';
    x.style.zIndex = '0';
    x2.style.zIndex = '0';
    x3.style.zIndex = '1';
		x4.style.zIndex = '0';
		x5.style.zIndex = '0';
		btn1.style.marginTop = '-2px';
}

function ShowPage3() {
  const x = document.getElementById('one-wrap');
  const x2 = document.getElementById('two');
	const x3 = document.getElementById('three');
	const x4 = document.getElementById('four');
	const x5 = document.getElementById('five');
  const btn1 = document.getElementById('button1');
    x.style.transitionDelay = '0s';
    x2.style.transitionDelay = '0s';
    x3.style.transitionDelay = '0s';
		x4.style.transitionDelay = '1s';
		x5.style.transitionDelay = '0s';
		x4.style.pointerEvents = "initial";
		x5.style.pointerEvents = "none";
    x.style.opacity = '0';
    x2.style.opacity = '0';
		x3.style.opacity = '0';
		x4.style.opacity = '1';
		x5.style.opacity = '0';
    x.style.zIndex = '0';
    x2.style.zIndex = '0';
    x3.style.zIndex = '0';
		x4.style.zIndex = '1';
		x5.style.zIndex = '0';
		btn1.style.marginTop = '-2px';
}

function ShowPage4() {
  const x = document.getElementById('one-wrap');
  const x2 = document.getElementById('two');
	const x3 = document.getElementById('three');
	const x4 = document.getElementById('four');
	const x5 = document.getElementById('five');
  const btn1 = document.getElementById('button1');
    x.style.transitionDelay = '0s';
    x2.style.transitionDelay = '0s';
    x3.style.transitionDelay = '0s';
		x4.style.transitionDelay = '0s';
		x5.style.transitionDelay = '1s';
		x4.style.pointerEvents = "none";
		x5.style.pointerEvents = "initial";
    x.style.opacity = '0';
    x2.style.opacity = '0';
		x3.style.opacity = '0';
		x4.style.opacity = '0';
		x5.style.opacity = '1';
    x.style.zIndex = '0';
    x2.style.zIndex = '0';
    x3.style.zIndex = '0';
		x4.style.zIndex = '0';
		x5.style.zIndex = '1';
		btn1.style.marginTop = '-2px';
}
