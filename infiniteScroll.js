// Create buttons
let startButton = document.createElement('button');
startButton.id = 'startScroll';
startButton.innerText = 'Start Scrolling';
document.body.appendChild(startButton);

let stopButton = document.createElement('button');
stopButton.id = 'stopScroll';
stopButton.innerText = 'Stop Scrolling';
document.body.appendChild(stopButton);

// Apply basic styling to buttons
startButton.style.position = 'fixed';
startButton.style.bottom = '50px';
startButton.style.left = '10px';
startButton.style.padding = '10px';
startButton.style.zIndex = '9999';
stopButton.style.position = 'fixed';
stopButton.style.bottom = '10px';
stopButton.style.left = '10px';
stopButton.style.padding = '10px';
stopButton.style.zIndex = '9999';

let scrollAnimationFrame;
let isScrolling = false;

function continuousScroll() {
  const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
  const clientHeight = window.innerHeight; // Height of the visible window
  const scrollTop = window.scrollY; // Current scroll position

  if (scrollTop + clientHeight < scrollHeight) {
    window.scrollBy(0, 100); // Scroll down by 100px per frame
    scrollAnimationFrame = requestAnimationFrame(continuousScroll); // Continue scrolling
  } else {
    scrollAnimationFrame = requestAnimationFrame(continuousScroll); // Keep the loop going
  }
}

function startScrolling() {
  if (!isScrolling) {
    isScrolling = true;
    continuousScroll(); // Start scrolling
  }
}

function stopScrolling() {
  if (isScrolling) {
    isScrolling = false;
    cancelAnimationFrame(scrollAnimationFrame); // Stop the scroll animation
  }
}

startButton.addEventListener('click', startScrolling);
stopButton.addEventListener('click', stopScrolling);
