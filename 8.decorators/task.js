//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = JSON.stringify(args);

        let objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value, cache);
            return "Из кеша: " + objectInCache.value;
        }
        let result = func(...args);

        cache.push({hash: hash, value: result});

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + result, cache);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;

    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        if (timeoutId) {
            console.log('уже есть таймаут', args);
            clearTimeout(timeoutId);
        }

        if (!timeoutId) {
            console.log('первый сигнал', args);
            func.call(this, ...args);
            wrapper.count++;
        }

        timeoutId = setTimeout(() => {
            console.log('args', args);
            func.apply(this, args);
            wrapper.count++;
        }, delay);

        wrapper.allCount++;
    }

    return wrapper;
}
