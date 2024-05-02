var posts=["2024/04/e8af88ae.html","2024/05/2d8cd4b0.html","2024/04/cfaf734.html","2024/05/e191016d.html","2024/04/e324621.html","2024/05/816c020.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };