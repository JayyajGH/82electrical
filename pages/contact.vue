<template>
     <div class="wrapper">
        <h2 class="heading1">Contact Us</h2>

        <div class="contact-item">
            <a class="contact-item__anchor contact-email" href="mailto:andrew@82electrical.co.uk">andrew@82electrical.co.uk</a>
        </div>
        <div class="contact-item">
            <a class="contact-item__anchor contact-phone" href="tel:+447813408135" aria-label="Phone us on 0 7 8 1 3. 4 0 8. 1 3 5">07813 408135</a>
        </div>
        <div class="contact-item">
            <a class="contact-item__anchor contact-address" href="https://goo.gl/maps/w1DEYMjpH37A4bV96" target="_blank" rel="noopener noreferrer">Ambleside Avenue, Bristol BS10</a>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d159208.7585560803!2d-2.7831159!3d51.4280972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c8324a225142f6!2s82%20electrical!5e0!3m2!1sen!2suk!4v1663091390378!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style scoped>
    .google-coverage {
        background-image: url('~assets/images/coverage-area.jpg');
        height: 400px;
        background-repeat: no-repeat;
	    background-size: cover;
    }

    .contact-item {
        margin-bottom: 15px;
    }

    .contact-item__anchor {
        color: var(--grey-dark);
        display: flex;
        align-items: center;
    }

    .contact-item__anchor:hover {
        text-decoration: underline;
    }

    .contact-email:before {
        content: '';
        background-image: url('~assets/images/email.svg');
        width: 25px;
        height: 25px;
        display: inline-flex;
        margin-right: 15px;
    }

    .contact-phone:before {
        content: '';
        background-image: url('~assets/images/phone.svg');
        width: 25px;
        height: 25px;
        display: inline-flex;
        margin-right: 15px;
    }

    .contact-address:before {
        content: '';
        background-image: url('~assets/images/address.svg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 25px;
        height: 25px;
        display: inline-flex;
        margin-right: 15px;
    }

</style>