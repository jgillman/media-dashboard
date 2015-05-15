'use strict';

var exec = require('child_process').exec;

var Media = function() {};

var BASE_COMMAND       = 'bin/post-hid-event';
var PLAYPAUSE_COMMAND  = 'NX_KEYTYPE_PLAY';
var NEXT_COMMAND       = 'NX_KEYTYPE_NEXT';
var PREVIOUS_COMMAND   = 'NX_KEYTYPE_PREVIOUS';
var VOLUMEUP_COMMAND   = 'NX_KEYTYPE_SOUND_UP';
var VOLUMEDOWN_COMMAND = 'NX_KEYTYPE_SOUND_DOWN';
var VOLUMEMUTE_COMMAND = 'NX_KEYTYPE_MUTE';

var runCommand = function( _command ) {
  exec( BASE_COMMAND + ' ' + _command );
};


Media.prototype.playpause = function() {
  runCommand( PLAYPAUSE_COMMAND );
};

Media.prototype.next = function() {
  runCommand( NEXT_COMMAND );
};

Media.prototype.previous = function() {
  runCommand( PREVIOUS_COMMAND );
};

Media.prototype.volumeUp = function() {
  runCommand( VOLUMEUP_COMMAND );
};

Media.prototype.volumeDown = function() {
  runCommand( VOLUMEDOWN_COMMAND );
};

Media.prototype.volumeMute = function() {
  runCommand( VOLUMEMUTE_COMMAND );
};

module.exports = new Media();
