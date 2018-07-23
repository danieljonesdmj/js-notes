// 'use strict';

(function(exports) {
  function testReturnsText() {
    var note = new Note('First note');

    if (note.returnText() !== 'First note') {
      throw new Error('Text does not match');
    }
  }

  testReturnsText();
})(this);
