function cachingDecoratorNew(func) {
  let array = [], cache = {};

  return function (...args) {
    const hash = args.join(',');
    if (hash in cache) return `Из кэша: ${cache[hash]}`;

    if (array.length >= 5) delete cache[array.shift()];
    array.push(hash);
    cache[hash] = func(...args);
    return `Вычисляем: ${cache[hash]}`;
  }
}

function debounceDecoratorNew(func, ms) {
  let timerID, isWait = false;

  return function () {
    if (!isWait) {
      func();
      isWait = true;
    }
    else {
      clearTimeout(timerID);
      console.log("Сигнал проигнорирован");
    }
    timerID = setTimeout(()=> { func(); isWait = false; }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let count = 0, isWait = false;

  function sendMessage() {
    console.log(isWait)
    if (!isWait) {
      func();
      sendMessage.counter = ++count;
      setTimeout(()=> { func(); sendMessage.counter = ++count; isWait = false; }, ms);
      isWait = true;
    }
  }
  sendMessage.counter = 0;

  return sendMessage;
}
