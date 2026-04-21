<center>

<img src="https://raw.githubusercontent.com/aurabaster/LOHAC/refs/heads/main/assets/logos/lohac_color.png" alt="Start ID. Site logo. The text says LOHAC dot XYZ. End ID.">

</center>

## About The Site
LOHAC.xyz is a (currently) static hosted fansite for the Homestuck franchise and its adjacent works. It is built primarily with the 3 standard web languages (HTML, CSS, JavaScript) and is hosted on Nekoweb. This is its source code!

The development side of the site, unlike its competitors, is hard focused on fandom development and collaboration. It is not only a place where you can discover other people's work, but also submit your own regardless of connections in the space. As long as it or you are not harming anybody, chances are your work can be included!

This fansite has been in closed development for over a year now, starting as the Homestuck Clubhouse (homestuck.club), a small little webpage with information on how to read the comic. It makes me a little nostalgic, but it was really bad back then so hopefully I will never see it again. Starting with the rebrand to LOHAC, its codebase and iterations will be available here.

## Navigating the Repository

The main directory has a couple files:
- `/LICENSE` is the project license (GNU GPL v3)
- `/favicon.ico` is the website favicon. I keep it here for fun.
- `/index.html` is the main index
- `/navigation.html` and `footer.html` are the navbar and footer drawn to each page using SSI
- `/README.md`? You're reading it right now!

`/assets` contains assets used by most HTML pages. There's some loose files here if there's nowhere to put them, but they are primarily split into these folders:
- `/assets/logos` contains all the logo variations used on the site
- `/assets/styles` contains all of the stylesheets
- `/assets/scripts` contains MOST of the scripts, some code is contained within HTML files or in the directories of the respective tool. I'll reorganize this eventually...

`/directory` also includes its own image folder under `/directory/thumbnails`, which is where all the directory thumbnails are stored.

`/originals` has all the original content from the site. It includes:
- `/textboxes`, the Textbox Generator
- `/shipixels` and `/dollmaker`, which are self explanatory

`/archive` is for all the external content we archive here. All you really need to know is: 
- Page archives go in `/archive/pages`,
- Download sources go in `/archive/downloads`,
- Resource pages go in `/archive/resources`.

**NOTE:** You may see that a lot of unused pages are sprawled around. These are available to view under their respective URL on the site, but are not listed anywhere. (I'm just not happy with them yet, okay? You can consider this a beta test...) Once these are complete, they will be given a listing on the site.

## Contribute

Fansites such as LOHAC cannot be created alone. A fandom shouldn't be dictated by one person's outlook, after all, which is something that reflects in my approach to running fanprojects.

If you wish to contribute, whether it is submitting to our directory or wanting to host your web stuff on our site, feel free to reach out!

If you have an addition or suggestion that would improve the site, please fork the repo and create a pull request. You can also create an issue with the tag "enhancement"

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add this feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Not every single change will be accepted, but that won't be solely decided by me, either. I hope to see your contributions soon!

### GitHub Contributors

<a href="https://github.com/aurabaster/LOHAC/graphs/contributors">
<img src="https://contrib.rocks/image?repo=aurabaster/LOHAC" alt="contrib.rocks image" />
</a>

## License

The current project operates under the [GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/) license.

## Contact

You may contact me about the site via [The LOHAC Discord](https://discord.com/invite/wRfw4DSppS) or via lohacmail@proton.me. Thanks!
