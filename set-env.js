const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.ts';

const envFileContent =`
  export const environment = {
    production: true,
    profileUrl: '${process.env.PROFILE_URL}'
  };
`;

writeFileSync(targetPath, envFileContent);
