var exports = this;
exports.DL = exports.DL || {};
exports.DL.Layout = exports.DL.Layout || {};
exports.DL.Layout.BackOff = (function() {
  function BackOff() {}
  BackOff.init = function() {
    this._createDOMImg();
    this._bindingGetCoordinates();
    this._bindingFallback();
  };
  BackOff._createDOMImg = function() {
    var dom = document.createElement('img');
    dom.src = 'http://oh3804si5.bkt.clouddn.com/arrow-left-01.png';
    dom.className='backOffArrow';
    dom.style.position = 'absolute';
    dom.style.zIndex = 1000;
    dom.style.top = 0;
    dom.style.left = '26px';
    dom.style.width = '70px';
    dom.style.height = '70px';
    dom.style.cursor = 'pointer';
    document.body.appendChild(dom);
  }
  BackOff._bindingGetCoordinates = function() {
    $('body').on('mousemove', function(e){
      if (e.pageX > 16 && e.pageX < 168 && e.pageY > 5 && e.pageY < 100) {
        $('.backOffArrow').css('display', 'block');
      } else {
        $('.backOffArrow').css('display', 'none');
      }
    })
  };
  BackOff._bindingFallback = function() {
    $('.backOffArrow').on('click', function(){
      window.history.go(-1);
    })
  }
  return BackOff;
})();
