---
layout: post
title: Martin Fowler - Principles of Refactoring
date: 2014-04-15 15:30:00
---

I am reading through Martin Fowler's Refactoring right now and thought I'd share some bits and pieces as I'm going through. His second chapter is entitled, "Principles of Refactoring" where he shares the when and why to refactoring along with a few basic principles.

Why Refactor?
-------------

Ultimately, he says, refactoring allows you to develop much faster. When you refactor---when you develop the habit of making code easier to understand, by breaking things down into simpler chunks, simply renaming things, or changing structure to help it make more sense (etc)---your code becomes much easier to understand, enabling you to develop more quickly. It can be a hard sell at first when things seem overwhelming, but I think one of the greatest principles to that which he shares is that refactoring should be done in small chunks over time. And, in many projects it will create more work up front, but that will in almost all cases, he says, speed things up in the end. Refactoring now seems to be a pretty well accepted practice in most circles. Apparently when he first came across the idea from Bill Opdyke in 1992 he says, *I remember thinking, "Interesting, but not really that important." Boy was I wrong!* 

Two Hats
--------

One principle he starts off with is what he calls "two hats." Think of wearing two hats while you program. One is when refactoring, where you add no new functionality, you only restructure it. You should have full test coverage beforehand and not be changing or adding any new tests while refactoring. The other hat is for adding new function, where you only add new capabilities, you don't change existing code. If you're adding something new and come across something which would be helpful if it were restructured, swap hats, refactor, then swap back and keep going.

When should you refactor?
-------------------------

For starters Martin says in almost all cases he is opposed to setting aside time for refactoring, especially scheduled time. It should be a thing you do all the time, in small chunks.

**Refactor duplication the third time you see it.**  When you do something for the first time, just do it. If you do it again, take note of the duplication and do it anyway. If you do it a third time, then refactor. [I've also heard this elsewhere](http://blog.codeclimate.com/blog/2014/01/09/when-is-it-time-to-refactor/) in relation to finding something that needs refactoring. If you find a problem that bothers you or needs refactoring, leave it once, twice, and three times refactor it.

**When you fix a bug.** Refactoring here can be a helpful way of understanding code. If you come across something that doesn't make sense, make some small tweaks to make it be more understandable. Bugs, he says, are often a sign refactoring is needed since the code was not clear enough in the first place to see that there was a bug.

**When you code review.** [Code reviews](http://blog.codinghorror.com/code-reviews-just-do-it) are one of the greatest ways to improve code. The more I've done code reviews the more I've seen how helpful it is to not only understand other people's code, but understand how they're reading it---what makes sense, what's confusing etc---which is really helpful for refactoring. And often times it's as simple as adding a method or renaming a few variables. It can, at times, be difficult to do during code reviews, especially if it would push back a deadline. We often will refactor if it's a dealbreaker for two or more teammates. If not, or otherwise, we will note our thoughts, and if we have time we'll change them, otherwise we'll merge the code and refactor later. More recently our team has been doing more daily code reviews and github pull requests which has given us a lot more opportunity and time to catch things as they come rather than what we did before, which was reviewing once every one or two weeks.

When not to refactor
--------------------

**When code is just too messy.** If it would simply be easier to rewrite the code, do it. A clear sign of this is when the code simply does not work or you cannot stabilize it. Code must be working correctly before refactoring it (and ideally have working tests beforehand).

**Deadlines.** Interestingly, but practically, he says don't refactor close to a deadline. If the productivity gain would only appear after the deadline, wait. You can then think of it as a debt to manage later, and hopefully sooner and more well managed.

Other than that he says you should not put it off simply because you do not have time---which, he says, is often a sign that you need to refactor!

Performance
-----------

One last interesting bit I'll share from this chapter is on Performance and refactoring. He was pretty adamant that you should not worry about performance when refactoring. Paying constant attention to this is a common approach, he says, but more often than not it is not affective and does not even work. The changes often make code harder to work with and make development slow. And, ultimately, often times these minor adjustments do not result in quicker software. His approach is to develop and refactor, and at a later stage worry about performance. When you have more well refactored code you can often fine tune performance more easily. Not only that but you can find and work with the problems much quicker. If you use a performance tool you can find hot spots and then fine tune those areas themselves, the small areas where 90% of the issues come from.
