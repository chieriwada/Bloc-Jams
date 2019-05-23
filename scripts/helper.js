class Helper {
  playPauseAndUpdate (song) {
    const totalTime = player.prettyTime(player.getDuration());
    $('#time-control .total-time').text(totalTime);
    player.playPause(song);
  }
};

const helper = new Helper();
