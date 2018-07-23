(function(exports) {
  function testReturnsNotes() {
    var noteList = new NoteList();

    noteList.enterNote('second note');
    if (noteList.returnNotes().returnText() !== 'second note') {
      throw new Error('Note does not match');
    }
  }

  testReturnsNotes();
})(this);
