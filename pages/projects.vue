 <<template>
    <div class="wrapper">
        <h2 class="heading">Recent Projects</h2>
        <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="about">
                <div class="image-text__image image--brendan"></div>
                <div class="image-text__text u-padding--small">
                    <h2 class="heading2 heading--light">About</h2>
                    <p class="u-margin-bottom--medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                </div>
            </section>

            <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="about">
                <div class="image-text__text u-padding--small">
                    <h2 class="heading2 heading--light">About</h2>
                    <p class="u-margin-bottom--medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                </div>
                <div class="image-text__image image--brendan"></div>
            </section>

            <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="about">
                <div class="image-text__image image--brendan"></div>
                <div class="image-text__text u-padding--small">
                    <h2 class="heading2 heading--light">About</h2>
                     <p class="u-margin-bottom--medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                </div>
            </section>

            <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="about">
                <div class="image-text__text u-padding--small">
                    <h2 class="heading2 heading--light">About</h2>
                     <p class="u-margin-bottom--medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                </div>
                 <div class="image-text__image image--brendan"></div>
            </section>
        </div>
 </template>

 <style scoped lang="scss">

	 .heading {
	    font-size: 40px;
	 }

	.wrapper--small {
	  padding-left: 10px;
	  padding-right: 10px;
	  margin: 0 auto;
	}

	@media (min-width: 50em) {
	  .wrapper--small {
			max-width: 600px;
	    padding-left: 0;
	    padding-right: 0;
	  }
	}

	.heading__item {
	  padding-left: 0;
	  padding-right: 0;
	}

	@media (min-width: 50em) {
		.heading__item {
		  padding-left: 1rem;
		  padding-right: 1rem;
		}
	}

	.heading__spacer {
	  vertical-align: text-top;
	}

	.heading__main {
		display: block;
	}

	.heading__subheading {
		display: block;
	}

	.image-text__panel {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	}

	.image-text__panel--dark {
	  background-color: lightgray;
	  color: var(--black);
	}

	.image-text__text {
	  width: 100%;
	}

	@media (min-width: 50em) {
	  .image-text__text {
	    width: 50%;
	  }
	}

	.image-text__image {
		width: 100%;
	}

	@media (min-width: 50em) {
		.image-text__image {
			width: 50%;
		}
	}

	.image--brendan {
	  background-image: url('~assets/images/image1.jpg');
	  background-repeat: no-repeat;
	  background-size: cover;
	  height: 400px;
	}

	.image--tasting {
	  display: none;
	}

	@media (min-width: 50em) {
	  .image--tasting {
	    background-image: url('~assets/images/image1.jpg');
	    background-repeat: no-repeat;
	    background-size: cover;
	    height: 400px;
	    display: block;
	  }
	}

	.image--taps {
	  display: none;
	}

	@media (min-width: 50em) {
	  .image--taps {
	    background-image: url('~assets/images/image1.jpg');
	    background-repeat: no-repeat;
	    background-size: cover;
	    height: 400px;
	    display: block;
	  }
	}
 </style>