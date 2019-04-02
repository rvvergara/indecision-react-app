const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option && !app.options.includes(option)) {
    app.options.push(option);
    e.target.reset();
    renderIndecisionApp();
  }
};

const clearOptions = () => {
  app.options = [];
  renderIndecisionApp();
};

const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  const choice = app.options[index];
  console.log(choice);
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What to do?
      </button>
      <button onClick={clearOptions}>Remove all options</button>
      <ol>
        {app.options.map((option, id) => (
          <li key={"option-" + id}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
