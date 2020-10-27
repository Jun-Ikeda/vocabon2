import Storage from '../config/Storage';

let timer = null;

const Timer = {
  initTimer: async (_function, _onNoTimerset, setState) => {
    const trySetState = data => {
      try {
        setState(data);
      } catch (error) {
        // eslint-disable-next-line no-unused-vars, prefer-const
        let it = 'be';
      }
    };
    const limit = await Storage.Function.load({ key: 'timerLimit' });
    if (!(limit === 0)) {
      if (limit < Date.now()) {
        Timer.stop(_function);
      } else {
        let remain = limit - Date.now();
        timer = setInterval(() => {
          trySetState(Math.floor(remain / 1000));
          if (Math.floor(remain / 1000) <= 0) {
            Timer.stop(_function);
          }
          remain -= 1000;
        }, 1000);
      }
    } else {
      _onNoTimerset();
    }
  },

  start: (_function, duaration, setState) => {
    const trySetState = data => {
      try {
        setState(data);
      } catch (error) {
        // eslint-disable-next-line no-unused-vars, prefer-const
        let it = 'be';
      }
    };
    const limit = Date.now() + duaration;
    Storage.Function.save({ key: 'timerLimit', data: limit, merge: false });
    let remain = duaration;
    timer = setInterval(() => {
      remain -= 1000;
      trySetState(Math.floor(remain / 1000));
      if (Math.floor(remain / 1000) <= 0) {
        Timer.stop(_function);
      }
    }, 1000);
  },

  stop: _function => {
    clearInterval(timer);
    // console.log('stop was called');
    Storage.Function.save({ key: 'timerLimit', data: 0, merge: false });
    try {
      _function();
    } catch (error) {
      // console.log(error);
    }
  },

  convertUnixTimeToYMDT: unix => {
    const date = new Date(unix);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  },
};

export default Timer;

const keysTimeout = {};
const keysInterval = {};

export const TimerProcess = {
  setTimeout: ({ key, duaration, callback }) => {
    keysTimeout[key] = setTimeout(callback, duaration);
  },
  setInterval: ({ key, duaration, callback }) => {
    keysInterval[key] = setInterval(callback, duaration);
  },
  clearTimeout: ({ key }) => {
    if (key == null) {
      for (const child in keysTimeout) {
        if (child) {
          clearTimeout(child);
        }
      }
    } else {
      clearTimeout(keysTimeout[key]);
    }
  },
  clearInterval: ({ key }) => {
    if (key == null) {
      for (const child in keysInterval) {
        if (child) {
          clearInterval(child);
        }
      }
    } else {
      clearInterval(keysInterval[key]);
    }
  },
  getTimeoutkeys: () => Object.keys(keysTimeout),
  getIntervalkeys: () => Object.keys(keysInterval),
};
