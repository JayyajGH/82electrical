<template>
  <header class="u-margin-bottom--medium" id="header">
      <a href="#main" class="u-hidden-visually skip__link">Skip to main content</a>

      <div class="hero__container">
        <div class="hero">
          <a href="/" title="82Electrical">
              <img src="~/assets/images/logo-horizontal.jpg" class="logo u-padding--small" alt="82Electrical"/>
            </a>
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
    </header>
</template>

<style scoped lang="scss">
.hero__container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.hero {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  gap: 150px;
}

.main-image {
  background-image: url('~assets/images/masthead.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 300px;

  @media (min-width: 50em) {
    min-height: 400px;
    background-image: url('~assets/images/masthead-large.jpg');
  }

  @media (prefers-color-scheme: dark) {
    filter: brightness(.8) contrast(1.2);
  }
}

.site-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: var(--bg-secondary);
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
  color: var(--color);

  @media (min-width: 50em) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--black);
  }
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
</style>
