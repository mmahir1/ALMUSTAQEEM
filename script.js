document.addEventListener('DOMContentLoaded', function() {
  const accNOElement = document.querySelector('.acc-no');

  accNOElement.addEventListener('click', function() {
    copyToClipboard(accNOElement.textContent);
  })

  accNOElement.addEventListener('mouseenter', function() {
    accNOElement.style.cursor = 'pointer';
  })
})

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      
      .then(() => {
        alert('Text copied to clipboard: ' + text);
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard:', err);
      });
  } else {
    // Fallback for browsers that don't support the Clipboard API
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Text copied to clipboard: ' + text);
  }
}
