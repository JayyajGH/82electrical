<template>
  <header class="u-margin-bottom--medium" id="header">
      <a href="#main" class="u-hidden-visually skip__link">Skip to main content</a>

      <div class="topbit__container">
        <div class="topbit">
          <!--<a class="header__text header__email" href="mailto:andrew@82electrical.co.uk">andrew@82electrical.co.uk</a>-->
          <a href="/" class="logo__anchor" title="82Electrical">
              <img src="~/assets/images/logo-horizontal.jpg" class="logo u-padding--small" alt="82Electrical"/>
            </a>
          <!--<a class="header__text header__phone" href="tel:+447813408135" aria-label="Phone us on 0 7 8 1 3. 4 0 8. 1 3 5">07813 408135</a>-->
        </div>
      </div>

      <nav class="site-nav">
        <ul class="site-nav__menu">
          <li class="site-nav__item site-nav__item--home"><a class="site-nav__link body--bold-light" href="/">Home</a></li>
          <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="/projects">Previous work</a></li>
          <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div class="main-image"/>

      
      <!--
      <div class="hero u-margin-bottom--large">
        <h1 class="main-heading">82ELECTRICAL</h1>
        <h2>
          <span>https://www.johnstoneelectricalservicessomerset.co.uk/</span>
          <span>Get svg logo</span>
        </h2>
      </div>
      -->
    </header>
</template>

<style scoped lang="scss">
.topbit__container {
  width: 100%;
  max-width: 1100px;
  background-color: white;
  margin: 0 auto;
}

.topbit {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 150px;
}

.header__text {
  color: black;
  font-size: 20px;
  display: none;

  @media (min-width: 50em) {
    display: block;
  }
}

.main-image {
  background-image: url('~assets/images/masthead-large.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 300px;

  @media (min-width: 50em) {
    min-height: 400px;
  }
}

.site-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: lightgray;
}

.logo__anchor {
 // position: absolute;
}

.logo {
  width: 175px;
  border-radius: 3px;
  background-color: var(--white);

  @media (min-width: 50em) {
    width: 250px;
  }
}

.site-nav__menu {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 1rem;

  @media (min-width: 50em) {
    gap: 3rem;
  }
}

.site-nav__link {
  font-size: 1.3rem;
  transition: 0.3s;
  text-decoration: none;
  color: var(--grey-base);

  @media (min-width: 50em) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--black);
    //border-top: 2px solid var(--black);
    //padding-top: 2px; 
  }

/*
  &:hover:before {
    content: "+";
  }
  */
}

.skip__link:focus {
  position: static;
  width: auto;
  height: auto;
}

.main-heading {
  position: absolute;
  top: 100px;
  color: var(--white);
  font-size: 5rem;
  margin-left: -6px;
}

.hero {
  background-image: url('~assets/images/masthead.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 250px;

  @media (min-width: 93.75em) {
    background-image: url('~assets/images/masthead-large.jpg');
    min-height: 450px;
    background-position-y: 10%;
  }
}
</style>
