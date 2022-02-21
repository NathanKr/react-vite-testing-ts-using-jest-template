<h2>Motivation</h2>
Perpare a vite react ts project for testing with jest and testing library


<h2>Installation</h2>
<ul>
<li>npm i -D jest @types/jest</li>
<li>add to scripts in package.json  <p>"test" : "jest"</p></li>  
<li>create directory test under src and create there a test file e.g Person.test.ts</li>
<li>npm i -D ts-jest ts-node</li>
<li>create jest.config.ts file and add <p>export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}</p></li>
<li>npm i -D @testing-library/react @testing-library/user-event</li>
<li>npm i -D @testing-library/jest-dom</li>
</ul>

<h2>Invoking the tests</h2>
npm test

<h2>credits</h2>
<a href='https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f'>Quick Jest Setup With ViteJS, React, & TypeScript</a>