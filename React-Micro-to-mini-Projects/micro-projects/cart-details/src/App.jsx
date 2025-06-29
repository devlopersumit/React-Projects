import "./App.css";

function App() {
  const items = ["Chocolate", "Biscuit", "Fruits", "Vegetables"];

  let content;
  if (items.length === 0) {
    content = <p>Your cart is empty</p>;
  } else {
    content = (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}

export default App;
