(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //NodeList 유사배열
    const $toggleBtn = document.getElementById('toggle-btn')

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });   
    }
    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024){
            offElements();
        }
    });
}) (window, document)