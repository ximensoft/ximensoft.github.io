var posts=["posts/2024/04/2adb98ac.html","posts/2024/04/bbe5d848.html","posts/2024/04/e324621.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };