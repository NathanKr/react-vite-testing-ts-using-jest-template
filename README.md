<h2>Motivation</h2>
Perpare a vite react typescript project supporting testing with jest and testing library. Notice that you get this out of the box using create-react-app but for vite you need to configure it yourself


<h2>Installation</h2>
<p>Remark : I follow here the steps in the reference paper (see credits). Part 1 relate to pure typescript jest . Part 2 relate to the testing library in general and to react in particular</p>
<h4>Part 1</h4>
<ul>
<li>create a vite react typescript project using npm init vite@latest and choosing react and ts</li>
<li>npm i -D jest @types/jest</li>
<li>add to scripts in package.json  <p>"test" : "jest"</p></li>  
<li>create directory test under src (not mandatory but common practice) and create there a test file &lt;file_name&gt;.test.ts e.g Person.test.ts</li>
<li>npm i -D ts-jest ts-node</li>
<li>create jest.config.ts file and add <p>export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}</p></li>
</ul>

<h4>Part 2</h4>
<ul>
<li>npm i -D @testing-library/react @testing-library/user-event</li>
<li>npm i -D @testing-library/jest-dom</li>
</ul>

<h2>Invoking the tests</h2>
npm test

<h2>credits</h2>
<a href='https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f'>Quick Jest Setup With ViteJS, React, & TypeScript</a>