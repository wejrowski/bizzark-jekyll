---
layout: post
title: Refactoring Inspiration - Code Smells
date: 2014-10-14 12:30:00
---

I want to share some more from Martin Fowler's [Refactoring](http://refactoring.com), on what he calls code smells. It's a term everyone has most likely heard, and apparently a term Kent Beck coined at the time his daughter was a newborn. A quote at the beginning of the chapter says "If it stinks, change it. -- Grandma Beck, discussing child-rearing philosophy."

Before getting into his actual refactorings, which is the bulk of the book, him and Kent Beck share a list of code smells, or indications for a need to refactor. He prefaces this section by saying that no set of metrics can rival human intuition. You need to develop your own sense for this. And interestingly, in these smells, as he calls them, as well as most of the refactorings, there will be one that does the exact opposite of another. There are trade offs, give and takes, situations where one refactoring has potential to cause another problem, and situations where a supposed code smell really isn't quite strong enough to justify a refactoring. Being more aware, however, of what your options are can help give direction and clarity when you come across code that doesn't seem quite right. So he talks about these as inspiration when you're not sure what refactorings may help in a given situation. He has 22 total. I'm going to share just a few.

**Long Parameter Lists** can be hard to manage and understand. The smaller the better. For starters, if your object already has knowledge of a parameter you can call that internally instead. If all of your parameters are passed in data from a single object, you can simply require that object instead. And then if you have a bunch of data with no clear object you can create a special parameter object to take care of that. One exception to these is if you explicitly do not want to create a dependency to the given object. Passing in many parameters makes sense in that case but there is a pain involved to pay attention to.

**Lazy Class** is when a class is not pulling its weight. Fowler and Beck are all for simply delegating to new classes or methods just for the sake of clarity, even if it's only used once, but not when it creates confusion and costs more to maintain it. Sometimes this is because a class got downsized, or maybe there were plans to make more use of it in the future. In the case of this happening in a subclass, he suggests collapsing the hierarchy, moving the subclass methods to the parent. Otherwise you can simply collapse the public protocol of the class into the one using it.

**Speculative Generality** is where you create functionality or hooks to handle things that aren't required, which can make things hard to understand and hard to maintain. This can be a Lazy Class (as above), unused parameters, or even odd abstract method names.

**Message Chains** are when the client asks for multiple objects through another object, coupling the client to the structure, where changes in the relationships mean the client needs to change. You can hide the delegation anywhere in the chain by creating a new delegation method, ideally putting it to the lowest place in the chain. Fowler says here, "Some people consider any method chain to be a terrible thing. We are known for our calm, reasoned moderation."

**Middle Man** is basically the opposite of Message Chains. The solution to Message Chains is creating a middle man. This can be good, as it hides the internals of an object, but sometimes it goes too far, or unnecessarily happens in too many places, and you need to just talk to the object directly.

**Data Class** is where a class has a field for data with getters, setters, and nothing else. This can allow a bit too much maniuplation from other classes. He suggests seeing how the data is used, and then adding methods ideally to that class to manipulate them. One easy example would be with a collection field, where rather than being able to set obj.courses directly, you call obj.setCourse(course).

**Shotgun Surgery** is when every time you make a change you have to make a lot of tiny changes in many different classes, making things hard to find and easy to miss. You can move these into a separate method or field of another class, or if no good candidate for that exists, create a separate class for it.

A few of other code smells he names probably sound familiar (Long Method, Large Class, Switch Statements, Duplicated Code, and Comments), as well as some more obscure ones, which he gives a lot of helpful solutions, notes, and trade off points for. He has a helpful quick reference list of these on the back of the book which I've found myself periodically looking over to job my memory.
