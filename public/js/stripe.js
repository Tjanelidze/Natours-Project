/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const Stripe = require('stripe');

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51OsTuh08u1ffNgOEf4Exvtzp1qEIC8Y0a3PsqXjRcf8bTRZdvpeBCqSrdMPOcH1tTDgcG7cLSOZXKby9VIEWCY3f00HNuv5Zi9',
    );

    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
    );

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
