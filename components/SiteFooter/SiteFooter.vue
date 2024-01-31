<template>
  <footer class="footer__container" id='contact'>
    <div class="footer wrapper">
      <div class="footer__contact u-margin-bottom--medium">
        <h2 class="heading2 footer__heading">Contact Us</h2>
        <address>
          <ul>
            <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="mailto:andrew@82electrical.co.uk">andrew@82electrical.co.uk</a></li>
            <!-- Add an aria label so the phone number is read out correctly by a screen reader -->
            <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="tel:+447813408135" aria-label="Phone us on 0 7 8 1 3. 4 0 8. 1 3 5">07813 408135</a></li>
            <li class="u-margin-bottom--small"><a class="contact-item__anchor" href="https://goo.gl/maps/w1DEYMjpH37A4bV96" target="_blank" rel="noopener noreferrer">Ambleside Avenue, Bristol BS10</a></li>
          </ul>
        </address>
      </div>
      <div class="footer__social u-margin-bottom--medium">
        <h2 class="heading2 footer__heading">Social</h2>
        <address>
          <ul>
            <li class="social__item"><a href="https://www.facebook.com/ElectricianforBristol" target="_blank" rel="noopener noreferrer" class="social__logo facebook__logo" title="82Electrical onFacebook"></a></li>
           <!-- <li class="social__item"><a href="https://instagram.com/ElectricianforBristol" target="_blank" rel="noopener noreferrer" class="social__logo instagram__logo" title="82Electrical on Instagram"></a></li> -->
          </ul>
        </address>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'SiteFooter'
  }
</script>

<style scoped lang="scss">
  .footer__container {
    background-color: var(--bg-secondary);
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 1rem 2rem 1rem;
    background-color: var(--bg-secondary);
    color: var(--black);

    @media (min-width: 50em) {
      padding: 1rem;
    }
  }

  .footer__heading {
    color: var(--color-primary);
  }

  .footer__contact {
    width: 90%;
    order: -2;

    @media (min-width: 50em) {
      width: 60%;
    }
  }

  .footer__social {
    width: 100%;

    @media (min-width: 50em) {
      width: 35%;
    }
  }

  .backtotop__text {
    display: block;
    position: relative;
    top: 23px;
  }

  .social__item {
    display: inline;
    padding-right: 10px;
  }

  .footer__copyright {
    width: 100%;
    color: var(--color-primary);
    text-align: center;
  }

  .social__logo {
    display: inline-block;
    width: 30px;
    height: 30px;
  }

  .social__logo:hover {
    opacity: 0.7;
  }

  .facebook__logo {
    background: url('~assets/images/facebook-logo.svg');
  }

  .instagram__logo {
    background: url('~assets/images/instagram-logo.svg');
  }

  .contact-item__anchor {
    color: var(--color-primary);
  }

  .contact-item__anchor:hover {
    text-decoration: underline;
  }
</style>
