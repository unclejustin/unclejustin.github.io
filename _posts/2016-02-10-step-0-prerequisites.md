---
layout: post
title:  "Step 0: Prerequisites"
date:   2016-02-10 18:20:00
categories: jekyll
permalink: posts/step-0-prequisites
---

I've been wanting to play with [Jekyll](https://jekyllrb.com/) for a while. What better way than to make a blog and write about building that very same blog.

BLOGCEPTION

## Setting up your environment

Before you can start building Jekyll sites, first you need...Jekyll. Duh right, but before you can get Jekyll you need [Ruby](https://www.ruby-lang.org/en/), and if you're going to use Ruby you should really use [RVM](https://rvm.io/).

So go [install rvm](https://rvm.io/rvm/install) then install ruby `rvm install 2.2.4`

Sweet. Now we can install Jekyll, straight from Jekyll's site:

    $ gem install jekyll
    ~ $ jekyll new my-awesome-site
    ~ $ cd my-awesome-site
    ~/my-awesome-site $ jekyll serve
    # => Now browse to http://localhost:4000

[Nooice](https://www.youtube.com/watch?v=rQnYi3z56RE).

Now before you publish you'll want to make some changes. Cancel serve `ctrl-c` and go edit _config.yml. It should be pretty self explanatory. Once the config file is set you shouldn't need to touch it much. Run `jekyll serve --watch` and got monkey with the site a little bit. It will rebuild your site as you make changes.

Next up is getting [SASS](http://sass-lang.com/) working with this bad boy.
