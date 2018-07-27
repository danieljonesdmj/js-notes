// 'use strict';

(function(exports) {
  function testReturnsText() {
    var note = new Note('First note', 0);

    if (note.returnText() !== 'First note') {
      throw new Error('Text does not match');
    }
  }

  function testReturnsID() {
    var note = new Note('First note', 0);

    if (note.returnID() !== 0) {
      throw new Error('ID does not match');
    }
  }

  testReturnsText();
  testReturnsID();
})(this);
