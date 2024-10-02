
import { redirect } from "react-router-dom";

const changeSchedule=async(scheduleTobeChanged,prompt)=>{
  
    let schedule=await fetch(process.env.REACT_APP_BACKEND_URL+`/make-changes-schedule`, {
      method: 'post',
      body:JSON.stringify({schedule:scheduleTobeChanged,prompt}),
      headers: { "content-type": "application/json" }
    });

    schedule=await schedule.json();
    console.log(schedule);


}


const llm=async(scheduleTobeChanged,prompt)=>{

    console.log(scheduleTobeChanged)
  
    let message=await fetch(process.env.REACT_APP_BACKEND_URL+`/chat-schedule`, {
      method: 'post',
      body:JSON.stringify({schedule:scheduleTobeChanged,prompt}),
      headers: { "content-type": "application/json" }
    });

    message=await message.json();
    console.log(message.message)
    // console.log(schedule);
    return message.message
}

const API = {
  GetChatbotResponse: (message, schedule) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        // if (message && message.includes("modify")) {
        //   console.log(schedule);
        //   changeSchedule(schedule, message);
        //   resolve("Your schedule has been modified");
        // }
        if (message === "hi") resolve("Welcome to Mentormee scheduler chat.\nSome Suggestions:1. Tell tips and tricks to learn __ chapter 2. Tell important topics of __ chapter");
        else {
          const output = llm(schedule,message);
          resolve(output);
        }
      }, 2000);
    });
  }
};


export default API;
