export default function BackButton({ text }) {
  return (
    <button id="back-btn" onClick={() => window.history.back()}>
      <span className="material-symbols-outlined">arrow_back_ios</span>
      Back {text}
    </button>
  );
}
