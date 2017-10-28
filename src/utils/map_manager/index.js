function init(ak) {
  return new Promise((resolve, reject) => {
    window.onload = function () {
      resolve(window.BMap);
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default {
  init
};
