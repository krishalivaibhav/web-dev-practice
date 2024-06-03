import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
 res.send("<h1>hello world!❤️</h1>")
})
app.get("/about", (req, res) =>{
    res.send("<h2>ABOUT ME</h2><h1><p>My name is Vaibhav Krishali. I am 20 years old and currently pursuing a Bachelor of Technology in Computer Science and Engineering at Manipal University Jaipur. My academic and professional interests include web development, digital marketing, and game development. Through my studies and personal projects, I am continuously enhancing my skills in these areas and looking forward to contributing to innovative and impactful projects.</p></h1>")
})
app.get("/", (req, res) => {
    res.send("<h1>hello world!❤️</h1>")
   })

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})