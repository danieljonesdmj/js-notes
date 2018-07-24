(function(exports) {
  function returnsNoteHTML() {
    var note = new Note('Hello');
    var singleNoteView = new SingleNoteView(note);

    if (singleNoteView.returnsNoteHTML() !== '<div>Hello</div>' ) {
      throw new Error('Incorrect string');
    }

  }
  returnsNoteHTML();
})(this);
