import { rm } from 'fs/promises';
import { join } from 'path';

// função que é chamada a cada fim de ciclo de teste
// nesse caso ela remove o arquivo de banco de dados

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) { /* empty */ }
});
