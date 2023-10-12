# ADA App

- Unzip (extract) the ADA folder to a location of your choice (right click and extract)
- Install VSCode onto your computer. You'll find it here: https://code.visualstudio.com/
- Open VSCode
- File > Open Folder...
- Navigate to where you have the unzipped ADA folder and press `Select Folder`
- Terminal > New Terminal
- In the Terminal window at the bottom of VSCode type (without quotes) `node -v` and press ENTER
- If you see a version of node displayed, skip the next line. If you see `command not found` error or similar, you must install node first.
- If you need to install `node` go here: https://nodejs.org/en/download
- In your Terminal window type `npm install` or `npm i` and press ENTER
- Wait for install
- Now do `npm start`
- A window should open with the ADA app running.

TOUBLESHOOTING

- Any time you need to cancel an action inside the terminal press `ctrl + c` twice.
- If no window opens when you do `npm start`. Try navigating to https://localhost:3000/ in your browser
- If localhost:3000 doesn't work and it says something like 'this site can't provide a secure connection', either google how to
  fix this issue OR look at your terminal for `On Your Network: http://192.168.x.x:3000`, hold the `control` key and click the address (you may need to scroll up in the terminal to find this).
  If 'On your nextwork' is not shown in the terminal. Press `ctrl + c` twice (inside the terminal) followed by `npm start` and try loading it again until you see `on your network`. If it still doesn't appear. Google how to find out what your computer's IP address is and do http://yourIPadress:3000 inside your browser.
