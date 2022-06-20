
//setting variables for the images
let poseimg = "pose.jpg";
let walkimg = "walk.jpg";
let golfimg = "golf.jpg";
let donutimg = "donut.jpg";

//array for image variables
const pets = [poseimg,walkimg,golfimg,donutimg]

//vue component declaration
Vue.createApp({
  data() {
    return {
      message: 'This is my dog, Bennie!',
      bennie: 'Bennie',
      pose: poseimg,
      walk: walkimg,
      golf: golfimg,
      donut: donutimg,
      pets,
      messagepose: '',
      messagewalk: '',
      messagegolf: '',
      messagedonut: ''
      
    }
  },

  methods: {
    //displaying message underneath 1st photo
    displayPoseMsg() {
      this.messagepose = "Our Dog, Bennie"
    },

    //removing message when event is triggered
    removePoseMsg() {
      this.messagepose = ''
    },

    //displaying message underneath 2nd photo
    displayWalkMsg() {
      this.messagewalk = "Walking in Walnut Creek, CA with Bennie"
    },

    //changing image to prior when event (hover) is triggered and removing message if clicked
    hoverWalk() {
      this.walk = this.pets[0]
      this.messagewalk = ''
    },

    //switching image back to original
    removeHoverWalk(){
      this.walk = this.pets[1];
    },

    //displaying message underneath 3rd photo
    displayGolfMsg() {
      this.messagegolf = "Took Bennie golfing in Genoa, NV"
    },

    //changing image to prior when event (hover) is triggered and removing message if clicked
    hoverGolf() {
      this.golf = this.pets[1]
      this.messagegolf = ''
    },

    //switching image back to original
    removeHoverGolf(){
      this.golf = this.pets[2];
    },

    //displaying message underneath 4th photo
    displayDonutMsg() {
      this.messagedonut = "Bennie seems to be able to fit just about anywhere"
    },

    //changing image to prior when event (hover) is triggered and removing message if clicked
    hoverDonut() {
      this.donut = this.pets[2]
      this.messagedonut = ''
    },

    //switching image back to original
    removeHoverDonut(){
      this.donut = this.pets[3];
    },
  },
}).mount('#app')