// 当整个网页文档都加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

  // 1. 获取需要操作的元素
  const confirmBtn = document.getElementById('confirm-btn');
  const modalBackdrop = document.getElementById('start-backdrop');
  const popupLayer = document.getElementById('popup-layer');
  const appBackground = document.getElementById('app');
  
  // (可选) 获取音乐元素, 如果你在HTML中取消了注释, 这里也要取消注释
  // const bgMusic = document.getElementById('bgMusic'); 

  // 2. 监听 "打开" 按钮的点击事件
  confirmBtn.addEventListener('click', () => {
    
    // 隐藏弹窗
    modalBackdrop.classList.add('hidden');
    
    // (可选) 播放音乐, 如果你启用了音乐, 也要取消这里的注释
    // if (bgMusic) {
    //   bgMusic.play().catch(error => {
    //     console.warn("音乐播放失败(可能需要用户先点击页面): ", error);
    //   });
    // }

    // 改变背景，更有节日气氛
    appBackground.style.background = 'radial-gradient(ellipse at bottom, #c0392b 0%, #78281f 100%)';
    
    // "打开礼物"：在 popup-layer 中显示祝福语
    showTheGift();
  });

  // 3. 显示"礼物"的函数
  function showTheGift() {
    // 让 popup-layer 显示出来
    popupLayer.style.display = 'block';

    // 在里面填充 HTML 内容
    // 你可以随意修改这里的祝福语！
    popupLayer.innerHTML = `
      <h1>圣诞快乐!</h1>
      <p>🎅 Merry Christmas! 🎄</p>
    `;
  }

});
