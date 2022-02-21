import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Person from "../components/Person";

// Tests
test("Renders Person component correctly", async () => {
  const { getByText } = render(<Person firstName='Nathan' lastName='Krasney'/>);

  expect(document.getElementsByTagName('p').length).toBe(1); // we can access the document object
  
  const htmlElement = getByText('First Name : Nathan , Last Name : Krasney')
  
  expect(htmlElement).toBeInTheDocument()
});
