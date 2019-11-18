# Weird Image Resize
This project is fairly simple, though confusing for someone stumbling across.

#### Problem:
I have a bunch of 822x1122 images that I need to be resized to 825x1125 for a card game to be uploaded to TheGameCrafters.

Because I don't want them to go blurry or get weird stretching, I found the best way to scale them up is just add 3 pixels of the background to the right and bottom sides.

There should be no problems with this strategy, as the cards get cut much deeper than this edge, but the site still requires the images to be that size.

#### Technique:
The easiest way I found to add pixels to the image was to resize it and then paste the original size directly overtop. Because the images are so close in size, this just results in the edge being cloned - but since these are card images those parts of the image will always be the solid color background.

All png images inside of `input` will be modified and put in `output`. Images starting with `.` will be ignored.
