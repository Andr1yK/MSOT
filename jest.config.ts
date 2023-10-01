import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
  ...defaults,
  verbose: true,
  preset: 'ts-jest',
};

export default config;
