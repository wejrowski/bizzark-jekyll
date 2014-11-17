---
layout: post
title: The Refactorings
date: 2014-11-15 17:00:00
---

Words and concepts allow us to reason with things. We create vocabulary and in doing so we can think with more complexity, accomplish more, and have greater understanding. When you don't have vocabulary and concepts for things you [really are more limited](http://www.radiolab.org/story/91725-words/) (<-- crazy story if you want your mind blown). I propose Fowler's Refactorings are sort of like that. Or I'm going to think of them so. They're like the low level concept that help you get to the greater concepts (being, perhaps, your domain language or other patterns, etc), which help get you to that euphoric bliss of writing software where you are never confused, never held back by any complicated or sticky code. Ok perhaps impossible, but I do believe these help propel you... somewhere further along.

So I'm going to share Fowler's catalogue of refactorings. Many of us make use of a lot of these on a regular basis, and some may seem a bit rudimentary. In whole, however, I do think these can help give more vocabulary to us, and therefore more options, when dealing with the software we're developing. Many of them are so simple they make refactoring seem... easy. And perhaps it is (at least more than I know I've often made it in years past). Often I've thought of refactoring in terms of a giant mess that would take a week to fix. I've been more inspired though, as Fowler provokes you, to think of refactoring as something simple, easy, something that you can do on an ongoing basis that doesn't have to be big and daunting (more on that later).

So here's a brief overview of each section of refactorings (I've listed and linked each of the refactorings to examples on Fowler's site):

## Composing Methods

