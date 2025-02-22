```javascript
// pages/about.js
import Image from 'next/image';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Image src="/about-image.jpg" alt="About Image" width={500} height={300} />
    </div>
  );
}

export default About;
```
To fix this, ensure that `/about-image.jpg` is placed inside the `public` folder.  Then, use the `next/image` component for optimal performance and image optimization features.