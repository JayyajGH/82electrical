<template>
  <main class="wrapper">
    <section class="sectionpart">
      <h2 class="heading">About us</h2>
      <div class="text-stuff">
        <p>Offering domestic electrical services for Bristol and surrounding areas. From it’s beginnings
in 2017 we have focused on delivering high quality, long lasting electrical installations both
on the surface and underneath. Designing, installing and fault finding most aspects of
electrical systems in the home. Always using products that are well tested to be long lasting
and efficient.
</p>
        <p>We try to keep things as simple as possible for our clients and always endeavour to be willing
to help in any way we can. Building systems that are future-proof and are designed around
our clients&#39; long term needs as well as their short term ones. We take pride in providing safe
and reliable installations that are well suited for their intended purpose and are always happy
to help find solutions should any problems arise.</p>
        <p>Hopefully this gives you some idea of our ethos as a company so please feel free to get in
touch via our &quot;contact us&quot; section if you have any specific queries and we will be happy to
answer them if we can.</p>
<p>Many thanks for stopping by and we look forward to hearing from you soon.</p>
      </div>
    </section>
    <section class="sectionpart">
      <h2 class="heading">What we do</h2>
      <ul class="items">
        <li class="item">
          <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2 class="sub-heading">Rewires</h2>
          <p>Whether an installation has reached the end of its life of is no longer fit for purpose a full rewire is sometimes necessary and we can help</p>
        </li>
        <li class="item">
          <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2 class="sub-heading">Fault finding</h2>
          <p>Faults are a pain, so call us and we can start by giving advice over the phone, but if needed can often be there the same day to find a solution</p>
        </li>
        <li class="item">
           <img src="~/assets/images/bulb.svg" class="item__image"/>
          <h2 class="sub-heading">Lighting</h2>
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
    },
})
</script>

<style scoped lang='scss'>
  .text-stuff {
    text-align: center;
  }

  .heading {
    text-align: center;
    font-size: 30px;

    &:before {
      content: url('~/assets/images/bolt.svg');
      padding-right: 10px;
    }

    @media (min-width: 50em) {
      font-size: 40px;
    }
  }

  .sub-heading {
    font-size: 20px;
  }

  .items {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @media (min-width: 50em) {
      flex-direction: row;
    }
  }

  .item {
    width: 200px;
    text-align: center;
  }

  .item__image {
    width: 75px;

    @media (min-width: 50em) {
      width: 100px;
    }
  }

  .sectionpart {
    margin-bottom: 40px;
  }
</style>
