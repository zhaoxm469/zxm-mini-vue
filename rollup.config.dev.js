import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import server from 'rollup-plugin-serve'
import { defineConfig } from 'rollup';
import path from 'path';

import pkg from './package.json';

const extensions = ['.js', '.ts'];

const resolve = (...args) => path.resolve(__dirname, ...args);

export default defineConfig({
    input: resolve('./src/main.js'),
    output: [
        {
            file: resolve('./', pkg.main),
            // 暴露外部的全局变量名称
            format: 'umd',
            name: 'Vue',
            sourcemap: true
        },
        {
            file: resolve('./', pkg.module),
            format: 'es',
            name: pkg.name,
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            sourceMap: true
        }),
        nodeResolve({
            extensions,
            modulesOnly: true
        }),
		server({
			host: 'localhost',
			contentBase: ['./examples','dist'],
			port: 10001,
			open:true,
		}),
        replace({
			'process.env.NODE_ENV': JSON.stringify('development')
        }),
        livereload()
    ]
});
