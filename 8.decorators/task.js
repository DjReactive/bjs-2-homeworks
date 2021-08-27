function cachingDecoratorNew(func) {
  let cache = {array: []};

  return function (...args) {
    const hash = args.join(',');
    if (hash in cache) {
      return `Из кэша: ${cache[hash]}`;
    }
    else {
      const arr = cache.array;
      if (arr.length >= 5) delete cache[arr.shift()];
      arr.push(hash);
      cache[hash] = func(...args);
      return `Вычисляем: ${cache[hash]}`;
    }
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
    timerID = setTimeout(()=> { isWait = false; }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let count = 0, isWait = false;

  function sendMessage() {
    if (!isWait) {
      func();
      setTimeout(()=> { isWait = false; }, ms);
      isWait = true;
    }
    sendMessage.counter = ++count;
  }
  sendMessage.counter = 0;
  return sendMessage;
}
