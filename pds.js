let adsManager,adsLoader,adDisplayContainer,intervalTimer,isAdPlaying,isContentFinished,playButton,videoContent,tryit=0,counter=0;function init(e){videoContent=document.getElementById("contentElement"),(playButton=document.getElementById("playButton")).addEventListener("click",playAds),setUpIMA(e)}function setUpIMA(e){createAdDisplayContainer(),(adsLoader=new google.ima.AdsLoader(adDisplayContainer)).addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,onAdsManagerLoaded,!1),adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onAdError,!1);let n=function(){isAdPlaying||(isContentFinished=!0,adsLoader.contentComplete())};videoContent.onended=n;let t=new google.ima.AdsRequest;t.adTagUrl=e,t.linearAdSlotWidth=640,t.linearAdSlotHeight=400,t.nonLinearAdSlotWidth=640,t.nonLinearAdSlotHeight=150,adsLoader.requestAds(t)}function createAdDisplayContainer(){adDisplayContainer=new google.ima.AdDisplayContainer(document.getElementById("adContainer"),videoContent)}function playAds(){videoContent.load(),adDisplayContainer.initialize();try{adsManager.init(640,360,google.ima.ViewMode.NORMAL),adsManager.setVolume(0),adsManager.start()}catch(e){videoContent.play()}}function onAdsManagerLoaded(e){let n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,(adsManager=e.getAdsManager(videoContent,n)).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,onAdError),adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,onContentPauseRequested),adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,onContentResumeRequested),adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,onAdEvent),adsManager.addEventListener(google.ima.AdEvent.Type.LOADED,onAdEvent),adsManager.addEventListener(google.ima.AdEvent.Type.STARTED,onAdEvent),adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE,onAdEvent),playAds()}function onAdEvent(e){let n=e.getAd();switch(e.type){case google.ima.AdEvent.Type.LOADED:n.isLinear()||videoContent.play();break;case google.ima.AdEvent.Type.STARTED:n.isLinear()&&(intervalTimer=setInterval(function(){},300));break;case google.ima.AdEvent.Type.COMPLETE:0==counter?(counter=1,init(atob("aHR0cHM6Ly9leGNoYW5nZS5idXp6b29sYS5jb20vYWQvMjU4MzM2"))):(document.body.innerHTML="",n.isLinear()&&clearInterval(intervalTimer))}}function onAdError(e){0==tryit?(tryit=1,init(atob("aHR0cHM6Ly92aWRlby5hdWRpb3RvdWNoLmluZm8vYXBpL3ZpZGVvL3RhZz9zb3VyY2VJZD0zOTQxNCZ0bWF4PTUwMCZ2aWRlby1za2lwYWZ0ZXI9NSZjb3VudD0y"))):1==tryit?(tryit=2,init(atob("aHR0cHM6Ly9leGNoYW5nZS5idXp6b29sYS5jb20vYWQvMjU4MzM2"))):console.log("don")}function onContentPauseRequested(){isAdPlaying=!0,videoContent.pause()}function onContentResumeRequested(){isAdPlaying=!1,isContentFinished||videoContent.play()}function getRandomInt(e){return Math.floor(Math.random()*e)}init(atob("aHR0cHM6Ly92YXN0LnVmb3V4YnduLmNvbS92YXN0LnBocD9wYXJ0bmVyX2lkPTg5NTI0MDEmZm9ybWF0PTImcmVmZXJyZXI9aW5ncGxheS5jb20="));
