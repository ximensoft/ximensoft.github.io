var posts=["2024/04/cfaf734.html","2024/04/e324621.html","2024/05/816c020.html","2024/04/e8af88ae.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };