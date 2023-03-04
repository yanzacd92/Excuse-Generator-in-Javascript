/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const randomPosition = size => {
  return Math.floor(Math.random() * size);
};
window.onload = () => {
  //write your code here
  const who = ["My pet", "My son", "My teammate", "My team"];
  const what = ["play", "greetings", "feels fear", "feel happy", "run"];
  const where = [
    "in my house",
    "at the stadium",
    "at work",
    "at the park",
    "on the street"
  ];

  document.querySelector("#excuse").innerHTML =
    who[randomPosition(who.length)] +
    " " +
    what[randomPosition(what.length)] +
    " " +
    where[randomPosition(where.length)];
};
