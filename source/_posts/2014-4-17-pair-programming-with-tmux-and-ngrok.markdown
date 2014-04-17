---
layout: post
title: SSH pairing tunnels with Tmux and ngrok
date: 2014-04-17 11:30:00
---

My team has been playing with the idea of remote programming and what that
would look like, especially for longer periods of time (e.g. remoting from
Germany for a month or two =). In the office, we don't often pair
program unless we need some feedback or want to check out each other's code.
Despite not paring very often, I thought I'd look into some options in case the 
time came.

Now, you could use something like Join.me and screen share. But (1) that's just
not very cool. And (2) It can be slow and glitchy. Our entire team uses VIM now,
so I thought I'd try out session sharing with something like tmux. After
installing a couple items you can get up and running in no time, sharing a
terminal window at lightning speed. Here was my process to get this up and
running (I'm using OSX here).


1. Install Tmux
===============

Tmux allows you to manage multiple terminal windows into one, almost like using
vim splits. You can also share sessions with it, which is what I'll be using it
for.

```
$ brew install tmux
```

2. Authorize users with github
==============================

You'll need to allow users to ssh into your machine. Instead of giving them my
password or creating a user for them, I'm going to use their ssh key. You
can set it up manually, or for Github users there's a nifty gem for that.
Github apparently stores all the public keys you add to it... publically
(github.com/username.keys). The [gh-auth gem](https://github.com/chrishunt/github-auth).
makes use of this so we can add and remove user keys super easily.

```
$ gem install github-auth
```

Auth a user to your machine and set them up to automatically join your tmux
session when they login, which we'll name "pairing."

```
$ gh-auth add --users="username" --command="$(which tmux) attach -s pairing"
```

BTW to view and remove users you can simply run:

```
$ gh-auth list
$ gh-auth remove --users=username
```

This will give them access to your normal user, you could create a new user
with different privileges. I'm simply creating an
[alias](http://osxdaily.com/2011/05/22/setup-user-name-alias-mac/) for my user,
with the username tmux.

3. Ngrok
--------

Unless you want to setup a server for this and put your code up there, SSHing
into your localhost can be a bit tricky. [Ngrok](https://ngrok.com/) is a
nifty, open source project (see [ngrok on gihub](https://github.com/inconshreveable/ngrok))
that basically acts as a proxy to your machine. You can install it on a
server yourself, or use ngrok.com.

To use ngrok.com's service, all you have to do is, after downloading it, run
this first line:

```
$ ./ngrok -proto=tcp 22

ngrok                                              (Ctrl+C to quit)
Tunnel Status                 online
Version                       1.6/1.5
Forwarding                    tcp://ngrok.com:35437 -> 127.0.0.1:22
Web Interface                 127.0.0.1:4040
# Conn                        0
Avg Conn Time                 0.00ms

```

That'll work for SSHing, and It'll give you a random port to connect to. Also,
if for instance you had a rails server running on port 3000, you could expose
it with ngrok and get a random subdomain on ngrok.com to connect to by running: 

```
$ ./ngrok 3000

ngrok                                                      (Ctrl+C to quit)
Tunnel Status                 online
Version                       1.6/1.5
Forwarding                    http://3117bccc.ngrok.com -> 127.0.0.1:3000
Forwarding                    https://3117bccc.ngrok.com -> 127.0.0.1:3000
Web Interface                 127.0.0.1:4040
# Conn                        0
Avg Conn Time                 0.00ms
```

**Note:** I've seen a number of people talk about and use ngrok.com. Ultimately
who knows what happens on his server, or his executable! Seeing that he has a 
number of largely followed projects, I've seen a number of big companies mention
it, and all I'm really sending is bits of encrypted code back and forth, I'm
going to trust him... for now.

4. Pair
-------

Now, to set it all up, after starting ngrok, start your tmux session

```
$ tmux new -s pairing
```

And then simply have your friend connect via ssh to the ngrok server and port
number ngrok gave you.

```
ssh youruser@ngrok.com -p 12345
```

and viol&agrave;!

You can kill the tmux session with **tmux kill-server**, shut
down ngrok with ctrl+c, and then remove the user's keys with gh-auth . Just
make sure you trust the person on the other end... and re-iterate to your
co-workers NOT to goof around and type something stupid...   ever.

There's also [wemux](https://github.com/zolrath/wemux) which you can setup
read-only modes and has a few other nifty features. I may try to setup another
user with restricted access.

c.f.

 * [https://coderwall.com/p/pcrr4w](https://coderwall.com/p/pcrr4w),
 * [http://iamvery.com/2013/11/16/tmux-pairing-anywhere-on-your-box.html](http://iamvery.com/2013/11/16/tmux-pairing-anywhere-on-your-box.html)


**PS Note on vim colors:** I had some troubles with getting colors to work with tmux. 
You have to make sure tmux is using 256 colors. I have a bash alias for this:

```
# vim colors in tmux. c.f. http://stackoverflow.com/questions/10158508/lose-vim-colorscheme-in-tmux-mode
alias tmux="TERM=screen-256color-bce tmux"                                      
```

And then in ~/.tmux.conf

```
set -g default-terminal "xterm-256color"
```
