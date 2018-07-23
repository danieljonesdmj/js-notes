(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
    this.arr = [];
  }

  NoteListView.prototype.returnsHTML = function() {
    for (i = 0; i < this.noteList.notes.length; i++) {
    this.arr.push('<li><div>' + this.noteList.notes[i].returnText() + '</div></li>');

  }
    var string = this.arr.join("");
    return '<ul>' + string + '</ul>';
  };

  exports.NoteListView = NoteListView;
})(this);
