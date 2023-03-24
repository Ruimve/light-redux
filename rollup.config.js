import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.main,
      format: 'es'
    },
    external: ['react-redux', '@reduxjs/toolkit'],
    plugins: [
      nodeResolve(),
      typescript({
        compilerOptions: {
          declaration: false
        }
      }),
      commonjs(),
      terser()
    ]
  },
  {
    input: 'src/testingLibrary.ts',
    output: {
      file: 'es/testingLibrary/testingLibrary.js',
      format: 'es'
    },
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'redux',
      'react-redux',
      '@reduxjs/toolkit',
      '@testing-library/react'
    ],
    plugins: [
      nodeResolve(),
      typescript({
        compilerOptions: {
          declaration: false
        }
      }),
      commonjs(),
      terser()
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'types/index.d.ts',
      format: 'es'
    },
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'redux',
      'react-redux',
      '@reduxjs/toolkit',
      '@testing-library/react'
    ],
    plugins: [
      typescript()
    ]
  },
  {
    input: 'src/testingLibrary.ts',
    output: {
      file: 'types/testingLibrary.d.ts',
      format: 'es'
    },
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'redux',
      'react-redux',
      '@reduxjs/toolkit',
      '@testing-library/react'
    ],
    plugins: [
      typescript()
    ]
  }
];