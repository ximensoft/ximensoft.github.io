var posts=["posts/2024/04/4a17b156.html","posts/2024/04/13bb8d58.html","posts/2024/04/2adb98ac.html","posts/2024/04/bbe5d848.html","posts/2024/04/e324621.html","posts/2024/04/0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };