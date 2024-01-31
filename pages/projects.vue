 <template>
    <div class="wrapper">
        <h2 class="heading1">Previous work</h2>
		<div class="work__container">
			<button v-for="(workItem, workIndex) in previousWork"
				:key="workIndex"
				class="work__item"
				@click="index = workIndex">

				<!-- Todo: Add real alt text -->
				<img :src="workItem.url" class="gallery__image" alt="" />
				<!--
				<picture>
					<img :src="workItem.url" class="gallery__image" />
				</picture>
				-->
				<span class="work-item__description">{{workItem.description}}</span>

			</button>
			
			<LightGallery
				:images="previousWork"
				:index="index"
				:disable-scroll="false"
				@close="index = null"/>
		</div>
    </div>
 </template>

<script>
	export default {
	  data: () => ({
		previousWork: [
		  { title: "Fault find",
		    url: require("~/assets/images/faultfind_1.jpg"),
			description: 'This fault was found after the customer called to say his RCD had been tripping at certain times of day. After opening up the consumer unit it was clear that the cable supplying his hot water cylinder and not been secured in the circuit breaker correctly when it was installed causing it to overheat and melt into nearby circuits.'
		  },
		  { title: "Fuse box",
		    url: require("~/assets/images/image1.jpg"),
			description: 'Modern fuse boxes contain lots of safety features that not only improve the safety in your home limiting the chance of an electrical fire or shocks but can also help protect expensive electrical equipment from both minor and major electrical surges. Look out for metal enclosures, RCBOs, SPDs (all now fitted as standard) and more recently Arc fault detection on any quote that you get.'
		  },
		  { title: "New kitchen",
		    url: require("~/assets/images/newkitchen_1.jpg"),
			description: 'If you are spending all that money on a new kitchen don\'t forget to get an electrician to thoroughly check the electrical system, those cables often can\'t be replaced without damaging the brand new tiles or freshly painted walls.'
		  },
		  { title: "Always testing cicuits",
		    url: require("~/assets/images/testing-circuits.jpg"),
			description: 'Always testing circuits following installation or modification with specially calibrated test equipment.'
		  },
		  { title: "Garden steps",
		    url: require("~/assets/images/garden-steps.jpg"),
			description: 'The customer here wanted to illuminate her new garden steps, so we put in aluminium channels with waterproof 12v led strip, so light would spill out of each top slab.'
		  },
		  { title: "Brick lights",
		    url: require("~/assets/images/brick-lights.jpg"),
			description: 'Installed these bricklights so they blend into a new garden wall and help the customer to see where his steps are.'
		  },
		  { title: "Large or small jobs",
		    url: require("~/assets/images/large-or-small.jpg"),
			description: 'As happy doing the little jobs like installing outdoor sockets, swapping lights or changing bathroom fans as I am the big jobs.'
		  },
		  { title: "Stylish internal lighting",
		    url: require("~/assets/images/stylish-lighting.jpg"),
			description: 'Stylish interior lighting is not so difficult to achieve. This install was a late addition and cables were put in after plastering, channels were filled by us and finished off to perfection by the decorator.'
		  },
		  { title: "Smart lighting and speakers",
		    url: require("~/assets/images/smart-lighting-and-sound.jpg"),
			description: 'Rewire of this kitchen included Phillips Hue lighting and Sonos speakers throughout. A stunning custom built kitchen with all isolators neatly concealed in cupboards.'
		  }
		],
		index: null,
	  })
	};
	</script>
	
 <style scoped lang="scss">
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

	.work__container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-bottom: 20px;
		justify-content: center;

		@media (min-width: 50em) {
			justify-content: normal;
		}
	}

	.work__item {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 10px;
		border: none;
		background-color: var(--bg-secondary);
		color: var(--color-primary);

		&:hover {
			background-color: var(--bg-tertiary);
		}

		@media (min-width: 35em) {
			width: 375px;
		}
	}

	.work-item__description {
		padding: 10px;
		line-height: 1.3;
	}

	.gallery__image {
		width: 100%;
		height: 300px;
	}
 </style>