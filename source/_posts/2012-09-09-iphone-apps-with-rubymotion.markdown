---
layout: post
title: iPhone apps with RubyMotion
date: 2012-09-09 00:00:00
---

<p>
	I just purchased a copy of <a href="http://www.rubymotion.com/">Rubymotion</a> a few weeks ago. RubyMotion allows you to build full iPhone apps using... Ruby. &nbsp;The founder was a former Apple developer who&#39;s sole project was MacRuby, who had left Apple to make RubyMotion his full time project. &nbsp;RubyMotion gives you direct access to the iPhone&#39;s Objective-C API, and compiles the app to native binary, allowing it to be a legitimate iPhone app with no performance drawbacks (e.g.&nbsp;<a href="http://phonegap.com/">PhoneGap</a>).&nbsp;I was convinced, after reading <a href="http://iconoclastlabs.com/cms/blog/posts/phonegap-vs-rubymotion">this article</a>&nbsp;about PhoneGap vs Rubymotion to give it a try. Also, just knowing who built it and everyone who supports it convinces me. <a href="http://rubyrogues.com/055-rr-rubymotion-with-laurent-sansonetti/">Here&#39;s an interview</a> with the creator.</p>
<p>
	It will be a fun challenge to program with Ruby outside the usual Rails world I&#39;m in every day. While learning the ins and outs of iPhone development I&#39;ll be putting together the basic interface for an app idea I&#39;ve had for a while.</p>
<p>
	It&#39;s amazingly easy to build apps. Type &quot;rake&quot; in the command line and.. bada bing bada boom--an iPhone plops onto your screen and you&#39;re playing with the app (albeit a blank black screen if you haven&#39;t done anything yet). You even have the console to interactive with the app in runtime (something you can&#39;t do when developing normal Objective-C / XCode projects). A few weekends and a hand full of hours later, I was able to create some basic navigation with different screens. The below is a series of 4 screens I built to allow you to edit an object I&#39;m calling a &quot;Stack.&quot; You can add/delete ones, create a new one and edit a couple Stack settings. Took me a while to make everything look pretty. My favorite part is the very subtle gradient on the bottom of the rows on the first screen (and on the top when you drag it down.. like the Clock app).</p>
<p>
	&nbsp;</p>
<p>
	<img alt="" src="http://bizzark.com/images/attachments/page_58/iphone1.jpg" style="width: 368px;height:697px;" /> <img alt="" src="http://bizzark.com/images/attachments/page_58/iphone2.jpg" style="width: 368px;height:697px;" /> <img alt="" src="http://bizzark.com/images/attachments/page_58/iphone3.jpg" style="width: 368px;height:697px;" /> <img alt="" src="http://bizzark.com/images/attachments/page_58/iphone6.jpg" style="width: 368px;height:697px;" /></p>
<style type="text/css">body{background: #ffffff!important}</style>

