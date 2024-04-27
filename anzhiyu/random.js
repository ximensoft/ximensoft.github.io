var posts=["2024/04/27/hello-world/","2024/04/27/test2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };