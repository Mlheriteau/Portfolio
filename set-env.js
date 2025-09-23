import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const targetPath = './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
  emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}'
};
`;

fs.writeFileSync(targetPath, envConfigFile, { encoding: 'utf-8' });
console.log('✅ environment.ts généré avec succès');
