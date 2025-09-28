function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }


// Define the range for your logarithmic output
const minLog = Math.log(1); // The log of the minimum output value
const maxLog = Math.log(2); // The log of the maximum output value
const scale = (maxLog - minLog) / (slider.max - slider.min);

function updateLogValue(position) {
  // Convert the linear slider position to a logarithmic value
  const value = Math.exp(minLog + scale * position);
  return Math.round(value); // Round for cleaner integer values
}

// Initial value
output.textContent = updateLogValue(slider.value);

// Update value on slider movement
slider.addEventListener('input', () => {
  const position = parseFloat(slider.value);
  const logValue = updateLogValue(position);
  output.textContent = logValue;
});
