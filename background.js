// background.js

// 1. Run logic when the extension is first installed
chrome.runtime.onInstalled.addListener(() => {
  console.log("PromptArchitect-Studio is ready.");

  // Create a right-click context menu
  chrome.contextMenus.create({
    id: "optimizePrompt",
    title: "Optimize with PromptArchitect",
    contexts: ["selection"], // This only shows up when text is highlighted
  });
});

// 2. Handle the click on the context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "optimizePrompt") {
    const selectedText = info.selectionText;
    console.log("User wants to optimize:", selectedText);

    // Example: Save the text to storage so the popup can grab it later
    chrome.storage.local.set({ lastSelectedText: selectedText }, () => {
      // Optional: Open the popup or send a notification
      console.log("Text saved to storage.");
    });
  }
});

// 3. Listen for messages from your popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "get_status") {
    sendResponse({ status: "Architect active" });
  }
  return true;
});
