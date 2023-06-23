export default function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are Open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  );
}
