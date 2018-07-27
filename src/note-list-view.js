(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.htmlNotes = [];
  }

  NoteListView.prototype.returnHTML = function() {
    this.htmlNotes = [];
    for (i = 0; i < this.noteList.notes.length; i++) {
      var noteText = _shortenToTwentyChars(_getText(this.noteList.notes[i]));
      var htmlNote = _addHtmlTo(noteText);

      _storeIn(this.htmlNotes, htmlNote);
    }
    return _addListTags(_join(this.htmlNotes));
  };

  function _getText(note) {
    return note.returnText();
  }

  function _shortenToTwentyChars(note){
    var Note = note;
    if (note.length >= 20) {

    Note = note.substring(0, 20);}
    return Note;
  }

  function _addHtmlTo(note) {

    return '<li><div>' + note + '</div></li>';
  }

  function _storeIn(array, htmlNote) {
    array.push(htmlNote);
  }

  function _join(array) {
    return array.join("");
  }

  function _addListTags(string) {
    return '<ul>' + string + '</ul>';
  }

  exports.NoteListView = NoteListView;
})(this);
