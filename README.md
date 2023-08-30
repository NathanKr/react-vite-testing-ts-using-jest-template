<h2>Motivation</h2>
Prepare a vite react typescript project supporting testing with jest and testing library. Notice that you get this out of the box using create-react-app. But for vite you need to configure it yourself

<h2>Installation</h2>
<p>Remark: I follow here the steps in the reference paper (see credits). <p>Part 1 relates to pure typescript jest</p><p> Part 2 relate to the testing library in general and to react in particular</p></p>

<h4>Part 1</h4>
<ul>
<li>create a vite react typescript project using npm init vite@latest and choosing react and ts</li>
<li>npm i -D jest @types/jest</li>
<li>add to scripts in package.json  <p>"test" : "jest"</p></li>  
<li>create directory test under src (not mandatory but common practice) and create there a test file &lt;file_name&gt;.test.tsx e.g Person.test.tsx for component and &lt;file_name&gt;.test.ts for non component</li>
<li>npm i -D ts-jest ts-node</li>
<li>create jest.config.ts file and add <p>export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}</p>
<p>transform is required because jest run javascript code, so we need to tell it how to transform tsx files to javascript. Done using the module ts-jest</p>
</li>
<li>import Person.css will fail in jest. jest is a javascript testing library so it does not know to handle css file. Bypass the error by adding the following to jest.config.ts <p>moduleNameMapper: {
'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  }</p>
  <p>and by install :
npm i -D identity-obj-proxy</p> </li>
<li>as of jest 28

```
npm i -D jest-environment-jsdom
```
</li>
</ul>

<h4>Part 2</h4>
<ul>
<li>npm i -D @testing-library/react @testing-library/user-event</li>
<li>npm i -D @testing-library/jest-dom</li>
<li>add testEnvironment: "jsdom" to export default inside jest.config.ts</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>Jest is a javascript framework for testing. It will ignore CSS files. Thus using jest, you can not do visual tests, e.g., verify that a button color is red if imported from a CSS file. Jest works fine with inline styling, i.e., css-in-js.
<p>What is your options if you have css files ? Use visual test tools like cypress check e.g.  <a href='https://www.youtube.com/watch?v=gUFdU5fQs4o&t=1897s'>this 31:45</a></p>
</li>
</ul>

<h2>Invoking the tests</h2>
npm test

<h2>credits</h2>
<a href='https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f'>Quick Jest Setup With ViteJS, React, & TypeScript</a>

<h2>Open issues</h2>
toBeInTheDocument has error (so remarked) after upgrading jest 

