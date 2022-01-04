---
path: "/comments-the-life-saviour"
date: "2021-12-26"
title: "Code also has emotions. Lets comment only when required."
tags: ['gatsby', 'blog', 'javascript', 'typescript', 'bestPractices', 'comments']
description: "Commenting a code only when required."
---





> **Writing comments to a code is a very good practice but it can be avoided at times when it is actually not required.
> A good code is always self explanatory.**

  

![image](https://user-images.githubusercontent.com/12448024/148037810-2e15b708-5432-4511-8290-3a6cc10a9179.png)

  
  

I am actually very afraid when it comes to fix some some bug in a code which is not written by me. It becomes very difficult for me to understand the piece of code because obviously its not written by me. 

![No Comment */ : r/ProgrammerHumor](https://i.redd.it/tu47buf68lt11.jpg)
But few days back I came across a code base where the code was very readable and I was able to fix the bug very quickly. The code was quite admirable. Very less comments but the code was self explanatory Coding is a beautiful thing if you see. Being a developer means we have to read code , write code or make changes in an existing code. If we do not understand a code it becomes very uneasy as it decreases our effectiveness and productivity. Lets make some rituals while you read this post and follow it for the best reults.

Talking about my experience the worst thing I have experienced is code that is commented out. I mean why do we want to comment out code instead of removing it?

We all use version control for our code to track the changes or the edits thats are made. Still we comment the code instead of removing it. **Lets trust on the version control and make our code look as clean as possible.**

Imagine a code like this :

    if( sunRisen) {
    // washClothes();
    // dryClothes();
    // wrapClothers();
    manageClothes();
    } else {
    donothing();
    }
Why we need the commented code when it is of no use. It is just wastage of line and code size. 
**

## Ritual 1:
 ***Lets make a ritual to delete the code not required and not comment it before commiting our code.***

    if( sunRisen) {
    manageClothes();
    } else {
    donothing();
    }
This looks much better.


## Ritual 2:
 **Lets make a ritual to add prefix `//FIXME or //TODO` to our comment so that it is taken special care of.**

There are some times where we have to annotate a problem or annotate a solution. Side by side it is great if a ticket is created for these as well.

    createBreakfast(config) {
    // TODO: need to pass an optional param for type of salt (white or pink)
    const foodPrepared = return startCooking(config);
    return foodPrepared;
    }

**

## Ritual 3

**Lets make a ritual to not write comment for code if code is already undestandable.**

![Code comments be like : r/ProgrammerHumor](https://preview.redd.it/iuy9fxt300811.png?auto=webp&s=156f5ffebbea5b30189eb36012e5bc7e3369c381)
 

    // to check if warning modal should be shown or not
    shouldShowWarningModal(){
    return !this.isModalSeen && !this.isValidUser;
    }
 
 *The comment here is useless because the function name itself is self explanatory.*
 **Self documented and self explained code is magic. Choose the functions name and variables name wisely.**
 
![The Value of Code Documentation](https://user-images.githubusercontent.com/5914687/34965265-a6b6f904-fa07-11e7-92ff-22729040dd0a.png)

**

## Ritual 4:

 **Lets make a ritual to explain our code only when required and that too possible in the least number of words.**
 Note: Start a comment with a whitespace to make it more readable.
 https://eslint.org/docs/rules/spaced-comment

    function getName() {
      // set the default name to 'no name'
      const name = this.name || 'no name';
      return name;
    }
**

## Ritual 5:

**Lets make a ritual to follow the standard practise so that one day when someone read our code they understand it easily.**
It is always easy to point mistakes in other peoples code but it is very difficult to follow the good practices.

![People who look at your code and calls % = * it messy The same people when  writing their own code - ) | Programmer humor, Writing memes, Computer humor](https://i.pinimg.com/736x/4d/01/e3/4d01e395b7de0561f3847c26d4a93b0a.jpg)


Ending on a positive note as it is a personal choice to write or not write comments. **My motive was to say that code also has emotions and feelings. Lets help the code to potray it and not always comment on it.** :)
