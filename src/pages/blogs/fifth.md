---
path: "/module-federation-webpack-5"
date: "2022-02-08"
title: "Module Federation - Sharing is caring"
tags: ['webpack','webpack5', 'module federation','micro frontend']
description: "Module federation for the GENZ javascript developers"
---

Hey there, I am back with another tech blog on module federation.

***Talking about module federation, it is ideal for developing one or more applications with multiple teams. See that means good communication, bonding and sharing. And we know how beautiful is sharing in all terms even when it comes to coding and sharing some spectacular components, functions, utilities etc.***

  

**The problem:**

So let's start with a very basic example of a header component, which needs to be shared across two projects.

We do have solutions but that involves a lot of complex techniques like rolling out several shared dependency updates when it comes to releases. Also, there is code duplication which I hate a lot personally. 'WORA' - I follow this Write once read anywhere.

***These solutions are a nightmare as they overall decrease the web and the build performance.***

***We are programmers we do not want a lot of manual labour we do not want to write duplicate code. What do we want - We want to establish a federation. We want a solution for shared dependencies that will enhance the web and build performance.***

  

Here comes the solution TADA

![i am worthy](https://static2.srcdn.com/wordpress/wp-content/uploads/2019/05/captain-america-mjolnir.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5)

## **Module Federation - I am worthy (want to know why)**

- scalable
- convenient
- feasable
- profitable
- super dynamic
- open source

## **What is Module Federation?**


- import code from others' build, that too at runtime
- share vendor code dynamically at runtime
- lean code directly from a separate build
- super qualified for all javascript environments - node, electron, browser
- deploy an independent application without needing to redeploy consumers
- no redundancy at all
- great web and build performance overall great pleasure to the user

Most importantly, [Module Federation](https://webpack.js.org/concepts/module-federation/), is a feature of webpack 5 which is a well-established static module bundler for modern JavaScript applications. **Module federation allows multiple webpack builds to work together.** One application can dynamically run code from another bundle or build, on the client and the server. This is the foundation of [micro frontends](https://micro-frontends.org/).

**Let us dive deeper**

Let's discover the terminologies and get acquainted with them before we proceed further with our example app.

**The host : *A webpack build that is initialized first during a page load.***

**A remote: *another webpack build where part of it is being consumed by a "host*"**

**Bidirectional host: *A webpack build that can work both as a remote and a host. Either as a consumer or as a host***

**Omnidirectional hosts : *A webpack build that acts as a remote and a host at once***

# Module Federation

  

# How to use

  


Open [example link](https://stackblitz.com/edit/github-xhp1da-bmfg3q?file=app2/webpack.config.js&terminal=start&terminal=) in your browser.

You will see there are two apps, **app1 and app2** 
Both of them run on two different ports
Here **app1 is the consumer** and  **app2 is the host**. App2 is trying to expose the App component and the loggerUtil to app1.



  If you see the plugins configuration in the **webpack config for app2** you will see this and this is how you host

## **How to host**

  

    new  ModuleFederationPlugin({
    name:  'app2',
    filename:  'remoteEntry.js',
    exposes: {
    './App':  './src/App',
    './logger':  './src/LoggerUtil',
    },
    shared: { react: { singleton:  true }, 'react-dom': { singleton:  true } },
    }), 

**Here you will be seeing the file name which is the place where these modules are hosted. In this case, it is remoteEntry.js. Also here we have exposed App and the loggerUtil. If you open the remote entry file you will see the app and the logger util in its module app.**

## **How to consume**

Similar to the host in the plugin in the **webpack config for app1** which is the consumer you need to add this

    new  ModuleFederationPlugin({
    name:  "app1",
    remotes: {
    app2:  "app2@[app2Url]/remoteEntry.js",
    },
    shared: {react: {singleton:  true}, "react-dom": {singleton:  true}},
    }),

**Here you can see the path of the remoteEntry.js maps to the app2 because that is the place where the module maps of App2 and LoggerUtil are present.**

## How to import the exposed module in your component

        import  React, { Suspense, useEffect } from  'react';
        const  RemoteApp = React.lazy(() =>  import('app2/App'));
        import  *  as  logger  from  'app2/logger';
        
        const  App = () => {
        useEffect(() => {
        // this is being used from app2
        logger.logStatus('loaded');
        }, []);
        return (
        
        <div>this is App1 
        this is app2 inside app1
        <div>
        <Suspense fallback={...loading}><RemoteApp/></Suspense>
        </div>
        </div>
        );
        };
    
        export  default  App;
**Look at the import statement as the remoteEntry was mapped to app2 in the config we import it from there under the respective module map for example logger from "app2/loggerUtil" and app from "app2/App";**

Well, that's a great start though on module federation. We have begun to establish it.

Some reference links:

- https://webpack.js.org/concepts/module-federation/
- https://github.com/module-federation/module-federation-examples

**Happy coding friends !**

