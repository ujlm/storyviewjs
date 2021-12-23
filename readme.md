# Story View JS
![storyviewjs logo](https://ibb.co/bsZBS90)  
A simple solution to integrate a story-style image gallery to your blog article.
Users can switch between the full article and the shorter, more visual story view.

## Version
Currently in bèta
Working on more efficient image loading and content injector (easier setup).

# Dependencies
Include the stylesheet in your head
```html
<link rel="stylesheet" type="text/css" href="storyview.css" />
<!-- Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

Include the script in your html before closing body tag + create an array with the image locations
```html
<script type="text/javascript">
var imgMatrix = [
    [
        "./assets/stats_story/1.png",
        "./assets/stats_story/2.png",
        "./assets/stats_story/3.png",
        "./assets/stats_story/4.png",
        "./assets/stats_story/5.png",
        "./assets/stats_story/6.png"
    ]
]
</script>
<script type="text/javascript" src="./[PATH_TO]/storyview.js"></script>
```

# Usage
```html
<nav class="storyview__switch">
                <a href="#" class="sv__toggle sv__toggle_av">Article view</a>
                <a href="#" class="sv__toggle sv__toggle_sv">story view</a>
                <div class="sv__animation sv__start-av"></div>
            </nav>
            <section class="storyview__container nodisp">
                <div class="storyview__gallery sv__hidden">
                    <div class="sv__item" id="sv__item-0" style="background-image: url('FIRST_IMAGE_URL');" sv-current-img="0">
                        <div class="storyview__wrapper flex-nowrap">
                            <span class="storyview__indicator sv__indicator-active"></span>
                            <span class="storyview__indicator"></span>
                            <span class="storyview__indicator"></span>
                            <span class="storyview__indicator"></span>
                            <span class="storyview__indicator"></span>
                            <span class="storyview__indicator"></span>
                        </div>

                        <div class="sv__broad-click sv__broad-click-prev"></div>
                        <div class="sv__broad-click sv__broad-click-next"></div>
                        <button class="sv__nav-btn sv__btn-prev">
                            <span class="fa fa-angle-left" aria-hidden="true"></span>
                        </button>
                        <button class="sv__nav-btn sv__btn-next">
                            <span class="fa fa-angle-right" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </section>

            <section class="otherview__container">
                <h1>This is the full article</h1>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </section>
```
# Examples
Clone the repo and run index.html for an example.