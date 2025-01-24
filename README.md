# App Summary: Recipe Suggestion App

This app allows users to input a list of ingredients they have on hand and receive recipe suggestions tailored to those ingredients. The app leverages the **Hugging Face Inference API** to generate recipes dynamically using AI-powered models. 

### Key Features:
- **Ingredient Input**: Users can add ingredients via a simple form.
- **Dynamic Recipe Generation**: Based on the input ingredients, the app suggests a recipe using the **Mistral AI model**.
- **Markdown Formatting**: Recipes are displayed in a user-friendly markdown format, making them easy to read.
- **State Management**: React's state hooks are used to handle user input and app state dynamically.

This app is perfect for people seeking creative meal ideas based on what's already in their pantry!

---

# Technological Details: React Methods Applied

### 1. State Management with `useState`
- Manages dynamic data such as the list of ingredients and recipe visibility.
- **Example**:
  ```jsx
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

### 2. Form Handling with `onChange` and `onSubmit`
- Captures user input with controlled form elements.
- **Example**:
  ```javascript
  function handleChange(event) {
    const { value } = event.target;
    setIngredients((prev) => [...prev, value]);
  }

### 3. Dynamic Prop Passing
- Passes data dynamically to components for reusability and flexibility.
- **Example**:
  ```javascript
  <ClaudeRecipe recipe={generatedRecipe} />

### 4. Dynamic Prop Passing
- Passes data dynamically to components for reusability and flexibility.
- **Example**:
  ```javascript
  <ClaudeRecipe recipe={generatedRecipe} />

### 5. Markdown Rendering with `react-markdown`
- Renders recipes in markdown format for a clean and user-friendly display.
- **Example**:
  ```javascript
  <ReactMarkdown>{recipe}</ReactMarkdown>

### 6. Side Effects with `useEffect`
- Handles actions triggered by state changes, such as scrolling to the recipe section.
- **Example**:
  ```javascript
  React.useEffect(() => {
    if (recipe !== null && recipeRef.current !== null) {
      recipeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

### 7. Referencing DOM Elements with `useRef`
- References DOM elements to enable actions like smooth scrolling.
- **Example**:
  ```javascript
  const recipeRef = React.useRef(null);

  <section ref={recipeRef}>
    <ClaudeRecipe recipe={generatedRecipe} />
  </section>

