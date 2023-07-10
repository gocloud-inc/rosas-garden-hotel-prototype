import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlMinifier from 'html-minifier';
import sass from 'sass';

function minifyHtml() {
    return {
        name: 'minify-html',
        transformIndexHtml(html) {
            const minified = htmlMinifier.minify(html, {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
            });
            return minified.replace(/<style>(.*?)<\/style>/gis, (match, p1) => {
                return `<style>${htmlMinifier.minify(p1, { minifyCSS: true })}</style>`;
            });
        },
    };
}

export default defineConfig({
    base: '',
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    plugins: [
        minifyHtml(),
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        brotliSize: true,
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
                index: resolve(__dirname, 'index.html'),
                accomodation: resolve(__dirname, 'accomodation.html'),
                aboutUs: resolve(__dirname, 'about-us.html'),
                banquet: resolve(__dirname, 'banquet.html'),
                banquetSingle: resolve(__dirname, 'banquet-single.html'),
                dining: resolve(__dirname, 'dining.html'),
                facilities: resolve(__dirname, 'facilities.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                contactUs: resolve(__dirname, 'contact-us.html'),
                posts: resolve(__dirname, 'posts.html'),
                postsSingle: resolve(__dirname, 'post-single.html'),
            },
            output: {
                dir: 'dist',
            }
        }
    },
    // Configure the Sass preprocessor
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    },
});
