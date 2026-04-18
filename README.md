<center>

<img src="https://raw.githubusercontent.com/aurabaster/LOHAC/refs/heads/main/assets/logos/lohac_color.png" alt="Start ID. Site logo. The text says LOHAC dot XYZ. End ID.">

</center>

## About The Site
LOHAC.xyz is a (currently) static hosted fansite for the Homestuck franchise and its adjacent works. It is built primarily with the 3 standard web languages (HTML, CSS, JavaScript) and is hosted on Nekoweb. This is its source code!

This site has been in closed development for over a year now, starting as the Homestuck Clubhouse (homestuck.club), a small little webpage with information on how to read the comic. It makes me a little nostalgic, but it was really bad back then so hopefully I will never see it again. Starting with the rebrand to LOHAC, its codebase and iterations will be available here.

## Navigating the Repository

The main directory has a couple files:
- `/LICENSE` is the project license (MIT)
- `/favicon.ico` is the website favicon. I keep it here for fun.
- `/index.html` is the main index
- `/navigation.html` and `footer.html` are the navbar and footer drawn to each page that uses the `/assets/scripts/setup.js` script and has both a `<nav>` and `<footer>` element.
- `/README.md`? You're reading it right now!

`/assets` contains assets used by most HTML pages. There's some loose files here if there's nowhere to put them, but they are primarily split into these folders:
- `/assets/logos` contains all the logo variations used on the site
- `/assets/styles` contains all of the stylesheets
- `/assets/scripts` contains MOST of the scripts, some code is contained within HTML files or in the directories of the respective tool. I'll reorganize this eventually...

Some assets are also located in these respective page folders:

- `/directory` is the Fandom Directory
- `/textboxes` is the Textbox Generator
- `/shipixels` and `/dollmaker` are self explanatory

**NOTE:** You may see that a lot of unused pages are sprawled around. These are available to view under their respective URL on the site, but are not listed anywhere. (I'm just not happy with them yet, okay? You can consider this a beta test...) Once these are complete, they will be given a listing on the site.

## Contribute

Fansites such as LOHAC cannot be created alone. If you wish to contribute, whether it is submitting to our directory or wanting to host your web stuff on our site, feel free to reach out!

If you have an addition or suggestion that would improve the site, please fork the repo and create a pull request. You can also create an issue with the tag "enhancement"

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add this feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### GitHub Contributors

<a href="https://github.com/aurabaster/LOHAC/graphs/contributors">
<img src="https://contrib.rocks/image?repo=aurabaster/LOHAC" alt="contrib.rocks image" />
</a>

## Usage and License

LOHAC's source code operates under the [MIT License](https://choosealicense.com/licenses/mit/). All of the art and visual assets used for the site and tools such as the Dollmaker and Shipixels do not fall under this. Make sure to contact the original authors about the usage rights.

I decided to make the site open source to allow as many people to contribute and build onto it, as well as let it act as a learning tool for aspiring webmasters the same way I had used other sites to learn before. If you feel wrong about using this codebase without crediting, feel free to link back to the site (and make sure your project operates under the same license!).

## Contact

You may contact me about the site via [The LOHAC Discord](https://discord.com/invite/wRfw4DSppS) or via lohacmail@proton.me. Thanks!