(function(exports) {
  function returnsHTML() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.enterNote('First note');
    noteList.enterNote('Second note');

    var testCondition = noteListView.returnHTML() === '<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>'
    if (!testCondition) {
      throw new Error('Incorrect string');
    }
  }

  function returnsFirst20Characters(){
    let noteList = new NoteList();
    let noteListView = new NoteListView(noteList);
    noteList.enterNote('12345678901234567890ABC');
    console.log(noteListView.returnHTML())
    if (noteListView.returnHTML() !== '<ul><li><div>12345678901234567890</div></li></ul>'){
      throw new Error('Outputting more than 20 characters.')
    }


  }

  returnsHTML();
  returnsFirst20Characters();
})(this);
