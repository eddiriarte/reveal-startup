import jQuery from 'jquery';
import Reveal from 'reveal.js';

import 'reveal.js/css/reveal.scss';

// replace this file with your customized theme:
import '../styles/revealjs-theme-white.scss';

// Needed for Reveal
import 'reveal.js/lib/js/head.min';
// import 'reveal.js/lib/js/classList';

jQuery(() => {

    window.Reveal = Reveal;

    require('reveal.js/plugin/notes/notes');
    require('reveal.js/plugin/zoom-js/zoom');
    require('reveal.js/plugin/markdown/marked');
    require('reveal.js/plugin/markdown/markdown');

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        // slideNumber: true,
        margin: 0.0,
        transition: 'slide',
        // based on 1280x800
        width: 1280,
        height: 800,

        // Optional libraries used to extend on reveal.js
        // dependencies: []
    });
    
});
