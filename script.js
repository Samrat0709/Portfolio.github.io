// Contact List
const contactList = document.getElementById("contacts");
const addContactForm = document.getElementById("addContactForm");

addContactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value;
  const email = emailInput.value;

  // Create new contact item
  const contactItem = document.createElement("li");
  contactItem.textContent = `${name} - ${email}`;

  // Append the contact item to the contact list
  contactList.appendChild(contactItem);

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
});

// Visitor Notes
const noteForm = document.getElementById("noteForm");
const notesList = document.getElementById("notes");

noteForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const noteInput = document.getElementById("note");
  const noteText = noteInput.value;

  // Create new note item
  const noteItem = document.createElement("li");
  noteItem.textContent = noteText;

  // Append the note item to the notes list
  notesList.appendChild(noteItem);

  // Clear the input field
  noteInput.value = "";
});
