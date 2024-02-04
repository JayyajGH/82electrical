<template>
  <main class="wrapper">
    <section class="u-margin-bottom--large">
      <h2 class="section__heading heading1">About us</h2>
      <div class="text-stuff">
        <p>Offering domestic electrical services for Bristol and surrounding areas. From it's beginnings
in 2017 we have focused on delivering high quality, long lasting electrical installations both
on the surface and underneath. Designing, installing and fault finding most aspects of
electrical systems in the home. Always using products that are well tested to be long lasting
and efficient.</p>
        <p>We try to keep things as simple as possible for our clients and always endeavour to be willing
to help in any way we can. Building systems that are future-proof and are designed around
our clients' long term needs as well as their short term ones. We take pride in providing safe
and reliable installations that are well suited for their intended purpose and are always happy
to help find solutions should any problems arise.</p>
        <p>Hopefully this gives you some idea of our ethos as a company so please feel free to get in
touch via our "contact us" section if you have any specific queries and we will be happy to
answer them if we can.</p>
        <p>Many thanks for stopping by and we look forward to hearing from you soon.</p>
      </div>
    </section>
    <section class="u-margin-bottom--large">
      <h2 class="section__heading heading1">What we do</h2>
      <ul class="whatwedo__list">
        <li class="whatwedo__item">
          <img src="~/assets/images/bulb.svg" class="whatwedo__image" alt=""/>
          <h2 class="heading3">Rewires</h2>
          <p>Whether an installation has reached the end of its life of is no longer fit for purpose a full rewire is sometimes necessary and we can help</p>
        </li>
        <li class="whatwedo__item">
          <img src="~/assets/images/bulb.svg" class="whatwedo__image" alt=""/>
          <h2 class="heading3">Fault finding</h2>
          <p>Faults are a pain, so call us and we can start by giving advice over the phone, but if needed can often be there the same day to find a solution</p>
        </li>
        <li class="whatwedo__item">
           <img src="~/assets/images/bulb.svg" class="whatwedo__image" alt=""/>
          <h2 class="heading3">Lighting</h2>
          <p>Superb lighting installations, indoors and out</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  		data() {
        return {
            structuredData: {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "82Electical",
              "description": "82 electrical is here to supply domestic and light commercial electrical services to Bristol and the surrounding areas",
							"image": "https://82electrical.co.uk/apple-touch-icon.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Southmead",
                "addressRegion": "Bristol",
                "addressCountry": "GB",
                "postalCode": "BS10"
              },
							"openingHoursSpecification": [
							  {
							    "@type": "OpeningHoursSpecification",
							    "dayOfWeek": [
                    "Monday",
							      "Tuesday",
							      "Wednesday",
							      "Thursday",
                    "Friday",
							      "Saturday"
							    ],
							    "opens": "08:00",
							    "closes": "18:00"
							  },
								{
							    "@type": "OpeningHoursSpecification",
							    "dayOfWeek": [
							      "Sunday"
							    ],
							    "opens": "10:00",
							    "closes": "13:00"
							  }
							],
              "telephone": "+4407813408135",
							"email":"mailto:andrew@82electical.co.uk",
              "url": "https://82electical.co.uk",
              "sameAs": [
                "https://facebook.com/ElectricanForBristol",
                "https://instagram.com/ElectricianForBristol" ]
            }
        }
    }
})
</script>

<style scoped lang='scss'>
  .text-stuff {
    text-align: center;
  }

  .section__heading {
    text-align: center;

    &:before {
      content: url('~/assets/images/bolt.svg');
      padding-right: 10px;
    }
  }

  .whatwedo__list {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @media (min-width: 50em) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .whatwedo__item {
    width: 200px;
    text-align: center;
  }

  .whatwedo__image {
    width: 75px;

    @media (min-width: 50em) {
      width: 100px;
    }

    @media (prefers-color-scheme: dark) {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(142deg) brightness(106%) contrast(105%);
    }
  }
</style>
