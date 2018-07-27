(function(exports) {
   function NoteList() {
     this.notes = [];
   }

  NoteList.prototype.enterNote = function (text) {
    note = new Note(text, this.notes.length);
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function () {
    for (i = 0; i < this.notes.length; i++) {
      return this.notes[i];
    }
  };

   exports.NoteList = NoteList;
})(this);
