// 222222222222222222222222222222
// Function to wait for a given time duration
function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function showMainSiteAfterAnimation() {
  const landingPage = document.getElementById('logoAnimation');
  const mainSite = document.getElementById('mainContent');

  // Wait for the landing page animation to complete
  await delay(6000); // Adjust the duration to match the animation duration

  // Hide the landing page and display the main site content
  landingPage.style.display = 'none';
  mainSite.style.display = 'block';
}

// Call the function to start the animation and show the main site
showMainSiteAfterAnimation();











// 333333333333333333333333333

// document.addEventListener('DOMContentLoaded', function() {
//   const logoAnimation = document.getElementById('logoAnimation');
//   const mainContent = document.getElementById('mainContent');

//   // Remove logo animation and display main content after animation ends
//   logoAnimation.addEventListener('animationend', () => {
//     logoAnimation.style.display = 'none';
//     mainContent.style.display = 'block';
//     mainContent.style.animation = 'fadeIn 2s forwards';
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const logoAnimation = document.getElementById('logoAnimation');
//   const mainContent = document.getElementById('mainContent');

//   // Add a 5-second delay on the landing page
//   setTimeout(() => {
//     // Remove logo animation and display main content after the delay
//     logoAnimation.style.display = 'none';
//     mainContent.style.display = 'block';
//     mainContent.style.animation = 'fadeIn 2s forwards';
//   }, 5000); // 5000 milliseconds = 5 seconds

//   // Additional event listener to skip the animation and proceed to main content
//   logoAnimation.addEventListener('click', () => {
//     logoAnimation.style.display = 'none';
//     mainContent.style.display = 'block';
//     mainContent.style.animation = 'fadeIn 2s forwards';
//   });
// });


