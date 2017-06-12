setup:
	@npm install
reset:
	@watchman watch-del-all
	@rm -rf node_modules
	@npm cache clean

start:
	@npm start
rios:
	@react-native run-ios
randroid:
	@react-native run-android

open-ios:
	@open ios/ListDetail.xcodeproj
open-android:
	@open -a /Applications/Android\ Studio.app ./android
