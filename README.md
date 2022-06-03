# Get with THE TIMES

This project was created as a practice Take-Home challenge for the Turing School of Software & Design. My goal was to create a website that would allow me to check out a list of my three favorite sections of the New York Times: the arts section, fashion, and of course the obituaries. Additionally to practice my skills going into interviews and as a junior developer.

# MVP

The baseline for this project was to utilize the
[NYT API](https://developer.nytimes.com/apis) to build an app that would show:

- A list of articles
- A “detailed” view for each article (as opposed to summary/list view)
- Articles in the list must link to the detailed article view you create
- Some sort of search, filter, OR sort
  [Read the Full Spec](https://mod4.turing.edu/projects/take_home/take_home_fe)

# Project Planning

Since the goal was to create this project in 8 hours total work time or less, planning was paramount.
[view my wireframe here](https://www.canva.com/design/DAFCTKtyPqw/Bef2HdMkL3KkcTHsstMMIQ/view?utm_content=DAFCTKtyPqw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
I decided on a general color scheme first:

- "Orange Yellow Crayola":"e3c567"
- "Satin Sheen Gold":"c8963e"
- “Sunray":"d9ae61"
- "Dark Jungle Green":"1f2421"

I looked at various news applications for inspiration, including Medium, Reductress,and The Washington Post.
I decided to style my page as a loud and proud 1970s version of those websites from an alternate timeline where the internet was commercially available much earlier in the century. Get with whose times, exactly?

Then I created the wireframe linked above using Canva. Next I used the Notion to build a list of general iterations and components. I also worked with other students talking through what an ideal component tree might look like.
The below outline is the refined version of my plan:

- App
  - Header
  - ArticleBox
  - Error
  - SingleArticle
    - ExpandedView
  - Search

## View Project Locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Future Additions

If I had more time with this project I would definitely

- implement testing
- refine the styling further.
- add more extensive error handling
  - for invalid urls
  - more specific errors for API responses.
- Refactor to produce a cleaner more SRP functionality
- Add link to home on page title with Router
