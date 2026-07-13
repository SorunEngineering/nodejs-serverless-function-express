// Email client configuration
import { Resend } from 'resend';

// merged: prefer env-based client, retain legacy key as fallback
const resendClient = new Resend(process.env.RESEND_API_KEY);
const resendClientLegacy = new Resend('re_4NQGERWM_Ea7DCHeTfs2jcSbVcvLC4XNb');

export default resendClient;
