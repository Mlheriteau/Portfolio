import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID}',
  emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID}',
  emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, { encoding: 'utf-8' });
console.log('✅ environment.prod.ts généré avec succès');
