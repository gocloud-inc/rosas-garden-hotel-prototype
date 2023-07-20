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
                celebrate: resolve(__dirname, 'celebrate.html'),

                standardKiddiePackage: resolve(__dirname, 'standard-kiddie-package.html'),
                eliteKiddiePackage: resolve(__dirname, 'elite-kiddie-package.html'),
                premiumKiddiePackage: resolve(__dirname, 'premium-kiddie-package.html'),

                standardBaptismal1: resolve(__dirname, 'standard-baptismal-buffet-1.html'),
                standardBaptismal2: resolve(__dirname, 'standard-baptismal-package-buffet-2.html'),
                internationalBaptismal3: resolve(__dirname, 'international-baptismal-package-buffet-3.html'),

                standardWedding1: resolve(__dirname, 'standard-wedding-package-buffet-1.html'),
                standardWedding2: resolve(__dirname, 'standard-wedding-package-buffet-2.html'),
                internationaldWedding3: resolve(__dirname, 'international-gala-wedding-package-buffet-3.html'),
                
                standardDebut1: resolve(__dirname, 'standard-debut-package-buffet-1.html'),
                standardDebut2: resolve(__dirname, 'standard-debut-package-buffet-2.html'),
                internationaldDebut3: resolve(__dirname, 'international-gala-debut-package-buffet-3.html'),

                liveInSeminar: resolve(__dirname, 'live-in-seminar-package.html'),
                liveOutSeminar: resolve(__dirname, 'live-out-seminar-package.html'),

                allOccasionsPlated: resolve(__dirname, 'all-occasions-plated-package.html'),
                allOccasionsBuffet: resolve(__dirname, 'all-occasions-buffet-package.html'),

                dining: resolve(__dirname, 'dining.html'),
                facilities: resolve(__dirname, 'facilities.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                contactUs: resolve(__dirname, 'contact-us.html'),
                posts: resolve(__dirname, 'posts.html'),
                postsSingle: resolve(__dirname, 'post-single.html'),
                corporate: resolve(__dirname, 'corporate.html'),
                gettingHere: resolve(__dirname, 'getting-here.html'),
                location: resolve(__dirname, 'location.html'),
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
