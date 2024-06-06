import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) =>{
    const today = new Date()
    const day = today.getDay()
   
    let type = "a weekday"
    let adv = "it is time to work hard"
    if(day ===0 || day ===6){
        type = "The weekend"
        adv = "it is time to relax"
    }
    res.render("index.ejs", {
       
        dayType: type,
        advice: adv,
        
    } )
})
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  