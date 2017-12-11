# stackilix
### A demo of the working ecosystem Vue.js + Typescript 

This project was written from scratch without any boilerplates/starters etc. Because I love to control everything in my applications and obviously I want to know - what is going on so that's why I prefer to create any system by myself.

Here I have tried to implement Typescript into Vue project without vue-ts-loader because it was very interesting for me (even if it has took a lil bit more time than standard  vue +typescript implementation). 


***This poject is based on these requremets:***

-	Each post should contain a text and votes number.
-	You can add positive vote, negative or dismiss your vote using up and down arrows. 
-	You can add only one positive or one negative vote for the same post.
-	Add possibility to create new post and remove post. 

I have spent a lot of time with architecture and the ecosystem so I haven't used any UI lib like Semantic and I haven't done some unique design because it's not useful here instead I tried to demostrate how I work with such important thing in every app like: styles, code base, architecture, file system, environpment configuration. In large project these things should be handled with very big attention to follow DRY, support and maintainability.

###Features

- Typescript. Only standard ts-loader without vue-ts-loader. + tslint
- Webpack 3. Hot reloading in case of editing vue components + implemented hot reloading for Vuex
- Vuex like a state box
- Integrated test environpment ( Ava + vue-test-utils )
- Different webpack configurations for dev/production/testing
- SASS implementation
- Vue-class-component that allowed us to write Single File COmponent via Typescript + some beauty class-like view
- Development-ready system with possibility to easy scale

### How to start:
clone the project and inside the project folder execute some of these commands to install all dependencies.

`$ npm install ` or `$ yarn` if you use it

####Start development server
`$ npm start` or `$ yarn start`
the project will be available at the: http://localhost:8080/  url

you should see this scene in a terminal:
![](http://i67.tinypic.com/2wd3pu8.png)

If you see it - everything is okay and you can start hacking with Vue.

###Execute production deploy
`$ npm run deploy` or `$ yarn deploy`.

This will create the dist folder into the project root and create compiled files for the production. P.S. it's not 'really' production-ready configuration because there are exists a lot of things thatshould be implementd but for start it's enough.

###Run tests
`$ npm run test` or `$ yarn test`.

I have used the Ava test-runner and vue-test-utils to configure the test environpment and to be sure that's everything fine I wrote a simple smoke test just to check that it works.

**Important notes. **
Sometimes I saw that the vue/vuex/vue-class-component ts definition file can be broken/not found by ts-compiler in case of editing the styles. I have tried to check it quickly but I have found nothing about it. Probably there is some issues with ts-loader and vue definition files but I don't sure because when we start to work with the Vue components - everything is fine.

This interesting thing should be investigated separatedly.
