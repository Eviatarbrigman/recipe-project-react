/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe(props) {
  return (
    <section className='suggested-recipe-container'>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{String(props.recipe)}</ReactMarkdown>
    </section>
  );
}
