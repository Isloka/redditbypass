// Just paste this code in the console when you see the NSFW login page

document.querySelector('shreddit-async-loader[bundlename*="blocking"]').remove(); // Removes the login screen and main blur
document.body.style.overflow = 'auto'; // Enables scrolling
document.body.style.pointerEvents = 'auto'; // Enables clicking
