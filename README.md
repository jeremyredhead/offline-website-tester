# Offline Website Tester
## Simple Userscript for testing static websites "offline" without setting up a server or port. 

### Usage
This is a userscript, which runs in-browser and requires a userscript manager such as Greasemonkey or Tampermonkey.  
It currently supports "re-wiring" links and css resources, and re-directing folders to index.html for one folder.  
To use it, change the example url as instructed:
`file:///path to folder on disk/*`
and then allow file:/// urls for your userscript manager.
Voila! You're done.

### Todo
- Load scripts after re-wiring
- Iterate through url-based css rules and fix
- Support multiple folders at once
