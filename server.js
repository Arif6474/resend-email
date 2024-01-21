import express from "express";
import dotenv from "dotenv";

import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT;

const resend = new Resend(process.env.RESEND);

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["arifulislam64743@gmail.com", "arifulislams063@gmail.com"],
    subject: "Hello World",
    html: `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
</head>

<body style="width: 100%; height: 100%; background: #f2f2f2; margin: 0; overflow-x: hidden; font-size: 16px;">
    <div
        style="min-width: 300px; max-width: 500px; margin-top: 20px; margin-bottom: 20px; margin-left: auto; margin-right: auto; background: #333; border:0;">
        <div style="width: 100%; height: 10px; background-color:#D9E021;"></div>
        <div style="width: 100%; height: 122px;"></div>
        <div style="width: 216px; margin: 0 auto;">
            <img src="https://emeraldrestaurants.sgp1.cdn.digitaloceanspaces.com/Emerald%20logo.png" alt="EmeraldRestaurants"
                style="width: 230px; height: 45px">
        </div>
        <div style="width: 100%; height: 40px;"></div>
        <div style="width: 100%;">
            <h1
                style="font-family:Arial, Helvetica, sans-serif; font-size: 17px; line-height: 30px; color: #fff; margin: 0; text-align: center;">
                Your journey to join Emerald Restaurants starts here. 
            </h1>
        </div>
        <div style="width: 100%; height: 25px;"></div>
        <div style="width: 82%; margin-left: auto; margin-right: auto;">
            <h3
                style="width: 100%; font-family:Arial, Helvetica, sans-serif; font-weight: 500; font-size: 16px; line-height: 24px; color: #e6e6e6; margin: 0; text-align: center;">
                Click on this link to reset your password. This link will be valid for next 2 hours.
            </h3>
        </div>
        
        <div style="width: 100%; height: 30px;"></div>
        <div style="width: 138px; height: 49px; background-color: #D9E021; border-radius: 12px; margin: 0 auto;">
            <a href=""
                style="display: block; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-size: 18px; line-height: 26px; color: #333333; width: 100%; text-align: center; padding-top: 10.5px; text-decoration: none;">
                Verify Email
            </a>
        </div>
        <div style="width: 100%; height: 132px;"></div>
    </div>
</body>

</html>
        `
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
