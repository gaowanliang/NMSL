const getTextFeature = (text, color) => {
    try {
        const canvas = document.createElement('canvas');
        /*
          因为进行scale以后的图案区域实际上不能确定，
          理论上应该只在(0,0,1,1)，但有的也会在它周围的像素里，
          综合效率的考虑，给一个2*2的范围是比较合适的;
        */
        canvas.width = 2;
        canvas.height = 2;

        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '100px sans-serif';
        ctx.fillStyle = color;
        ctx.scale(0.01, 0.01);
        ctx.fillText(text, 0, 0);

        const imageData = ctx.getImageData(0, 0, 2, 2).data;
        // 在一些系统里Uint8ClampedArray不支持常规的数组方法，需要转换一下
        const imageDataArr = [];
        for (let i = 0; i < imageData.length; i++) {
            imageDataArr[i] = imageData[i];
        }

        return imageDataArr.reduce((a, b) => (a + b), 0) > 0 ?
            imageDataArr.toString() : false;
    } catch (e) {
        return false;
    }
};

const distribute = (text, mode) => {
    const feature = getTextFeature(text, '#000');
    return mode ? (feature && feature === getTextFeature(text, '#FFF'))
        : feature;
};

const ifEmoji = (text) => {
    /*
      用一个最悠久而常见 emoji 来判断当前系统是使用图片还是字体来显示 emoji，
      若是图片则去做上色比对，否则只对可见性做判断。
    */
    const mode = distribute('😁');
    return distribute(text, mode);
}
