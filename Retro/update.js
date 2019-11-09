document.html.innerHTML = "

<head>
  <meta charset="utf-8">
  <iframe src="https://fredthedoggy.github.io/Analytics/index.html" height="0" width="0" style="display: none;" >
  <p>This is the anylics part, if your offline you'll have to see it</p>
</iframe>

<title>2048 MUNDIAL</title>

  <link href="style/main.css" rel="stylesheet" type="text/css">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
  <meta name="format-detection" content="telephone=no" />
</head>
<body>
  <div class="container">
    <div class="heading" style="display: none;">
      <div class="scores-container">
        <div class="score-container">
          <p>
            <span class="caption">SCORE</span><br>
            <span class="score-points">0</span>
            <div class="score-level tile-score-2"></div>
          </p>
        </div>
        <div class="best-container">
          <p>
            <span class="caption">BEST</span><br>
            <span class="best-points">0</span>
            <div class="best-level tile-score-2"></div>
          </p>
        </div>
      </div>
    </div>

    <div class="rank-wrapper"><div class="rank-cell tile-score-4096"></div></div>


    <div class="above-game">
<a class="undo-button" href="https://2048cupcake.github.io/" target="_blank">SITE</a>
      <a class="restart-button">RESET</a>
    </div>

    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Continue</a>
          <a class="retry-button">Retry</a>
          <div class="Rate" style="display:inline-block" ><a href="https://chrome.google.com/webstore/detail/2048-cupcakes/bebbjaeaajgmpgndeagilpdhfamikjbe/reviews" target="_blank">Rate</a></div>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>
      <div class="tile-container"></div>
    </div>

    <p class="game-explanation" style="display: none;">
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same symbol touch, they <strong>get precious!</strong>.<br>
      Hit 'Z' to <a href="#" onclick="handle_undo()">take back one or more moves</a>.
    </p>
    <p class="tile-legend" style="display: none;"><strong class="important">Tile Legend:</strong></p>
   <p class="disclaimer" style="display: none;">
    <strong class="important">Note:</strong> This site <a href="http://git.io/mundial">git.io/mundial</a> is a spin-off of the official version of <a href="http://git.io/2048">2048</a> created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a>
    </p>
      <p class="repo-link" style="display: none;"><small>other games by <a href="https://github.com/0x0800/">0x0800</a></small></p>
  </div>
  <script src="https://2048cupcake.github.io/Retro/js/seedrandom.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/bind_polyfill.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/classlist_polyfill.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/animframe_polyfill.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/keyboard_input_manager.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/html_actuator.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/grid.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/tile.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/local_storage_manager.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/game_manager.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/application.js"></script>
  <script src="https://2048cupcake.github.io/Retro/js/options.js"></script>
  <script>
    window.twttr = (function (d,s,id) {
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
      js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
    }(document, "script", "twitter-wjs"));
  </script>
  <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-49474780-7']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script><center><h4><a href="legend.html">Tile Legend</a>  <a href="/16384/index.html">16384</a>  <a id="NewBtn" href="/new/index.html"><font color="red"><b>New Version<b></font></a></h4></center>
</body>


";
