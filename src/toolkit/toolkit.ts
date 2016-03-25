export module toolkit {
  'use strict';

  export function dataFlush<T>(data: Array<T>, callback: (item: T) => void): void {
    let flush = (el: T) => {
      if (el) {
        callback(el);
        flush(data.pop());
      }
    };
    flush(data.pop());
  }
}
