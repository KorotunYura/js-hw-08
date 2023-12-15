import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(handlerTime, 1000));

function handlerTime(data) {
  const time = data.seconds;

  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {});
