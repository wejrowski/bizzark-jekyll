---
layout: post
title: Applescript, Omnifocus & Transmit
date: 2011-02-06 00:00:00
---

<p>
	I&#39;ve been using <a href="http://www.omnigroup.com/products/omnifocus" target="_blank">Omnifocus</a> now for about 3 months, after struggling to find a good system to keep track of what I&#39;m doing. It&#39;s pretty perfect. Except for one thing.&nbsp;It&#39;s not web based, and the only mobile app it has is for the iPhone. So I can&#39;t access anything on my lists unless I have my computer with me. So, I was daydreaming one day and wondering how I could take a list, and put it online so I could (for instance) go to the grocery store and see exactly what I need to get, and mark off what I put in my cart. Sure I could print it off, but sometimes I can&#39;t do that. And sure, I could use their HTML export, but they don&#39;t have check boxes on them so I can&#39;t check off what I&#39;ve done.</p>
<p>
	So long story short, I instead decided to spend a good 4 hours, learn a bit of&nbsp;<a href="http://developer.apple.com/AppleScript/" target="_blank">Applescript</a>, and create a nifty Applescript&nbsp;which exports an Omnifocus list to custom html with check boxes next to each item (<a href="http://www.brentwejrowski.com/omni/omni.html" target="_blank">see an example here</a>), and automatically uploads it via FTP in <a href="http://www.panic.com/transmit/" target="_blank">Transmit</a>... all in the click of a button.</p>
<p>
	Anyways, for anyone who could actually make use of this, here&#39;s what I&#39;ve got:</p>
<div class="code">
	on run<br />
	&nbsp;&nbsp;&nbsp;&nbsp;tell application id &quot;com.omnigroup.OmniFocus&quot; to tell default document<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set PP to project &quot;Grocery Print list&quot; in folder &quot;Personal&quot;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set pptasks to every task of PP where completed is false<br />
	&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
	&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;set f to ((path to desktop as text) &amp; &quot;omni.html&quot;)<br />
	&nbsp;&nbsp;&nbsp;&nbsp;set nref to open for access file f with write permission<br />
	&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;write &quot;<br />
	&lt;html&gt;<br />
	&lt;head&gt;<br />
	&lt;title&gt;Omnifocus export - &quot; &amp; (current date) &amp; &quot; &lt;/title&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;link href=&#39;style.css&#39; media=&#39;screen&#39; rel=&#39;stylesheet&#39; type=&#39;text/css&#39; /&gt;<br />
	&lt;/head&gt;<br />
	&lt;body&gt;<br />
	&lt;div id=&#39;container&#39;&gt;<br />
	&lt;div class=&#39;title&#39;&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Omnifocus Applescript Export&lt;/h1&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&quot; &amp; (current date) &amp; &quot;<br />
	&lt;/div&gt;<br />
	&lt;ul&gt;&quot; to file f<br />
	&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;repeat with ot in pptasks<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set testVars to name of ot<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write &quot;&lt;li&gt;&lt;label&gt;&lt;input type=&#39;checkbox&#39; /&gt;&quot; &amp; testVars &amp; &quot;&lt;/label&gt;&lt;/li&gt;&quot; to file f<br />
	&nbsp;&nbsp;&nbsp;&nbsp;end repeat<br />
	&nbsp;&nbsp;&nbsp;&nbsp;write &quot;<br />
	&lt;/ul&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br />
	&lt;/body&gt;<br />
	&lt;/html&gt;&quot; to file f<br />
	&nbsp;&nbsp;&nbsp;&nbsp;close access nref<br />
	&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;tell application &quot;Transmit&quot;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set myFave to item 1 of (favorites whose name is &quot;Brentwejrowski.com&quot;)<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set myRules to (skip rules whose name is &quot;New Rule&quot;)<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tell current tab of (make new document at end)<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connect to myFave<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tell local browser<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;change location to path &quot;~/Desktop&quot;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tell remote browser<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;upload item at path &quot;~/Desktop/omni4.html&quot; to &quot;public_html/omni&quot; with resume mode overwrite<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close remote browser<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
	&nbsp;&nbsp;&nbsp;&nbsp;end tell<br />
	end run</div>

