// ==UserScript==
// @name         点击按钮示例
// @namespace    http://W-Dragoner.com
// @version      0.1
// @description  在页面中添加一个按钮，点击后弹出消息框
// @author       W-Dragoner
// @match        https://*/*
// @icon         https://raw.githubusercontent.com/W-Dragoner/My-Scripts/master/demo1/demo1.png
// @license       AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个按钮元素
    const button = document.createElement('button');
    button.innerText = '点击我';

    // 添加按钮到页面中
    document.body.appendChild(button);

    // 给按钮添加点击事件处理函数
    button.addEventListener('click', function() {
        alert('你点击了按钮!');
    });
})();