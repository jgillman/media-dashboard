'use strict';

var post = function( _url ) {
  var request = new XMLHttpRequest();
  request.open( 'POST', _url, true );
  request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send();
};


var playpauseElm  = document.querySelector('.js__playpause');
var nextElm       = document.querySelector('.js__next');
var previousElm   = document.querySelector('.js__previous');
var volumeUpElm   = document.querySelector('.js__volume-up');
var volumeDownElm = document.querySelector('.js__volume-down');
var volumeMuteElm = document.querySelector('.js__volume-mute');

var onPlaypauseClick = function() {
  post('/media/playpause');
};

var onNextClick = function() {
  post('/media/next');
};

var onPreviousClick = function() {
  post('/media/previous');
};

var onVolumeUpClick = function() {
  post('/media/volumeUp');
};

var onVolumeDownClick = function() {
  post('/media/volumeDown');
};

var onVolumeMuteClick = function() {
  post('/media/volumeMute');
};

playpauseElm.addEventListener( 'click', onPlaypauseClick );
nextElm.addEventListener( 'click', onNextClick );
previousElm.addEventListener( 'click', onPreviousClick );
volumeUpElm.addEventListener( 'click', onVolumeUpClick );
volumeDownElm.addEventListener( 'click', onVolumeDownClick );
volumeMuteElm.addEventListener( 'click', onVolumeMuteClick );
