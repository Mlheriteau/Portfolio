export const environment = {
  production: true,
  emailJsServiceId: process.env['EMAILJS_SERVICE_ID'] || '',
  emailJsTemplateId: process.env['EMAILJS_TEMPLATE_ID'] || '',
  emailJsPublicKey: process.env['EMAILJS_PUBLIC_KEY'] || '',
};