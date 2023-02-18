function Author({ avatar, onClick, time }) {
  return (
    <div className="author">
      <div className="author__header">
        <div className="author__header__avatar">
          <img
            src={avatar}
            alt=""
            aria-hidden={true}
          />
        </div>
        <div className="author__header__name">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="author__body">
        <ul>
          <li className="daily">
            <button
              className={time === "daily" ? "active" : ""}
              onClick={onClick}
            >
              Daily
            </button>
          </li>
          <li className="weekly">
            <button
              className={time === "weekly" ? "active" : ""}
              onClick={onClick}
            >
              Weekly
            </button>
          </li>
          <li className="monthly">
            <button
              className={time === "monthly" ? "active" : ""}
              onClick={onClick}
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Author;
