import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍮": "Custard"
};

const emojis = Object.keys(foodDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const emojiFindHandler = (event) => {
    const userInput = event.target.value;
    const meaning = foodDictionary[userInput];
    console.log(meaning);
    if (meaning === undefined) {
      setEmojiMeaning("You definately have an unique taste");
    } else {
      setEmojiMeaning(`Well that's a ${meaning}`);
    }
    if (userInput === "") {
      setEmojiMeaning("");
    }
  };

  const emojiClickHandler = (emoji) => {
    console.log(emoji);
    const meaning = foodDictionary[emoji];
    console.log(meaning);
    if (meaning === undefined) {
      setEmojiMeaning("You definately have an unique taste");
    } else {
      setEmojiMeaning(`Well that's a ${meaning}`);
    }
    if (emoji === "") {
      setEmojiMeaning("");
    }
  };

  return (
    <div className="App">
      <h1>sweet tooth</h1>
      <input onChange={emojiFindHandler} />
      <p>{emojiMeaning}</p>
      <div>
        {emojis.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              style={{
                padding: "0.5rem",
                fontSize: "x-large",
                marginTop: "1rem",
                cursor: "pointer"
              }}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
