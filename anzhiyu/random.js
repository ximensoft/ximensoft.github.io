var posts=["2024/04/cfaf734.html","2024/06/2d2f1053.html","2024/05/7e897ab9.html","2024/07/83c4310c.html","2024/05/9ccae32f.html","2024/07/bee6e072.html","2024/04/e8af88ae.html","2024/05/31bcbaaa.html","2024/07/4a9356a0.html","2024/05/1e3efaa4.html","2024/05/e191016d.html","2024/05/2d8cd4b0.html","2024/05/978e174f.html","2024/07/371a21b2.html","2024/05/2a084fe0.html","2024/05/1365a5d9.html","2024/05/df63fa33.html","2024/05/edf457a2.html","2024/06/d263cbdc.html","2024/04/e324621.html","2024/06/f3c1e40d.html","2024/05/816c020.html","2024/05/6ea47570.html","2024/05/8319b047.html","2024/05/7c3c56dd.html","2024/07/c2019c.html","2024/05/5f04ba10.html","2024/05/b1c28132.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };