
const mongoose = require("mpngoose");

const calendarSchema = new mongoose.Schem({

    nameOfEvent:{
        type: String ,
        required :true
    },
    startTime :{
        type: String ,
        required :true
    },
    endTime :{
        type: String ,
        required :true
    },
    startAMPM:{
        type: String ,
        required :true 
    },
    endAMPM:{
        type: String ,
        required :true
    },
    day :{
        type:Date ,
        default: Date.now
    }
  
})

