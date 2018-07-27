(function(exports) {
  var noteList = new NoteList();

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.enterNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

NoteController.prototype.insertHTML = function () {
  document.getElementById('app').innerHTML = this.noteListView.returnHTML();
  };

  var noteController = new NoteController(noteList);
  noteController.insertHTML();
})(this);