Fowler says one of the most common problems and keys to well maintained software is simple methods. This first section of his refactorings deals with this: managing the internals of methods so they are easier to understand. One of the most common ones here is [Extract Method](http://refactoring.com/catalog/extractMethod.html) (extracting a piece of logic from a method into a new, well named, method). Or, if an extracted method is just as clear as it's method name you can do the opposite: [Inline Method](http://refactoring.com/catalog/inlineMethod.html). As with all of the refactorings, one of the goals is clarity and the ability to understand, whether that be delegating to a new object or method, removing unnecessary delegation (if it's not pulling it's weight) or simply creating instance variables to explain the purpose of something.

[Extract Method](http://refactoring.com/catalog/extractMethod.html), [Inline Method](http://refactoring.com/catalog/inlineMethod.html), [Inline Temp](http://refactoring.com/catalog/inlineTemp.html), [Replace Temp with Query](http://refactoring.com/catalog/replaceTempWithChain.html), [Introduce Explaining Variable](http://refactoring.com/catalog/extractVariable.html), [Split Temporary Variable](http://refactoring.com/catalog/splitTemporaryVariable.html), [Remove Assignments to Parameters](http://refactoring.com/catalog/removeAssignmentsToParameters.html), [Replace Method with Method Object](http://refactoring.com/catalog/replaceMethodWithMethodObject.html), [Substitute Algorithm](http://refactoring.com/catalog/substituteAlgorithm.html)

## Moving Features Between Objects

One of the (if not *the*) most fundamental decisions on OO, Fowler says, is deciding *where* to put responsibilities. In his typical and honest fashion, he repeats throughout the book that he never gets this right the first time, but he's found it less of a burden knowing that he can always refactor. This section is all about organization between objects or even adding functionality to external objects when you can't modify them. Reading these helped emphasized that point: you aren't going to know right up front where things should live, and it doesn't have to be a burden to move things around. Add delegation for clarity, or remove it if it's no help. You can slowly and easily mold your objects to help them give you the most benefit and clarity.

[Move Method](http://refactoring.com/catalog/moveMethod.html), [Move Field](http://refactoring.com/catalog/moveField.html), [Extract Class](http://refactoring.com/catalog/extractClass.html), [Inline Class](http://refactoring.com/catalog/inlineClass.html), [Hide Delegate](http://refactoring.com/catalog/hideDelegate.html), [Remove Middle Man](http://refactoring.com/catalog/removeMiddleMan.html), [Introduce Foreign Method](http://refactoring.com/catalog/introduceForeignMethod.html), [Introduce Local Extension](http://refactoring.com/catalog/introduceLocalExtension.html)

## Organizing Data

These refactorings are all about making data easier to work with, whether it be replacing mysterious numbers with a named constant, creating classes for simple but confusing data types like arrays (don't you love reading things like, person[0][1] = "John", person[0][2]="Doe"?), or encapsulating data and giving an external and safe interface for it. A helpful solidification for me in reading this section: The way you work with data and the external interface you give objects not only gives your objects protection (or lack thereof), but it can really help make things easier to reason with. Privatizing methods and attributes that are only used internally not only helps keep things safe, but also solidifies what the object's main purpose is and how you want others (or your future self) to understand it. Replacing data field public accessors with add/remove methods instead not only helps protect you from accidentally messing up or deleting data by replacing the entire (for example) array but it helps make reading your code easier. I recently saw the confusing affects of this (an unnecessary public setter): I'll occasionally glance at this setter and wrack my brain for a few minutes trying to figure out why it would be there, then moving on because it's not something I'm concerned with at the moment. I realized it actually had absolutely no use, and was really causing only confusion.

[Self Encapsulate Field](http://refactoring.com/catalog/selfEncapsulateField.html), [Replace Data Value with Object](http://refactoring.com/catalog/replaceDataValueWithObject.html), [Change Value to Reference](http://refactoring.com/catalog/changeValueToReference.html), [Change Reference to Value](http://refactoring.com/catalog/changeReferenceToValue.html), [Replace Array with Object](http://refactoring.com/catalog/replaceArrayWithObject.html), [Duplicate Observed Data](http://refactoring.com/catalog/duplicateObservedData.html), [Change Unidirectional Association to Bidirectional](http://refactoring.com/catalog/changeUnidirectionalAssociationToBidirectional.html), [Change Bidirectional Association to Unidirectional](http://refactoring.com/catalog/changeBidirectionalAssociationToUnidirectional.html), [Replace Magic Number with Symbolic Constant](http://refactoring.com/catalog/replaceMagicNumberWithSymbolicConstant.html), [Encapsulate Field](http://refactoring.com/catalog/encapsulateField.html), [Encapsulate Collection](http://refactoring.com/catalog/encapsulateCollection.html), [Replace Record with Data Class](http://refactoring.com/catalog/replaceRecordWithDataClass.html), [Replace Type Code with Class](http://refactoring.com/catalog/replaceTypeCodeWithClass.html), [Replace Type Code with Subclasses](http://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html), [Replace Type Code with State/Strategy](http://refactoring.com/catalog/replaceTypeCodeWithStateStrategy.html), [Replace Subclass with Fields](http://refactoring.com/catalog/replaceTypeCodeWithModuleExtension.html)


## Simplifying Conditional Expressions

Everyone I'm sure has seen a pretty large and nasty conditional trees. This especially gets confusing when you not only find many if/else branches but the conditionals themselves are a mess of data that is hard to make sense of ([Decompose Conditional](http://refactoring.com/catalog/decomposeConditional.html)---simply creating a readable method for those---is an easy answer to that.. a more specific version of [Extract Method](http://refactoring.com/catalog/extractMethod.html)). This section gives some good principles and tips to help shorten and make clearer your conditionals. I particularly liked his idea of grouping and returning edge cases early [Replace Nested Conditional with Guard Clauses](http://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html), and making more use of breaks ([Remove Control Flag](http://refactoring.com/catalog/removeControlFlag.html)).

[Decompose Conditional](http://refactoring.com/catalog/decomposeConditional.html)
[Consolidate Conditional Expression](http://refactoring.com/catalog/consolidateConditionalExpression.html)
[Consolidate Duplicate Conditional Fragments](http://refactoring.com/catalog/consolidateDuplicateConditionalFragments.html)
[Remove Control Flag](http://refactoring.com/catalog/removeControlFlag.html)
[Replace Nested Conditional with Guard Clauses](http://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)
[Replace Conditional with Polymorphism](http://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)
[Introduce Null Object](http://refactoring.com/catalog/introduceNullObject.html)
[Introduce Assertion](http://refactoring.com/catalog/introduceAssertion.html)


## Making Method Calls Simpler

Deciding where things belong one thing, but deciding *how* to interact with it is another. This section deals with making interfaces more simple. Many of these have to do with parameters. One quick principle from this that I enjoyed is to strive to keep methods that have side affects separate from ones that return data ([Separate Query from Modifier](http://refactoring.com/catalog/separateQueryFromModifier.html)). Another useful one was [Introduce Parameter Object](http://refactoring.com/catalog/introduceParameterObject.html) where you create an object for multiple parameters, especially useful when you often see the same parameters passed around. As he advocates, more small methods are better than fewer larger methods. This can be done badly though, with endless and confusing delegation. But the key to avoid this is good naming. Renaming is one of the simplest and most important things you can do (and again, he notes, you won't get this right the first time).

[Rename Method](http://refactoring.com/catalog/renameMethod.html), [Add Parameter](http://refactoring.com/catalog/addParameter.html), [Remove Parameter](http://refactoring.com/catalog/removeParameter.html), [Separate Query from Modifier](http://refactoring.com/catalog/separateQueryFromModifier.html), [Parameterize Method](http://refactoring.com/catalog/parameterizeMethod.html), [Replace Parameter with Explicit Methods](http://refactoring.com/catalog/replaceParameterWithExplicitMethods.html), [Preserve Whole Object](http://refactoring.com/catalog/preserveWholeObject.html), [Replace Parameter with Method](http://refactoring.com/catalog/replaceParameterWithMethod.html), [Introduce Parameter Object](http://refactoring.com/catalog/introduceParameterObject.html), [Remove Setting Method](http://refactoring.com/catalog/removeSettingMethod.html), [Hide Method](http://refactoring.com/catalog/hideMethod.html), [Replace Constructor with Factory Method](http://refactoring.com/catalog/replaceConstructorWithFactoryMethod.html), [Encapsulate Downcast](http://refactoring.com/catalog/encapsulateDowncast.html), [Replace Error Code with Exception](http://refactoring.com/catalog/replaceErrorCodeWithException.html), [Replace Exception with Test](http://refactoring.com/catalog/replaceExceptionWithTest.html)

## Dealing With Generalizations

This section deals with moving things around within an objects hierarchy/inheritance. [Extract Interface](http://refactoring.com/catalog/extractInterface.html) and [Replace Inheritance with Delegation](http://refactoring.com/catalog/replaceInheritanceWithDelegation.html) are a couple of the more interesting and useful ones I found here.

[Pull Up Field](http://refactoring.com/catalog/pullUpField.html), [Pull Up Method](http://refactoring.com/catalog/pullUpMethod.html), [Pull Up Constructor Body](http://refactoring.com/catalog/pullUpConstructorBody.html), [Push Down Method](http://refactoring.com/catalog/pushDownMethod.html), [Push Down Field](http://refactoring.com/catalog/pushDownField.html), [Extract Subclass](http://refactoring.com/catalog/extractSubclass.html), [Extract Superclass](http://refactoring.com/catalog/extractSuperclass.html), [Extract Interface](http://refactoring.com/catalog/extractInterface.html), [Collapse Hierarchy](http://refactoring.com/catalog/collapseHierarchy.html), [Form Template Method](http://refactoring.com/catalog/formTemplateMethod.html), [Replace Inheritance with Delegation](http://refactoring.com/catalog/replaceInheritanceWithDelegation.html), [Replace Delegation with Inheritance](http://refactoring.com/catalog/replaceDelegationWithInheritance.html)


## Is it really that easy?

Kent Beck at the end notes that refactoring is not always as simple as this (they even dedicate a chapter to some common larger refactorings). He has seen refactorings done over months, or even years when things are more messy or complex. Often time there is a transition between where you are and where you want to be, and this can make things complicated, especially when different team members have different ideas of where things should be going. His solution to this is to be adamant about continual improvement, as well as getting everyone oriented around the same goal and aware that things are in transition. You may have an idea of where you want your code to be, and it may seem like a gigantic and daunting rats nest to drudge through before you get there. But there are a lot of small steps you can take now that you'll start seeing immediate benefits from. I've been inspired, since reading this, to be more mindful of ways I can continually do this, and to see refactoring as an easy and safe way to really mold objects into what you want---the design or patterns you are looking for--and to get to, or even explore, where you want to go.


* * *


Some additional refactorings that come from the Ruby refactoring book:

[DynamicMethodDefinition](http://refactoring.com/catalog/dynamicMethodDefinition.html)
[EagerlyInitializedAttribute](http://refactoring.com/catalog/eagerlyInitializedAttribute.html)
[ExtractModule](http://refactoring.com/catalog/extractModule.html)
[ExtractSurroundingMethod](http://refactoring.com/catalog/extractSurroundingMethod.html)
[InlineModule](http://refactoring.com/catalog/inlineModule.html)
[IntroduceClassAnnotation](http://refactoring.com/catalog/introduceClassAnnotation.html)
[IntroduceExpressionBuilder](http://refactoring.com/catalog/introduceExpressionBuilder.html)
[IntroduceGateway](http://refactoring.com/catalog/introduceGateway.html)
[IntroduceNamedParameter](http://refactoring.com/catalog/introduceNamedParameter.html)
[IsolateDynamicReceptor](http://refactoring.com/catalog/isolateDynamicReceptor.html)
[LazilyInitializedAttribute](http://refactoring.com/catalog/lazilyInitializedAttribute.html)
[MoveEvalFromRuntimeToParseTime](http://refactoring.com/catalog/moveEvalFromRuntimeToParseTime.html)
[RecomposeConditional](http://refactoring.com/catalog/recomposeConditional.html)
[RemoveNamedParameter](http://refactoring.com/catalog/removeNamedParameter.html)
[RemoveUnusedDefaultParameter](http://refactoring.com/catalog/removeUnusedDefaultParameter.html)
[ReplaceAbstractSuperclassWithModule](http://refactoring.com/catalog/replaceAbstractSuperclassWithModule.html)
[ReplaceDelegationWithHierarchy](http://refactoring.com/catalog/replaceDelegationWithHierarchy.html)
[ReplaceDynamicReceptorWithDynamicMethodDefinition](http://refactoring.com/catalog/replaceDynamicReceptorWithDynamicMethodDefinition.html)
[ReplaceHashWithObject](http://refactoring.com/catalog/replaceHashWithObject.html)
[ReplaceLoopWithCollectionClosureMethod](http://refactoring.com/catalog/replaceLoopWithCollectionClosureMethod.html)
[ReplaceSubclassWithFields](http://refactoring.com/catalog/replaceSubclassWithFields.html)
[replaceTypeCodeWithPolymorphism](http://refactoring.com/catalog/replaceTypeCodeWithPolymorphism.html)

