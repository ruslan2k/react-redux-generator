SHELL:=/bin/bash

start:
	npm start

sync:
	npm run build
	rsync -aH --progress build/* ~/git/cordova-hello/www
	# cd ~/git/cordova-hello && cordova run browser
	cd ~/git/cordova-hello && cordova build android --verbose
	cd ~/git/cordova-hello && python3 yd.py
