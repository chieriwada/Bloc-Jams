class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);
  }
};

const helper = new Helper();
