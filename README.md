# Tip-calculator_concept_based

This project demonstrates the use of state hooks and props in a React application. It also showcases how to pass state as props and implement child-to-parent communication.

## Concepts Covered: This project covers the following key concepts in React:

### `State Management with useState:`
Utilizes the useState hook to manage and update state variables (totalAmount, selected1, and selected2) within functional components.

### `Component Hierarchy:`
Illustrates the organization of components in a hierarchy, with the main App component and several child components (Question, Total, ServiceRating, TotalCost, and ResetButton).


### `Props Passing:`
Demonstrates passing state variables and functions as props from the parent component (App) to child components (Total and ServiceRating) for controlled inputs and calculations.

### `Child-to-Parent Communication:`
Implements child-to-parent communication by allowing a child component (ResetButton) to trigger a state reset in the parent component (App) using a callback function (resetAll).


### `Dynamic Content Rendering:`

Shows how to use props to render dynamic content, such as displaying questions, updating total costs, and showing service ratings.

### `Conditional Rendering:`

Uses conditional rendering based on state to display appropriate content, like resetting buttons or total cost calculations.

### `Event Handling:`

Handles events like input changes and button clicks to update state variables and trigger functions.

### `Component Reusability:`

Promotes component reusability by creating smaller, functional components (Question, Total, ServiceRating, TotalCost, and ResetButton) that can be easily reused in different parts of the application.

## Components

### `App`

The main component of the application. It manages the state using the `useState` hook for three variables:
- `totalAmount`: Represents the bill amount.
- `selected1`: Represents the service rating for the user.
- `selected2`: Represents the service rating for the user's friend.

It also contains a `resetAll` function to reset all state variables.

### `Question`

A functional component that displays a question passed as a prop.

### `Total`

A functional component that displays an input field for entering the bill amount. It receives the `totalAmount` state variable and a function `SetTotalAmount` to update it as props. This demonstrates the concept of passing state as props.

### `ServiceRating`

A functional component that displays a dropdown for selecting a service rating. It receives the `selected` state variable and a function `SetSelected` to update it as props. Again, this demonstrates passing state as props.

### `TotalCost`

A functional component that calculates and displays the total cost based on the bill amount and service ratings received as props. It showcases how props can be used to perform calculations and display dynamic content.

### `ResetButton`

A functional component that renders a button to reset all state variables using the `resetAll` function passed as a prop. This exemplifies child-to-parent communication, as it allows a child component to trigger a state change in the parent component (`App`).

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

1. Enter the bill amount in the input field.
2. Select a service rating for yourself and your friend from the dropdowns.
3. The total cost, including the bill amount and tip, will be displayed.
4. You can reset all values to their initial state by clicking the "Reset All" button.

This project serves as an educational example of how to use React state and props effectively, showcasing various aspects of React development. Feel free to explore and modify it as needed for your own learning purposes.

---

This README file provides an overview of your React project, explaining how you've used state, props, passing state as props, and child-to-parent communication in the different components. It should help anyone reviewing your project understand its structure and functionality.
