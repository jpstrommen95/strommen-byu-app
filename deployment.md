# Deployment

Hosting is done through domains.byu.edu through a service called reclaim hosting. It costs $45 ($15 + $30) a year to maintain for the domain and the personal service plan respectively.

0. Verify your changes locally via `npm start`.
1. To prep, run `npm run build`
   1. React will create the production resources into the git-ignored build directory.
   2. Then the helper script will zip it to `scripts/output/build.zip`
2. Open [https://cpanel.byu1.reclaimhosting.com/cpsess8294779315/frontend/jupiter/index.html?login=1&post_login=12334546846712](cPanel)
3. Navigate to Tools > Files > File Manager
4. Navigate to '/home/strommen/' > ...
   1. ... > 'public_html' for prod
   2. ... > 'dev_html' for dev
5. Select upload
6. Select 'Overwrite existing files'
7. Select `scripts/output/public_html.zip`
8. Select 'Go back to /home/strommen/...'
9. Find build.zip > right click > extract > clear the text box, thereby providing no path
