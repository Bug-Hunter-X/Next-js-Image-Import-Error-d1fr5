# Next.js Image Import Error

This repository demonstrates a common issue encountered when importing images in Next.js applications. The problem arises when attempting to import an image that is not correctly placed or referenced within the project structure.

## Bug Description
The image import statement `import Image from '/about-image.jpg'` throws an error during runtime because Next.js cannot locate the image at the specified path.

## Solution
The solution involves correctly placing the image within the `public` directory and updating the import statement to reflect the image's location within this directory.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` route in the browser to see the error. 

## Solution
Update the `pages/about.js` file to correctly import the image from the `public` directory.