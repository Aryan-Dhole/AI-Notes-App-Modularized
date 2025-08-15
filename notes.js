// notes.js

function renderNotesList(noteArray, getIndexCallback) {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    noteArray.forEach((note, i) => {
        const index = getIndexCallback(note, i);

        const tagsHtml = (note.tags && note.tags.length)
            ? note.tags.map(tag => `<span class="badge bg-success me-1">${escapeHtml(tag)}</span>`).join("")
            : `<small class="text-muted">No tags</small>`;

        const noteCard = document.createElement("div");
        noteCard.className = "col-md-4 mb-3";
        noteCard.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(note.title)}</h5>
          <h6 class="card-subtitle mb-2">${tagsHtml}</h6>
          <p class="card-text">${escapeHtml(note.content)}</p>
          ${note.summary ? `<p class="summary-text text-info mt-2">${escapeHtml(note.summary)}</p>` : ""}
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <small class="text-muted">${note.date}</small>
          <div>
            <button class="btn btn-sm btn-info summarize-btn me-1" data-index="${index}">Summarize</button>
            <button class="btn btn-sm btn-success copy-btn me-1" data-index="${index}">Copy</button>
            <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
          </div>
        </div>
      </div>
    `;

        container.appendChild(noteCard);
    });

    attachNoteHandlers();
}

function renderNotes() {
    renderNotesList(notes, (_, i) => i);
}

function renderFilteredNotes(filteredNotes) {
    renderNotesList(filteredNotes, note => {
        const foundIndex = notes.indexOf(note);
        if (foundIndex !== -1) return foundIndex;
        return notes.findIndex(n =>
            n.title === note.title &&
            n.content === note.content &&
            n.date === note.date
        );
    });
}

function attachNoteHandlers() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            if (!isNaN(idx) && idx >= 0) {
                notes.splice(idx, 1);
                saveNotes();
                renderNotes();
            }
        });
    });

    document.querySelectorAll(".summarize-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            if (!isNaN(idx) && idx >= 0) {
                await summarizeNote(idx);
            }
        });
    });

    document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-index"));
            if (!isNaN(idx) && idx >= 0 && notes[idx].summary) {
                navigator.clipboard.writeText(notes[idx].summary);
                btn.textContent = "Copied!";
                setTimeout(() => btn.textContent = "Copy", 2000);
            }
        });
    });
}
