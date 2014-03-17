---
layout: post
title: Quick Ruby scripts
date: 2013-03-17 00:00:00
---

<p>
	I&#39;ve been attempting to more frequently write little fun scripts to help with tasks. A while back I learned about the __END__ keyword and DATA. In a ruby file, anything after __END__ becomes a comment. And each line is stored in a variable DATA. You can use this to do some pretty cool things. I&#39;ve been using it to parse random strings.&nbsp;</p>
<p>
	Recently I needed to verify that all the images referenced css files were correct. I created this little script where I could paste my css in the file after __END__, &nbsp;parse out each instance of url(&#39;xyz&#39;), and save them as &lt;img src=&quot;xyz&quot;&gt; to a new html file where I can open and see whether they&#39;re all loading or not. &nbsp;And with a bunch of css files all I had to do was paste the css, run the file, and refresh my page.&nbsp;</p>
<script src="https://gist.github.com/wejrowski/5183874.js"></script>
