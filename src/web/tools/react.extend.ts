import { useState, useEffect, RefObject, createRef } from 'react';

var currentObserver;
function observalizer<T>(obj: T) {
    if (obj) {
        for (var key in obj) {
            ((obj, key) => {
                var desc = Object.getOwnPropertyDescriptor(obj, key);
                if (!desc || !(desc.get || desc.set) && desc.configurable) {
                    var value = obj[key];
                    var listeners = [];
                    (value instanceof Object) && observalizer(value);
                    Object.defineProperty(obj, key, {
                        get: () => { 
                            currentObserver && (listeners.indexOf(currentObserver)<0) && listeners.push(currentObserver); 
                            return value; 
                        },
                        set: (v) => { 
                            value = v;
                            (v instanceof Object) && observalizer(v);
                            listeners.forEach(_ => _());
                        }
                    });
                }
            })(obj, key);
        }
    }
}

var observers = {};
export function useObserver<T>(obj: T) : T {
    const [, setValue] = useState({ value: null });
    const [id] = useState(`id${new Date().getTime()}${Math.random()*100}`);

    var observer = observers[id] = observers[id] || (() => {
        setValue({ value: obj });
    });

    const previousObserver = currentObserver;
    currentObserver = observer;
    observalizer(obj);
    useEffect(() => {
        currentObserver = previousObserver;
    });

    return obj;
}

var inputFileValueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");

Object.defineProperty(HTMLInputElement.prototype, "value", {
    configurable: true,
    get: function () {
        return inputFileValueDescriptor.get.call(this);
    },
    set: function (value) {
        if (this.type == "file") {
            if (!value || value.length <= 0) {
                inputFileValueDescriptor.set.call(this, '');
            }
        } else {
            inputFileValueDescriptor.set.call(this, value);
        }
    }
});
