# PayWallDetector

PayWallDetector is a chrome extension that detects links on twitter that link out to sites that use a paywall. 
If it finds one it will add a dollar bill icon next to the link.  Our advice is, do not click any link that goes to a site 
that uses paywalls, do not even give them the impression.

Paywalls are a horrible outdated practice that has to go away and this is our contribution to making this happen.

INSTALLATION

To install a new extension in Chrome. Type “chrome://extensions” in a tab on Chrome to bring up the extensions page.

Once on this page, check “Developer Mode” to enable loading unpacked extensions. This will allow you to load your 
extension from a folder. Next, click “Load unpacked extension” or drag the “PayWallDetector Extension” folder onto the 
page to load up the extension. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab.


USAGE

Browse twitter and ignore any and all paywall links.

If you would like to add a site to the paywall list there is a file called urls.json at the root of the project.  
If you know of a site that uses paywalls just add to the JSON object and create a pull request. 
