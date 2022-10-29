/**
 * practice-1
 * 1: load comments and display comments on the url
 * 2: display 20 comments only
 * 3: add a click handler on the comments
 * 4: if you clikc on the comment, it will open the relevent post
 *    use post id dynamitically
 */

/**
 * practice 2
 * 1: load data for a random user
 * 2: display image
 * 3: city,street
 */

/**
 * practice-3
 * 1: practice mealdb again
 */

/**
 * practice-4
 * 1: explore sportsdb
 * 2: display something
 * 3: dynamic api url
 * 4: add handler to display something by loading data
 */

/**
 * practice-5
 * 1: explore network tab
 * 2: display preview
 */

 const dreamGirl = [
    {
      sokina: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [{ name: "rofik" }, undefined],
            },
          },
          { instagram: "https://www.instagram.com/" },
        ],
      },
    },
  ];
console.log(dreamGirl[0].sokina.contactInfo[1].instagram)

const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);
console.log(Object.keys(obj).length)


const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);


const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 