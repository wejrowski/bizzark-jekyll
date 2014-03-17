---
layout: post
title: Rails refactoring fun - looking at old code
date: 2012-02-17 00:00:00
---

<p>
	Every so often I get to do some updates on code I wrote years ago. It&#39;s often a hideous experience (especially when you&#39;re in a rush and did not write the code), but it can be entertaining and enjoyable. Taking a big sloppy mess of redundancies and complications and making it readable, clean, and orderly&mdash;it&#39;s a satisfying experience refactoring old unrefined code&mdash;a nice guage of your growth as a human being in the small but large area of your life as a programmer.</p>
<p>
	I&#39;ll share just a few quick examples. The first two are from a Rails project I had originally built when I was getting my hands dirty with Ruby (and was still a bit handicapped by having programmed so long in PHP).</p>
<p>
	&nbsp;</p>
<p>
	<strong>Example 1: ActiveRecord scopes</strong></p>
<blockquote>
	<p>
		speakers = Page.find_all_by_page_type_id(PageType.find_by_name(&quot;speaker&quot;).id, :conditions=&gt;{:status =&gt; &#39;online&#39;}, :order=&gt;&quot;position&quot;)</p>
	<p>
		<strong>To...</strong></p>
	<p>
		&nbsp;speakers = Page.speakers</p>
</blockquote>
<p>
	&nbsp;</p>
<p>
	<strong>Example 2: Unnecessary for loops</strong></p>
<blockquote>
	<p>
		&lt;%&nbsp;if page.categories.count &gt; 0<br />
		&nbsp; &nbsp; c_count = 0<br />
		&nbsp; &nbsp; page.categories.each do |c|<br />
		&nbsp; &nbsp; &nbsp; &nbsp; c_count+=1<br />
		&nbsp; &nbsp; &nbsp; &nbsp; if c_count &gt;1&nbsp;<br />
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; %&gt;/ &nbsp;&lt;%<br />
		&nbsp; &nbsp; &nbsp; &nbsp; end %&gt;<br />
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;%=c.name %&gt;<br />
		&nbsp; &nbsp; &nbsp;&lt;%&nbsp;end&nbsp;%&gt;<br />
		&lt;%&nbsp;end&nbsp;%&gt;</p>
	<p>
		<strong>To...</strong></p>
	&nbsp;&lt;%= page.categories.map(&amp;:name).join(&quot;/&quot;) ?&gt;</blockquote>
<p>
	<strong>Example 3: Ambiguous variable names</strong> -- This was code written by a previous developer. From what I could tell &quot;in&quot; and &quot;out&quot; had nothing to do with what the numbers actually were, nor anything to do with the words &quot;in&quot; and &quot;out&quot;... it caused me a lot of confusion.</p>
<blockquote>
	<p>
		EXACT_TARGET_LISTS = {<br />
		&nbsp; &nbsp; :in &nbsp; &nbsp; &nbsp; =&gt; &#39;867530933&#39;,<br />
		&nbsp; &nbsp; :out &nbsp; &nbsp; &nbsp;=&gt; &#39;9021055&#39;<br />
		}</p>
	<p>
		<b>To...</b></p>
	EXACT_TARGET_LISTS = {<br />
	&nbsp; &nbsp; :newsletter_welcome &nbsp; =&gt; &#39;867530933&#39;,<br />
	&nbsp; &nbsp; :member_welcome &nbsp; &nbsp; &nbsp;=&gt; &#39;90210555&#39;<br />
	}</blockquote>

