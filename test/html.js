module.exports = {


    html: `
    
    
    
    
    
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    
    <html>
      <head>
        <meta name="description"          content="Expand the largest, most comprehensive, human-reviewed directory of the web">
        <meta name="keywords"             content="search, directory, community, web directory, web search, search engine">
        <meta name="viewport"             content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type"   content="text/html; charset=UTF-8">
        <meta property="og:url"           content="" />
        <meta property="og:type"          content="website" />
        <meta property="og:description"   content="It's the Web, Organized." />
        <meta property="og:image"         content="/img/mozzie-banner.png" />
    
        <title>test</title>
    
        <link rel="icon"          type="image/x-icon"  href="/img/mozilla.gif"      />
        <link rel="shortcut icon" type="image/x-icon"  href="/img/mozilla.gif"      />
        <link rel="stylesheet"    type="text/css"      href="/css/dmoz-icons.css"   />
        <link rel="stylesheet"    type="text/css"      href="/css/dmoz-common.css"  />
        <link rel="stylesheet"    type="text/css"      href="/css/dmoz-cats.css"    />
        <link rel="stylesheet"    type="text/css"      href="/css/dmoz-stats.css"   />
        <link rel="stylesheet"    type="text/css"      href="/css/dmoz-colors.css"  />
        <link rel="stylesheet"    type="text/css"      href="/css/font-awesome/css/font-awesome.min.css" />
    
        <script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="/js/dmoz-common.js"></script>
        <script type="text/javascript" src="/js/dmoz-social.js"></script>
    
        <base target="_top">
      </head>
    
      <body>
    
    
      <div id="page">
    
        <!---------- FACEBOOK FOLLOW ---------->
    
        <div id="fb-root"></div>
    
        <!---------- HEADER ---------->
          
        <header>
          <div class="logo-container">
            <a class="logo" title="DMOZ" href="/"><span>DMOZ</span></a>
          </div>
    
          <div class="dmoz-hashtag non-mobile" onClick="share('twitter',  'home', '#OrganizeTheWeb' )">#OrganizeTheWeb</div>
            
          <div class="mozzie"></div>
          <div class="hero">
            <h1 class="welcome non-mobile">Welcome!</h1>
            <h2 class="welcome-sub">This site includes information formerly made available via DMOZ.</h2>
            <h3 class="non-mobile">Visit <a href="https://www.resource-zone.com/">resource-zone</a>
               to stay in touch with the community.
            </h3>
          </div>
    
          <a class="menu" id="mobile-menu"><i id="mobile-menu-icon" class="fa fa-bars"></i></a>
          <a class="menu" id="social-menu"><i id="social-menu-icon" class="fa fa-share-alt"></i></a>
    
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
    
          <div class="twitter-follow homepage"><a href="https://twitter.com/dmoz" class="twitter-follow-button" data-show-count="false" data-dnt="true">Follow @dmoz</a></div>
          <div class="fb-follow" data-href="https://www.facebook.com/dmoz" data-layout="button" data-show-faces="false"></div>
          <div class="fb-like" data-href="http://dmoz.org" data-layout="button" data-action="like" data-show-faces="false" data-share="false"></div>
    
        </header>
          
        <!---------- NAVIGATION ---------->
            
        <nav id="main-nav" class="homepage">
            <ul>
                <li> <a href="/docs/en/about.html">        About       </a> </li>
                <li> <a href="/docs/en/help/become.html">   Become an Editor </a> </li>
                <li> <a href="/docs/en/add.html">            Suggest a Site          </a> </li>
                <li> <a href="/docs/en/help/helpmain.html"> Help             </a> </li>
    
                <li> <a href="/editors/"> Login                       </a> </li>
    
            </ul>
        </nav>
    
        <!---------- SOCIAL MENU ---------->
    
        <nav id="main-social" class="homepage">
            <ul>
                <li class="social-link" onClick="share('facebook', 'home' )">                                            <i class="fa fa-2x fa-facebook-square"></i> Share via Facebook </li>
                <li class="social-link" onClick="share('twitter',  'home', '#OrganizeTheWeb' )"> <i class="fa fa-2x fa-twitter-square"></i>  Share via Twitter  </li>
                <li class="social-link" onClick="share('linkedin', 'home' )">                                            <i class="fa fa-2x fa-linkedin-square"></i> Share via LinkedIn </li>
                <li class="social-link" onClick="share('mail',     'home' )">                                            <i class="fa fa-2x fa-envelope-square"></i> Share via e-Mail   </li>
                <p>
                <li> <span><a class="social-link" target="_blank" href="http://www.facebook.com/dmoz">
                      <i class="fa fa-2x fa-facebook-square"></i> Visit DMOZ on Facebook </a></span>  </li>
                <li> <span><a class="social-link" target="_blank" href="http://www.twitter.com/dmoz">
                      <i class="fa fa-2x fa-twitter-square"></i>  Visit DMOZ on Twitter </a></span> </li>
            </ul>
        </nav>
    
        <!---------- SEARCH and SOCIAL ---------->
        
        <section id="node-search-home" class="search-and-social">
                    
          <div class="search-wrapper">
    
            <form id="search-form" action="search" method="GET">
    
              <span id="more-search-options">
                <i id="advanced-search-icon" class='fa fa-plus'></i>
              </span>
    
              <div class="basic-search">    
                <input class="text-box" type="search" name="q" value="" autofocus placeholder=" Search DMOZ"/>
                <i class="search-submit-button fa fa-search"></i>
              </div>
            
              <div class="social">
                <span id="share-facebook" class="fa fa-2x fa-facebook-square"    onClick="share('facebook', 'home' )"></span>
                <span id="share-twitter"  class="fa fa-2x fa-twitter-square"     onClick="share('twitter',  'home', '#OrganizeTheWeb' )"></span>
                <span id="share-linkedin" class="fa fa-2x fa-linkedin-square"    onClick="share('linkedin', 'home' )"></span>
                <span id="share-mail"     class="fa fa-2x fa-envelope-square"    onClick="share('mail',     'home' )"></span>
                <span id="share-google"   class="fa fa-2x fa-google-plus-square" onClick="share('google',   'home' )"></span>
              </div>
    
              <div class="advanced-search-option search-help">
                <a id="advanced-search-link" href="/docs/en/searchguide.html">Help with Search</a>
              </div>
    
            </form>
    
          </div>
        </section>
          
        <!---------- CATEGORIES ---------->
    
      <div class="outer-cats">
        <section id="category-section" class="cats">
          <aside class="arts">
            <div id="home-cat-arts" class="category arts" onClick="window.location.href='/Arts/'">
                <h2 class="top-cat"><a href="/Arts/">Arts</a></h2>
                <h3 class="sub-cat"><a href="/Arts/Movies/">Movies</a>, 
                                    <a href="/Arts/Television/">Television</a>, 
                                    <a href="/Arts/Music/">Music</a>...</h3>
            </div>
          </aside>
          
          <aside class="business">
            <div id="home-cat-business" class="category business" onClick="window.location.href='/Business/'">
                <h2 class="top-cat"><a href="/Business/">Business</a></h2>
                <h3 class="sub-cat"><a href="/Business/Employment/">Jobs</a>,
                                    <a href="/Business/Real_Estate/">Real Estate</a>,
                                    <a href="/Business/Investing/">Investing</a>...</h3>
            </div>
          </aside>
            
          <aside class="computers">
            <div id="home-cat-computers" class="category computers" onClick="window.location.href='/Computers/'">                
                <h2 class="top-cat"><a href="/Computers/">Computers</a></h2>
                <h3 class="sub-cat"><a href="/Computers/Internet/">Internet</a>,
                                    <a href="/Computers/Software/">Software</a>,
                                    <a href="/Computers/Hardware/">Hardware</a>...</h3>
            </div>
          </aside>
            
          <aside class="games">
            <div id="home-cat-games" class="category games" onClick="window.location.href='/Games/'">
                <h2 class="top-cat"><a href="/Games/">Games</a></h2>
                <h3 class="sub-cat"><a href="/Games/Video_Games/">Video Games</a>, 
                                    <a href="/Games/Roleplaying/">RPGs</a>, 
                                    <a href="/Games/Gambling/">Gambling</a>...</h3>               
            </div>
          </aside>
          
          <aside class="health">
            <div id="home-cat-health" class="category health" onClick="window.location.href='/Health/'">                
                <h2 class="top-cat"><a href="/Health/">Health</a></h2>
                <h3 class="sub-cat"><a href="/Health/Fitness/">Fitness</a>,
                                    <a href="/Health/Medicine/">Medicine</a>,
                                    <a href="/Health/Alternative/">Alternative</a>...</h3>
            </div>
          </aside>
    
          <aside class="home">
            <div id="home-cat-home" class="category home" onClick="window.location.href='/Home/'"> 
                <h2 class="top-cat"><a href="/Home/">Home</a></h2>
                <h3 class="sub-cat"><a href="/Home/Family/">Family</a>,
                                    <a href="/Home/Consumer_Information/">Consumers</a>,
                                    <a href="/Home/Cooking/">Cooking</a>...</h3>
            </div>
          </aside>
            
          <aside class="news">
            <div id="home-cat-news" class="category news" onClick="window.location.href='/News/'">                
                <h2 class="top-cat"><a href="/News/">News</a></h2>
                <h3 class="sub-cat"><a href="/News/Media/">Media</a>,
                                    <a href="/News/Newspapers/">Newspapers</a>,
                                    <a href="/News/Weather/">Weather</a>...</h3>
            </div>
          </aside>
            
          <aside class="recreation">
            <div id="home-cat-recreation" class="category recreation" onClick="window.location.href='/Recreation/'"> 
                <h2 class="top-cat"><a href="/Recreation/">Recreation</a></h2>
                <h3 class="sub-cat"><a href="/Recreation/Travel/">Travel</a>,
                                    <a href="/Recreation/Food/">Food</a>,
                                    <a href="/Recreation/Outdoors/">Outdoors</a>,
                                    <a href="/Recreation/Humor/">Humor</a>...</h3>
            </div>
          </aside>
            
          <aside class="reference">
            <div id="home-cat-reference" class="category reference" onClick="window.location.href='/Reference/'">
                <h2 class="top-cat"><a href="/Reference/">Reference</a></h2>
                <h3 class="sub-cat"><a href="/Reference/Maps/">Maps</a>,
                                    <a href="/Reference/Education/">Education</a>,
                                    <a href="/Reference/Libraries/">Libraries</a>...</h3>
            </div>
          </aside>
            
          <aside class="regional">
            <div id="home-cat-regional" class="category regional" onClick="window.location.href='/Regional/'">                
                <h2 class="top-cat"><a href="/Regional/">Regional</a></h2>
                <h3 class="sub-cat"><a href="/Regional/North_America/United_States/">US</a>,
                                    <a href="/Regional/North_America/Canada/">Canada</a>,
                                    <a href="/Regional/Europe/United_Kingdom/">UK</a>,
                                    <a href="/Regional/Europe/">Europe</a>...</h3>
            </div>
          </aside>
            
          <aside class="science">
            <div id="home-cat-science" class="category science" onClick="window.location.href='/Science/'"> 
                <h2 class="top-cat"><a href="/Science/">Science</a></h2>
                <h3 class="sub-cat"><a href="/Science/Biology/">Biology</a>,
                                    <a href="/Science/Social_Sciences/Psychology/">Psychology</a>,
                                    <a href="/Science/Physics/">Physics</a>...</h3>
            </div>
          </aside>
            
          <aside class="shopping">
            <div id="home-cat-shopping" class="category shopping" onClick="window.location.href='/Shopping/'">                
                <h2 class="top-cat"><a href="/Shopping/">Shopping</a></h2>
                <h3 class="sub-cat"><a href="/Shopping/Clothing/">Clothing</a>,
                                    <a href="/Shopping/Food/">Food</a>,
                                    <a href="/Shopping/Gifts/">Gifts</a>...</h3>
            </div>
          </aside>
            
          <aside class="society">
            <div id="home-cat-society" class="category society" onClick="window.location.href='/Society/'">                
                <h2 class="top-cat"><a href="/Society/">Society</a></h2>
                <h3 class="sub-cat"><a href="/Society/People/">People</a>,
                                    <a href="/Society/Religion_and_Spirituality/">Religion</a>,
                                    <a href="/Society/Issues/">Issues</a>...</h3>
            </div>
          </aside>
            
          <aside class="sports">
            <div id="home-cat-sports" class="category sports" onClick="window.location.href='/Sports/'"> 
                <h2 class="top-cat"><a href="/Sports/">Sports</a></h2>
                <h3 class="sub-cat"><a href="/Sports/Baseball/">Baseball</a>,
                                    <a href="/Sports/Soccer/">Soccer</a>,
                                    <a href="/Sports/Basketball/">Basketball</a>...</h3>
            </div>
          </aside>
    
          <div class="cat-separator"></div>
    
          <aside class="kids_and_teens">
            <div id="home-cat-kids_and_teens" class="category kids_and_teens" onClick="window.location.href='/Kids_and_Teens/'">
                <h2 class="top-cat"><a href="/Kids_and_Teens/">Kids <span class="subtext"> & </span> Teens Directory</a></h2>
                <h3 class="sub-cat"><a href="/Kids_and_Teens/Arts/">Arts</a>,
                                    <a href="/Kids_and_Teens/School_Time/">School Time</a>,
                                    <a href="/Kids_and_Teens/Teen_Life/">Teen Life</a>...</h3>
            </div>
          </aside>
    
          <aside class="world">
            <div id="home-cat-world" class="category world" onClick="window.location.href='/World/'"> 
                <h2 class="top-cat"><a href="/World/">DMOZ <span class="subtext">around the</span> World</a></h2>
                <h3 class="sub-cat">
                    <a href="/World/Deutsch/"          title="German">Deutsch</a>,
                    <a href="/World/Fran%C3%A7ais/"    title="French">Fran&ccedil;ais</a>,
                    <a href="/World/Japanese/"         title="Japanese">&#x65E5;&#x672C;&#x8A9E;</a>,
                    <a href="/World/Italiano/"         title="Italian">Italiano</a>,
                    <a href="/World/Espa%C3%B1ol/"     title="Spanish">Espa&ntilde;ol</a>,
                    <a href="/World/Russian/"          title="Russian">&#x420;&#x443;&#x441;&#x441;&#x43A;&#x438;&#x439;</a>,
                  <span id="extra-world-languages">
                    <a href="/World/Nederlands/"         title="Dutch">Nederlands</a>,
                    <a href="/World/Polski/"             title="Polish">Polski</a>,
                    <a href="/World/T%C3%BCrk%C3%A7e/"   title="Turkish">T&uuml;rk&ccedil;e</a>,
                    <a href="/World/Dansk/"              title="Danish">Dansk</a>,
                    <a href="/World/Chinese_Simplified/" title="Chinese Simplified">&#x7B80;&#x4F53;&#x4E2D;&#x6587;</a>,
                  </span>...
                </h3>
            </div>
          </aside>
    
        </section>
      </div>
          
        <!---------- STATISTICS ---------->
            
        <section class="stats">
            
          <aside>
            <div class="editors">
                <h3 class="stat">
                    91,929<br> Editors </%>
                </h3>
                <i class='fa fa-user'></i>
            </div>
          </aside>
            
          <aside> <div class="categories">
                <h3 class="stat">
                    1,031,722<br> Categories </%>
                </h3>
                <i class='fa fa-folder-o'></i>
            </div>
          </aside>
            
          <aside>
            <div class="sites">
                <h3 class="stat">
                    3,861,210<br> Sites </%>
                </h3>
                <i class='fa fa-file-text-o'></i>
            </div> 
          </aside>
      
          <aside>
            <div class="languages">
                <h3 class="stat">
                    90<br> Languages </%>
                </h3>
                <i class='fa fa-comment'></i>
            </div> 
          </aside>
        
        </section>
    
        <!---------- FOOTER ---------->
    
        <footer>
            <div class="copyright">
                Copyright &copy; 1998-2017 AOL Inc.
            </div>
            
            <div class="terms">
                 <a class="terms-of-use" href="/docs/en/termsofuse.html">Terms of Use</a>
            </div>  
            
            <div class="build">
                <p><a href="/docs/en/cmbuild.html">CMBuild</a> 3.0.4-819168 Tue Jan 10 15:40:44 EST 2017</%></p>
            </div> 
        </footer>
    
      </div>
    
    
    <script type="text/javascript">
    
      bN_cfg =
      {
        h: location.hostname
      };
    
      function runOmni()
      {
        s_265.pfxID="dmoz";
        s_265.pageName="index.jsp";
        s_265.channel="us.dmozodp";
        s_265.linkInternalFilters="javascript:,dmoz.org";
        s_265.prop1="main";
        s_265.prop2="depth : 0";
        s_265.prop16="en";
        s_265.prop54="no_cms";
        s_265.prop62="video_novideo";
        s_265.prop65="original_content";
        s_265.mmxgo=true;
    
        var s_code=s_265.t();
      }
    
      s_265_account ="aolsvc";
    
      (function(){
        var d = document, s = d.createElement('script');
        s.type = 'text/javascript';
        s.src = (location.protocol == 'https:' ? 'https://s' : 'http://o') + '.aolcdn.com/os_merge/?file=/aol/beacon.min.js&file=/aol/omniture.min.js';
        d.getElementsByTagName('head')[0].appendChild(s);
      })();
    </script>
    
    
    </body>
    </html>`
    
    
    }