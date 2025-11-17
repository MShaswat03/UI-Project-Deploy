export default function BackButton() {
  return (
    <button id="back-btn" onClick={() => window.history.back()}>
      <span className="material-symbols-outlined">arrow_back_ios</span>
    </button>
  );
}
