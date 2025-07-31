export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// ブラウザで実行されたときの動作
window.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  if (output) {
    output.textContent = greet('World');
  }
});
