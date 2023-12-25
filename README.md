# Reddit NSFW Login Page Bypass

## Introduction

This simple JavaScript code snippet allows you to bypass the Reddit NSFW login page by removing the login screen and main blur, enabling scrolling and clicking.

## Usage

Just paste the following code into your browser's console when you encounter the NSFW login page:

```javascript
// Just paste this code in the console when you see the NSFW login page
document.querySelector('shreddit-async-loader[bundlename*="blocking"]').remove(); // Removes the login screen and main blur
document.body.style.overflow = 'auto'; // Enables scrolling
document.body.style.pointerEvents = 'auto'; // Enables clicking
```
