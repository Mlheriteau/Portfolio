const { writeFileSync } = require('fs');
const { join } = require('path');

// Chemin absolu vers le fichier environment.prod.ts
const targetPath = join(__dirname, 'src', 'environments', 'environment.prod.ts');

// Vérifie si les variables d'environnement sont définies
const requiredEnvVars = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY'];
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`⚠️  Variable d'environnement ${key} non définie !`);
  }
});

// Contenu du fichier à générer
const envConfigFile = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env.EMAILJS_SERVICE_ID || ''}',
  emailJsTemplateId: '${process.env.EMAILJS_TEMPLATE_ID || ''}',
  emailJsPublicKey: '${process.env.EMAILJS_PUBLIC_KEY || ''}'
};
`;

// Écriture du fichier
writeFileSync(targetPath, envConfigFile, { encoding: 'utf8' });
console.log(`✅ Fichier ${targetPath} généré avec succès !`);
