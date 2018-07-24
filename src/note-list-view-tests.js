(function(exports) {
  function returnsHTML() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.enterNote('First note');
    noteList.enterNote('Second note');

    if (noteListView.returnHTML() !== '<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>' ) {
      throw new Error('Incorrect string');
    }

  }
  returnsHTML();
})(this);
