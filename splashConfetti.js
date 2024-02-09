// confetti function
export function addConfetti() {
    // const mapContainer = document.getElementById('map-container');
    const leftSection = document.getElementById('left-section')
    
    // Create a confetti element
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Set random initial position
    const initialX = Math.random() * leftSection.clientWidth;
    const initialY = Math.random() * leftSection.clientHeight;
    const initialRotation = Math.random() * 360;
    
    confetti.style.left = `${initialX}px`;
    confetti.style.top = `${initialY}px`;
    confetti.style.transform = `rotate(${initialRotation}deg)`;
    
    // Append confetti to the map container
    leftSection.appendChild(confetti);
    
    // Remove confetti element after the animation ends
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }