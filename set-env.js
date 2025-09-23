const { writeFileSync } = require('fs');
const { join } = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const targetPath = join(__dirname, './src/environments/environment.prod.ts');

const envConfigFile = `
export const environment = {
  production: true,
  emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID}',
  emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID}',
  emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY}'
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`✅ Fichier ${targetPath} généré avec succès`);
