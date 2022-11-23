# Code Assignment

## Intro

This assignment will be used as a discussion during a technical interview.
Time constraints are part of software development and even though we don’t expect a perfect solution, imagine your code to be on its way to production.
If you have to make compromises, provide a README to briefly explain pros and cons of your approach, what considerations you would make for another iteration and in general what your
future colleagues might be interested in if they had to pick up your code.
The primary values for the code we look for are: simplicity, readability, maintainability, testability. It should be easy to scan the code, and rather quickly understand what it’s doing. Pay attention to naming.

The assignment should be done in NodeJS (you may choose between Javascript and Typescript) or Go.
Put the code in private GitHub repository and when you are done invite following GitHub usernames:

- micaelcarlstedt
- amirbadnjevic

## The Task

The assignment is to implement warehouse REST API. This API should hold articles, and the articles should contain an identification number, a name and available stock. It should be possible to load articles into the software from a file (preferably during start-up of API), see the attached inventory.json.
The warehouse software should also have products, products are made of different articles. Products should have a name, price and a list of articles of which they are made from with a quantity. The products should also be loaded from a file, see the attached products.json.

The warehouse should have at least the following functionality;

- Get all products and quantity of each that is an available with the current inventory
- Remove(Sell) a product and update the inventory accordingly
