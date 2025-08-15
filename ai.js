// ai.js

async function summarizeNote(index) {
    const note = notes[index];
    if (!note) return;

    const apiKey = "YOUR_API_KEY"; // Replace or secure
    const prompt = `Summarize this note in one sentence: "${note.content}"`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        const summary = data.choices?.[0]?.message?.content?.trim() || "No summary available.";

        note.summary = summary;
        saveNotes();
        renderNotes();
    } catch (error) {
        console.error("Error summarizing note:", error);
    }
}
