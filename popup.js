document.addEventListener("DOMContentLoaded", function () {
  const refineBtn = document.getElementById("refineBtn");
  const promptInput = document.getElementById("promptInput");
  const outputDiv = document.getElementById("output");

  // Check if we have any "right-clicked" text saved from background.js
  chrome.storage.local.get(["lastSelectedText"], function (result) {
    if (result.lastSelectedText) {
      promptInput.value = result.lastSelectedText;
    }
  });

  refineBtn.addEventListener("click", function () {
    const originalText = promptInput.value;

    if (!originalText) {
      outputDiv.innerText = "Please enter some text first!";
      return;
    }

    // This is where your prompt engineering logic goes!
    // For now, let's just simulate a "Persona Assignment"
    const engineeredPrompt = `Act as an expert Architect. Analyze and optimize the following request: "${originalText}"`;

    outputDiv.innerText = "Prompt Refined! (Check console for text)";
    console.log("New Prompt:", engineeredPrompt);

    // Copy to clipboard automatically
    navigator.clipboard.writeText(engineeredPrompt);
  });
});
