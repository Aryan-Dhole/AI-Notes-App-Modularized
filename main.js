// main.js

let notes = loadNotes();

// DOM elements
const noteTitleInput = document.getElementById("noteTitle");
const noteTagsInput = document.getElementById("noteTags");
const noteContentInput = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const searchInput = document.getElementById("searchInput");

// Initial render
renderNotes();

// Restore search query
const savedQuery = loadSearchQuery();
if (savedQuery) {
    searchInput.value = savedQuery;
    const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(savedQuery.toLowerCase()) ||
        (Array.isArray(note.tags) && note.tags.some(tag => tag.toLowerCase().includes(savedQuery.toLowerCase())))
    );
    renderFilteredNotes(filtered);
}

// Add note
addNoteBtn.addEventListener("click", () => {
    const title = noteTitleInput.value.trim();
    const tags = noteTagsInput.value.trim().split(",").map(t => t.trim()).filter(Boolean);
    const content = noteContentInput.value.trim();

    if (!title || !content) return;

    notes.push({
        title,
        tags,
        content,
        date: new Date().toLocaleString(),
        summary: ""
    });

    saveNotes();
    renderNotes();

    noteTitleInput.value = "";
    noteTagsInput.value = "";
    noteContentInput.value = "";
});

// Search notes
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        localStorage.removeItem("searchQuery"); // ✅ clear from storage
        renderNotes();
        return;
    }

    const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(query) ||
        (Array.isArray(note.tags) && note.tags.some(tag => tag.toLowerCase().includes(query)))
    );
    saveSearchQuery(query);
    renderFilteredNotes(filtered);
});
