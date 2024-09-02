## Techsup Support Notes

### RTL
To change a page to RTL, you need to change the `dir` attribute of the page to `rtl` and change the `lang` attribute to `ar`
Then You can load the CSS Files in the **same order** as the `src/views/resources/css-files.html` file structure (review if conditions).

### Templates 
I used gulp JS plugin to load HTML templates into one file, so you will have some files imported in other files
Start with `src/index.html` and review the structure of the files in the `src/views` folder.
For other pages, please check the `src/views/pages` folder.

### CDN 
All used libraries are used with the CDN links, so you need to have an internet connection to load the libraries.
Maybe you can download them on the client server instead of that, please review the `src/views/resources/css-files.html` and `src/views/resources/js-files.html` files.

### Build
If you want to edit something and then build the project again to test it, please follow the following steps:
1. Install NodeJS from [here](https://nodejs.org/en/download/)
2. Install GulpJS globally by running the following command in the terminal:
```bash
npm install -g gulp
```
3. Install the project dependencies by running the following command in the terminal:
```bash
npm install
```
4. Run the following command in the terminal to build the project:
```bash
gulp build_dev
```

| You can run set of other command by running `gulp` to see the available tasks

### Credit
Mohamed Salah
