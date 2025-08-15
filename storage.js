// storage.js

// Load notes from localStorage
function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
}

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Save search query to localStorage
function saveSearchQuery(query) {
    localStorage.setItem("searchQuery", query);
}

// Load saved search query
function loadSearchQuery() {
    return localStorage.getItem("searchQuery") || "";
}
