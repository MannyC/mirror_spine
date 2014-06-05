# spine_mirror

Node script to flip a spine file horizontally.  Only tested to the "works for me" stage.

Simply inverts all x coordinates and rotation/angle properties

The instructions alter files in place, so run on a backup.

## Instructions (linux based, should be easy enough to alter for Windows)

1. You'll need git, imagemagick and node.
2. Clone this repository **git clone https://github.com/MannyC/mirror_spine.git**
3. In repository directory: **npm install**
4. Use Spine to export the json for the file you want to flip
5. **node spine\_mirror.js spine\_export\_file.json > output\_file\_name.json**
6. To use imagemagick to flip png asset images in place (this will overwrite the original images; change from png as appropriate) **for i in $( ls *.png); do convert -flop $i $i; done**
7. If you place the output json file in the same location as your original spine project file then spine should be able to find the now altered images
7. Open a new project in Spine and import the output json file. 
