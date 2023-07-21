# Welcome to PIZZA SLICE Project

## Wireframe
https://www.figma.com/file/m4Gu7AO1QlrAvrFpxnBIda/FINAL-PROJECT?type=design&node-id=21%3A63&mode=design&t=r4sp0DcdnUINpMSf-1

## Why did you choose that project?

We choose https://pizzaslice.jp/ web site for our analytical project.
We liked the simple taste of design of this site.
However, there are several things we don't like and we thought there can be added several new features.  
We added these features

1. fixed header
2. floating menu icon
3. hiding menu images for mobile version.

## How did you divide the work between team members?

We don't want to conflict with each other's task so primarily separate tasks between each page. We divided work as follows.

| P.I.C.   | PAGE    |
| -------- | ------- |
| Masahiro | index   |
| Kanta    | menu    |
| Masahiro | contact |
| Kanta    | login   |

Masahiro handles index and contact pages. He thought overlaying paragraph onto an image is charenging task and wanted to learn how to do it. And alse charged with adding zoom-out animation for images.

Kanta handles menu and login pages. He tried to implement floating hamburger menu with pure html, css and javascript. He also created mobile version of menu page with taste of cacutus club cafe web site, which is hiding menu images when seen from a mobile.

As for common parts, such like header or footer, we separate scss files so that we could use it for all the pages.  
(See components folder!!)

## What you learned and what you struggled the most

### Kanta
 
I had a trouble with my understanding on git and my attitude on googling process.
When I tried to push to remote branch, it failed with this error 
"! [rejected] feature/menu -> feature/menu (non-fast-forward) error: failed to push some refs to 'https://github.com/aryanaroraciccc/Masahiro_Kanta_WMAD_103_FINAL' hint: Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. Integrate the remote changes (e.g. hint: 'git pull ...') before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details."

I googled it and hit this website(https://rakeshjain-devops.medium.com/fix-to-tip-of-your-current-branch-is-behind-its-remote-counterpart-git-error-eb75f719c2d5). 
I was in a kind of rush, so I didn't really read the contents but just tried the command the website suggested.(Terrible mistake)
<img width="822" alt="Screenshot 2023-07-21 at 12 27 41" src="https://github.com/aryanaroraciccc/Masahiro_Kanta_WMAD_103_FINAL/assets/99339182/aab6e138-3057-474d-b4ae-1e590f763e88">

Then all of my changes has disappered. I was so upset. 
At the end, I googled the situation again, found this(https://stackoverflow.com/questions/5788037/recover-from-losing-uncommitted-changes-by-git-reset-hard). "git reflog show" and "git reset HEAD{n}" saved my life.

I learned that I have to obviously be careful on my googling process. Also "git reflog show" and "git reset HEAD{n}".

### Masahiro

1. Automatically changing background images and restart animation with javascript.
2. Position and z-index property.
3. Referencing files when separate them, sometimes it occurs errors.

## Future improvements

### Kanta
1. Refactor menu.scss. 
2. Animation on each of menu. I want to be appear gradually on scrolling the website.

### Masahiro

1. Fix bugs especially for automatic changing image feature.(Sometime it doesn't work!?)
2. Changing background color of header after scrolled
3. Implement backend for data collection.
